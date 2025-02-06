import React from "react";
import Pagelayout from "../../components/layout/pagelayout";
import miniart5 from "/images/miniart5.png";
import { useNavigate,useLocation } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";


function HomeAbout(){
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Pagelayout className={"justify-start pb-0 md:pb-16"} title={"About Us"}>
            <img className="hidden md:block absolute bottom-0 right-64 h-64  bg-contain slowmove" src={miniart5}/>
            <div className="w-full h-auto py-6 md:py-0 px-4 md:px-8 lg:px-12 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-9 md:gap-6">
                <div className="order-2 md:order-1 w-full h-auto px-0 md:px-16 lg:px-20  flex flex-col justify-center items-start gap-10">
                    <p className="w-full h-auto font-serif font-normal text-start text-wrap text-lg md:text-3xl text-white">
                        Cygnus - The Legacy Continues
                    </p>
                    <p className="w-full h-auto font-serif font-normal text-start text-balance text-base md:text-2xl text-white">
                        The cultural annual fest of RGUKT Nuzvid returns after five long years. Focusing on "Reviving Timeless Traditions", celebrating our rich cultural heritage while blending it with modern creativity. Get ready to immerse yourself in the beauty of our ancient traditions and cultures, reimagined for today's world.
                    </p>
                    <button onClick={()=>{navigate(routesconfig.about,{state:{from:location}})}} className="w-auto h-auto px-4 py-2 rounded-[4px] flex flex-row justify-center items-center gap-2 bg-[#FBF6E0]">
                        <p className="w-auto h-auto text-base text-center text-[#012D6E]">See More</p>
                        <div className="w-auto h-full flex flex-col justify-center items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_683_707)">
                                    <path d="M2.5 8H13.5" stroke="#012D6E" stroke-width="1.94258" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 3.5L13.5 8L9 12.5" stroke="#012D6E" stroke-width="1.94258" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="order-1 md:order-2 w-full h-full px-0 md:px-8 flex flex-col justify-center items-center">
                    <div className="w-full h-auto px-4 py-2 flex flex-col justify-center items-center about-border">
                        <div className="w-full h-[300px] md:h-[460px] p-2 grid grid-flow-col grid-cols-12 grid-rows-12 gap-2 ">
                            <div className="col-span-7 row-span-7  rounded-md">
                            <img className="w-full h-full object-cover rounded-md" alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738782437/37e9c1b2142f92a58d477d44cd21c6dd_yq6xhp.jpg"} />
                            </div>
                            <div className="col-span-7 row-span-5 rounded-md">
                                <img className="w-full h-full object-cover rounded-md " alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738788966/IMG-20250206-WA0006_quiu8k.jpg"} />
                            </div>
                            <div className="col-span-5 row-span-5 rounded-md">
                            <img className="w-full h-full object-cover rounded-md" alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738794576/studentmitra_zmcbwt.jpg"} />
                            </div>
                            <div className="col-span-5 row-span-7 rounded-md">
                            <img className="w-full h-full object-cover rounded-md object-center" alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738788967/IMG-20250206-WA0007_kdweyp.jpg"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Pagelayout>
    )
}

export default HomeAbout;