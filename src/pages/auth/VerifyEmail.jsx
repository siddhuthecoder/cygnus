import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyEmail = () => {
    const { id } = useParams(); // Get token from URL
    const navigate = useNavigate();
    const [message, setMessage] = useState("Verifying your email...");
    const [status, setStatus] = useState("loading"); // "loading", "success", "error"

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axiosInstance.get(`/api/users/verify-email/${id}`);

                // Store values in localStorage
                localStorage.setItem("cygnusId", response.data.cygnusId);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("collegId", response.data.collegId);

                setStatus("success");
                setMessage("Email verified successfully! Redirecting...");
                navigate("/success")
                // setTimeout(() => navigate("/success"), 2000);
            } catch (error) {
                setStatus("error");
                setMessage("Verification failed. Invalid or expired link.");
            }
        };

        verifyEmail();
    }, [id, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center transition-all duration-300">
                {status === "loading" && (
                    <div className="flex flex-col items-center">
                        <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
                        <p className="text-lg font-semibold text-gray-700 mt-4">{message}</p>
                    </div>
                )}

                {status === "success" && (
                    <div className="flex flex-col items-center">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                        <p className="text-lg font-semibold text-green-600 mt-4">{message}</p>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex flex-col items-center">
                        <XCircle className="h-12 w-12 text-red-500" />
                        <p className="text-lg font-semibold text-red-600 mt-4">{message}</p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                        >
                            Go to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
