import React, { useEffect,useState } from "react";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import Eventcard from "../../components/ui/eventcard";
import Registercard from "./registercard";
import SigninForm from "./signinform";
import eventimage from '/images/eventimage.png';
import EventRegister from "./eventRegister";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate,useParams } from "react-router-dom";

function EventRegisterPage({ title }) {
  let { id } = useParams();
  useEffect(()=>{
        window.scrollTo(0,0);
    })


    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [teammates,setTeammates]=useState(4)

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axiosInstance.get("/api/users/userdetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data.userdetails;
        setUser({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          id: userData.collegeId,
          teamMember1: userData.cygnusId,
        });
      } catch (error) {
        if(error.status==403){
          localStorage.removeItem("cygnusId");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("collegId");
            navigate('/login');
        }
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [navigate]);

  useEffect(()=>{
    const fetchEvent=async()=>{
        try{
           const response=await axiosInstance.get(`/api/events/${id}`);
           if(response.status=200){
            setTeammates(response.data.event?.teammates || 0);
            console.log("Teamates",response.data.event?.teammates)
           }else{
              console.log("Error while fetching particular event");
           }
        }catch(error){
          console.error("Error fetching events:", error);
        }
    }
    fetchEvent();
   
},[]);
  
  return (
    <>
          <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-authbg bg-contain bg-repeat'>
                <MainLayout>
                  <div className="w-full h-auto flex flex-col justify-start items-center gap-0 font-serif">
                    <ResTitlePagelayout className={"justify-start ]"} title={"Register"}>
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-5xl h-auto gap-8 p-6 md:p-8 rounded-2xl mb-10 order-1 md:order-2">
                        <EventRegister className={"order-2 md:order-1"}  loggedInUser={user} eventType="team" maxParticipants={teammates} />
                        <div className="order-1 md:order-2 w-auto h-auto flex flex-col justify-start items-center pt-14 gap-6">
                            <div className="w-[95%] h-auto flex flex-col items-center ">
                                <div className="w-full h-[400px]">
                                  <div className=" relative w-full h-full flex flex-col justify-center items-center p-10">
                                      <img className="w-full h-full  z-40" src={eventimage} alt={"eventimage"}/>
                                      <div className="absolute inset-0 flex flex-col justify-end items-start gap-[2px] event-border-two overflow-hidden z-50">
                                        
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div >
                                    <p className="font-serif text-[19px]">PreEvents</p>
                                </div>
                                <div> 
                                    <p className="text-[22px] font-serif w-64 text-center text-[#E1CA6D]">Echoes of the Past: A Debate on Tradition</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </ResTitlePagelayout>
                  </div>
                </MainLayout>
            </div>

    </>
  );
}

export default EventRegisterPage;