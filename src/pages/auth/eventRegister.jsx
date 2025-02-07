import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../api/axiosInstance";
import { cn } from "../../utils";

export default function EventRegister({className, loggedInUser, eventType, maxParticipants }) {
  console.log("Props Received:", { maxParticipants, eventType, loggedInUser });
  let { id } = useParams();
   const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    Name: "",
    email: "",
    Phone: "",
    Id: "",
    TeamMember1: "",
    teamMembers: [], // Dynamically set based on maxParticipants
  });

  useEffect(() => {
    if (loggedInUser) {
      setFormdata((prev) => ({
        Name: loggedInUser.name || "",
        email: loggedInUser.email || "",
        Phone: loggedInUser.phone || "",
        Id: loggedInUser.id || "",
        TeamMember1: loggedInUser.teamMember1 || "", // User is always Team Member 1
        teamMembers: eventType === "team" && maxParticipants > 0 ? new Array(maxParticipants - 1).fill("") : ['',''],
      }));
    }
  }, [loggedInUser, eventType, maxParticipants]);


  useEffect(() =>{
    console.log("Updated teamMembers array:", formdata.teamMembers);
    
  }, [formdata.teamMembers]);

  const handleTeamMemberChange = (index, value) => {
    setFormdata((currData) => {
      const updatedTeamMembers = [...currData.teamMembers];
      updatedTeamMembers[index] = value;
      return { ...currData, teamMembers: updatedTeamMembers };
    });
  };


  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      navigate("/login");   
      return;
    }
    
    const cygnusIds = [...formdata.teamMembers]; // Assuming formdata.teamMembers is an array of Cygnus IDs
    event.preventDefault();
  
    console.log("Final Form Data:", cygnusIds);
    
    // Create payload with cygnusIds as an array of strings (assuming they are correct)
    const payload = {
      cygnusIds: cygnusIds.filter(id => id !== "") // Filter out empty IDs
    };
    
    try {
      const response = await axiosInstance.post(
        `api/events/${id}/register`,  
        payload, // Send the payload with cygnusIds
        { 
          headers: {
            Authorization: `Bearer ${token}`, // Correctly passing Authorization header
          }
        }
      );
  
      if (response.status === 200) {
        toast.success("Successfully Registered For the Event");
        navigate("/");
      } else {
        toast.error(response.data.message || "Unknown error occurred");
      }
    } catch (error) {
      
      console.error("Error sending request:", error);
  
      // Log the error response from the server for more details
      if (error.response) {
        console.log("Error response data:", error.response.data);
        toast.error(error.response.data.message || "Error occurred during registration");
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  
  return (
    <div className={cn("w-full md:w-[430px] px-0 py-6 rounded-2xl flex flex-col justify-between font-serif",className)}>
      <form className="h-full flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-full">
          {[
            { label: "Name", name: "Name", value: formdata.Name },
            { label: "Email", name: "email", value: formdata.email },
            { label: "Contact Number", name: "Phone", value: formdata.Phone },
            { label: "ID Number", name: "Id", value: formdata.Id },
            { label: "Team Member 1", name: "TeamMember1", value: formdata.TeamMember1 },
          ].map(({ label, name, value }) => (
            <div key={name} className="flex flex-col w-full md:w-[430px] h-[74px]">
              <label htmlFor={name} className="text-white text-lg font-bold">{label}:</label>
              <input
                type="text"
                name={name}
                value={value}
                readOnly
                className="px-4 text-black bg-white mt-1 w-full rounded-md shadow-sm cursor-not-allowed h-[32px]"
              />
            </div>
          ))}

          {/* Render team member inputs dynamically */}
          {eventType === "team" && formdata.teamMembers.length > 0 &&
            formdata.teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col w-full md:w-[430px] h-[74px]">
                <label className="text-white text-lg font-bold">{`Team Member ${index + 2}:`}</label>
                <input
                  type="text"
                  placeholder="Enter Cygnus ID"
                  value={member}
                  onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                  className="px-4 text-black mt-1 w-full rounded-md h-[32px] bg-gray-100 border border-gray-300 shadow-sm"
                />
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] text-white px-6 py-2 w-[150px] rounded-sm hover:bg-yellow-600">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
