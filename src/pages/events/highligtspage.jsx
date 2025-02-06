import React, { useEffect } from "react";
import { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";

import BorderBg from "../../components/ui/borderbg";
import bottombg from "/images/bottompattern.png";
import eventimage from '/images/eventimage.png';
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";

function HighlightsPage({event}){
    const {id}=useParams();
    const [details,setDetails]=useState();
    const [title,setTitle]=useState("")
    const [reveal,setReveal]=useState(false);
    const [description,setDescription]=useState("");
    const [hint,setHint]=useState("");
    const [image,setImage]=useState();
    useEffect(()=>{
          window.scrollTo(0,0);
        //   console.log(id);
      })
    useEffect(()=>{
        const fetchDetails=async()=>{
            try{
               const response=await axiosInstance.post(`/api/highlights/${id}`);
                  
               if(response.status==200){
                     setTitle(response.data.highlight.title);
                     setReveal(response.data.highlight.isRevealed);
                     setDescription(response.data.highlight.description);
                     setHint(response.data.highlight.hint);
                     setImage(response.data.highlight.imageUrl)
                //  setDetails(response.data.highlight);
               }
            }catch(error){
                console.log("Error while fetching the data",error);
            }
        } 
        fetchDetails(); 
    },[]);  
    const [guess,setGuess] = useState("");
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const response = await axiosInstance.post(
                `/api/highlights/${id}/submit`,
                { answer: guess },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            toast.success("Answer submitted successfully!");
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            toast.error(error.message);
        }
        
    }
    const handleInputChange = (e)=>{
        setGuess(e.target.value);
        // console.log(guess);   
    }

    return(
        <div id='CygnusEvent' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-royalbg bg-contain bg-repeat'>
            <MainLayout>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                    <BorderBg className={"h-20 bg-eventtopborder z-50 relative bg-cover md:bg-contain -top-4"} />
                    <div className="w-full h-auto px-8 sm:px-6 md:px-12 lg:px-20 pt-9 pb-16 text-white font-serif">
                        <div className="w-full h-full flex flex-col lg:flex-row  gap-16">
                            {/* Left Section: Image & Countdown */}
                            <div className="w-full lg:w-1/4 h-auto flex flex-col items-center ">
                              <div className="w-[278px] lg:w-full h-[378px] md:h-[480px]">
                                <div className=" relative w-full h-full flex flex-col justify-center items-center p-10">
                                    <img className="w-full h-full  z-40" src={image} alt={"eventimage"}/>
                                    <div className="absolute inset-0 flex flex-col justify-end items-start gap-[2px] event-border-two overflow-hidden z-50">
                                       
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1  h-full flex flex-col justify-start items-start">
                                <div id="notrevel" className={`${reveal?"hidden":"flex"} grow h-full flex-col justify-start items-start  gap-16 `}>
                                    <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
                                        <p className="w-full h-auto font-Young font-normal text-2xl text-[#E1CA6D] text-left">Hint :</p>
                                        <p className="w-full h-auto font-Young font-normal text-xl text-cygnus-white text-left">{hint}?</p>
                                    </div>
                                    <div className="w-full h-auto flex flex-col justify-center items-start gap-6">
                                        <form className="w-full h-auto flex flex-col items-start gap-4" onSubmit={handleSubmit}>
                                            <div className="flex flex-col w-full md:w-[430px] h-[74px]">
                                                <label
                                                htmlFor="Id"
                                                className="block text-sm font-medium text-white md:text-xl"
                                                >
                                                Guess:
                                                </label>
                                                <input
                                                type="text"
                                                name="Id"
                                                id="Id"
                                                required
                                                value={guess}
                                                onChange={handleInputChange}
                                                className=" text-black mt-1 w-full h-full rounded-md bg-cy-light-bg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="w-full h-auto flex flex-row justify-start items-center">
                                                <button type="submit" className="w-auto h-auto px-12 py-2 bg-cy-primary-text text-center font-serif font-bold text-lg text-[#F8F2BF]">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="revel" className={`${reveal?"flex":"hidden"} grow h-full  flex-row justify-start items-start gap-16`}>
                                    <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
                                        <p className="w-full h-auto font-Young font-normal text-2xl text-[#E1CA6D] text-left">{title}</p>
                                        <p className="w-full h-auto font-Young font-normal text-xl text-cygnus-white text-left">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-full bg-cover" src={bottombg}/>
                </div>
            </MainLayout>
        </div>
    );
}

export default HighlightsPage;