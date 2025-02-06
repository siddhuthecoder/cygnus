import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import useTogglePassword from "../../hooks/useTogglePassword";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import axiosInstance from "../../api/axiosInstance";

export default function Register() {
  let [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    collegeId: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });
  const { togglePassword, getInputType } = useTogglePassword();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let handleInputChange = (event) => {
    setFormdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formdata);
    try {
      const response = await axiosInstance.post("/api/users/register", formdata);
      // localStorage.setItem("cygnusId", response.data.cygnusId);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("name",response.data.name);
      // localStorage.setItem("collegId",response.data.collegId);
      // console.log(response.data)
      
      toast.success("Please check your Email for Verification");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
     
  };

  // { label: "Password", type: "password", name: "password", placeholder: "Enter Password" },
  // { label: "Confirm Password", type: "password", name: "confirmPassword", placeholder: "Confirm Password" }
  return (
    <div className="w-full md:w-[430px] p-0 md:p-6 rounded-2xl flex flex-col justify-between">
      <form className="h-full flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-full">
          {[
            { label: "Name", type: "text", name: "name", placeholder: "Enter Name" },
            { label: "Email Address", type: "email", name: "email", placeholder: "Enter Email Address" },
            { label: "WhatsApp Number", type: "tel", name: "phone", placeholder: "Enter Number", pattern: "[0-9]{10}" },
            { label: "ID Number", type: "text", name: "collegeId", placeholder: "Enter ID Number (e.g., N200503)" },
           
          ].map(({ label, type, name, placeholder, pattern }) => (
            <div key={name} className="flex flex-col w-full md:w-[430px] h-[74px]">
              <label htmlFor={name} className="block text-sm font-medium text-white md:text-xl">
                {label}:
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                pattern={pattern}
                required
                onChange={handleInputChange}
                className="px-4 text-black mt-1 w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          ))}
          <div key={"password"} className="relative flex flex-col w-full md:w-[430px] h-[74px]">
              <label htmlFor={"password"} className="block mb-1 text-sm font-medium text-white md:text-xl">
                {"Password"}:
              </label>
              <div className="w-full h-full flex flex-row justify-start items-center">
              <input
                type={getInputType("password1")}
                name={"password"}
                placeholder={"Enter Password"}
                id={"password"}
                required
                onChange={handleInputChange}
                className="px-4 text-black w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500  text-lg pe-16"
              />
              <div className="absolute  right-3 w-10 h-10 flex  flex-col justify-center items-center">
                  {
                      getInputType("password1")=="password"?
                      <FaEye onClick={()=>{togglePassword("password1")}} className="w-5 h-5 text-cygnus-black" />:
                      <FaEyeSlash onClick={()=>{togglePassword("password1")}} className="w-5 h-5 text-cygnus-black" />
                    }
              </div>
            </div>
          </div>
          <div key={"confirmPassword"} className="relative flex flex-col w-full md:w-[430px] h-[74px]">
              <label htmlFor={"confirmPassword"} className="block mb-1 text-sm font-medium text-white md:text-xl">
                {"Confirm Password"}:
              </label>
              <div className="w-full h-full flex flex-row justify-start items-center">
                <input
                  type={getInputType("password2")}
                  name={"confirmPassword"}
                  placeholder={"Confirm Password"}
                  id={"confirmPassword"}
                  required
                  onChange={handleInputChange}
                  className="px-4 text-black  w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg pe-16"
                />
                <div className="absolute right-3 w-10 h-10 flex  flex-col justify-center items-center">
                    
                    {
                      getInputType("password2")=="password"?
                      <FaEye onClick={()=>{togglePassword("password2")}} className="w-5 h-5 text-cygnus-black" />:
                      <FaEyeSlash onClick={()=>{togglePassword("password2")}} className="w-5 h-5 text-cygnus-black" />
                    }
                </div>

              </div>
              
            </div>
          {/* Gender Selection as Radio Buttons */}
          <div className="flex flex-col w-full mw:w-[430px] h-[74px] justify-start items-start gap-2">
            <label className="block text-sm font-medium text-white md:text-xl">Gender:</label>
            <div className="flex justify-center gap-10">
              <label className="text-white text-lg flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                  onChange={handleInputChange}
                  className="appearance-none w-4 h-4 border-2  rounded-full  checked:bg-[#E1CA6D] checked:ring-2 checked:ring-transparent  checked:ring-offset-1"
                />
                Male
              </label>
              <label className="text-white text-lg flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                  onChange={handleInputChange}
                  className="appearance-none w-4 h-4 border-2  rounded-full  checked:ring-transparent checked:bg-[#E1CA6D] checked:ring-2  checked:ring-offset-1"
                />
                Female
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-[1.5rem]">
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] text-white px-6 py-2 w-[120px] rounded-sm hover:bg-[#d9b55b] disabled:opacity-50"
          >
            {loading ? "Registering..." : "Done"}
          </button>
        </div>
        
      </form>
      <div className="mt-4 text-center flex justify-center items-center">
        <p className="text-white text-lg mr-2">Already registered?</p>
        <Link to="/login" className="text-lg font-normal text-[#d9b55b] ">
          Login here
        </Link>
    </div>
    </div>
  );
}
