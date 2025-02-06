import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../api/axiosInstance";

export default function ForgotEmailForm() {
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();

  let handleInputChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email) {
      setError("Email is required.");
      return;
    }
    
    try {
      await axiosInstance.post("/api/users/forgot-password", { email });
      toast.success("Password reset link sent to your email!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="w-full md:w-[430px] h-[300px] p-0 rounded-2xl flex flex-col justify-center items-start">
      <form className="h-full flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="relative flex flex-col w-full md:w-[430px] h-[74px]">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-white md:text-xl">
            Enter your Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            required
            value={email}
            onChange={handleInputChange}
            className="px-4 text-black w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex justify-center">
          <button className="rounded-md bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] text-white px-6 py-2 w-auto hover:bg-[#d9b55b]">
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
}
