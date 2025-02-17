import { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../api/axiosInstance";
import Spinner from "../../components/ui/spinner";

export default function SigninForm() {
  const navigate=useNavigate();
  const location = useLocation();
  const [loading,setLoading]=useState(false);
  let [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  let [showPassword, setShowPassword] = useState(false);

  let handleInputChange = (event) => {
    setFormdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let togglePassword = () => {
    setShowPassword(!showPassword);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(formdata);

    try {
      console.log("Submitting form...");

      const response = await axiosInstance.post("/api/users/login/", {
        email: formdata.email,
        password: formdata.password,
      });

      console.log("Response data:", response.data);

      if (response.data.token) {
        localStorage.setItem("cygnusId", response.data.cygnusId);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("collegId", response.data.collegeId);
        toast.success("User Logged In successfully!");
        navigate("/");
      } else {
        console.error("Missing token in response");
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // toast.error("Login failed. Please check your credentials.");
      toast.error(error.response?.data?.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full md:w-[430px] h-[435px] p-0 rounded-2xl flex flex-col justify-center items-start">
      <form className="h-full flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col w-full md:w-[430px] h-[74px]">
            <label htmlFor="email" className="block text-sm font-medium text-white text-xl">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              id="email"
              required
              onChange={handleInputChange}
              className="px-4 text-black mt-1 w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div key={"password"} className="relative flex flex-col w-full md:w-[430px] h-[74px]">
            <label htmlFor={"password"} className="block mb-1 text-sm font-medium text-white md:text-xl">
              {"Password"}:
            </label>
            <div className="w-full h-full flex flex-row justify-start items-center">
              <input
                type={showPassword ? "text" : "password"}
                name={"password"}
                placeholder={"Enter Password"}
                id={"password"}
                required
                onChange={handleInputChange}
                className="px-4 text-black w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg pe-16"
              />
              <div className="absolute right-3 w-10 h-10 flex flex-col justify-center items-center">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePassword} className="w-5 h-5 text-cygnus-black" />
                ) : (
                  <FaEye onClick={togglePassword} className="w-5 h-5 text-cygnus-black" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row justify-end items-center">
        <p 
  onClick={() => { navigate("/forgot-password", { state: { from: location } }) }} 
  className="w-auto h-auto text-lg font-normal text-[#d9b55b] text-end hover:cursor-pointer hover:text-blue-500">
    Forgot password?
</p>


        </div>

        <div className="flex justify-center">
          <button className={`rounded-md ${loading?"bg-transparent":"bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263]"} font-semibold  text-white px-6 py-2 h-12 w-[160px]  flex flex-row justify-center items-center`}>
            {loading?<span className="w-auto h-auto flex flex-row justify-center items-center gap-3 "><Spinner className={"w-8 h-8"} id={"g1234"}/><p className="text-lg font-semibold text-cy-secondary-bg">Loading...</p></span>:"Done"}
          </button>
        </div>

        <div className="w-full h-auto flex flex-row justify-center items-center">
          <p className="w-auto h-auto text-base font-Young font-normal text-center text-white">
            Don't have an Account? <Link to={"/register"}><span className="hover:cursor-pointer text-[#d9b55b] hover:text-blue-600">Signup</span></Link>
          </p>
        </div>
      </form>
    </div>
  );
}
