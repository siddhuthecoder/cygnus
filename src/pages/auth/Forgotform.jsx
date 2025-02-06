import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../api/axiosInstance";

export default function ForgotPasswordForm() {
  const { id } = useParams();
  const [formdata, setFormdata] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormdata((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
    setErrors((currErrors) => ({ ...currErrors, [event.target.name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosInstance.patch(`/api/users/reset-password/${id}`, {
        password: formdata.newPassword,
        confirmPassword: formdata.confirmPassword,
      });
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Password reset failed. Please try again.");
    }
  };

  return (
    <div className="w-full md:w-[430px] h-[435px] p-0 rounded-2xl flex flex-col justify-center items-start">
      <form className="h-full flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 w-full">
          {/* New Password Field */}
          <div className="relative flex flex-col w-full md:w-[430px] h-[74px]">
            <label htmlFor="newPassword" className="block mb-1 text-sm font-medium text-white md:text-xl">
              New Password:
            </label>
            <div className="w-full h-full flex flex-row justify-start items-center">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Enter New Password"
                id="newPassword"
                required
                onChange={handleInputChange}
                className="px-4 text-black w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg pe-16"
              />
              <div className="absolute right-3 w-10 h-10 flex flex-col justify-center items-center">
                {showNewPassword ? (
                  <FaEyeSlash onClick={() => setShowNewPassword(!showNewPassword)} className="w-5 h-5 text-cygnus-black cursor-pointer" />
                ) : (
                  <FaEye onClick={() => setShowNewPassword(!showNewPassword)} className="w-5 h-5 text-cygnus-black cursor-pointer" />
                )}
              </div>
            </div>
            {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="relative flex flex-col w-full md:w-[430px] h-[74px]">
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-white md:text-xl">
              Confirm Password:
            </label>
            <div className="w-full h-full flex flex-row justify-start items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                id="confirmPassword"
                required
                onChange={handleInputChange}
                className="px-4 text-black w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg pe-16"
              />
              <div className="absolute right-3 w-10 h-10 flex flex-col justify-center items-center">
                {showConfirmPassword ? (
                  <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="w-5 h-5 text-cygnus-black cursor-pointer" />
                ) : (
                  <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="w-5 h-5 text-cygnus-black cursor-pointer" />
                )}
              </div>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="rounded-md bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] text-white px-6 py-2 w-auto hover:bg-[#d9b55b]">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}
  