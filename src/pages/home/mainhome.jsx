import React from "react";
import rangoli from "/images/bgrangoli.png";
import miniart1 from "/images/miniart1.png";
import miniart2 from "/images/miniart2.png";
import miniart3 from "/images/miniart3.png";
import miniart4 from "/images/miniart4.png";
import bottombg from "/images/bottompattern.png";
//import components
import MainLayout from "../../components/layout/MainLayout"
import BorderBg from "../../components/ui/borderbg"
import CygnusTitleCard from "../../components/ui/cygnustitlecard";
import CygnusTitleImgCard from "../../components/ui/cygnustitleimgcomp";
import homebgvideo from "/video/homebgvideo.mp4"


export default function Home(){
    return(
        <>
            <div className="w-full grow flex flex-col justify-start items-center">
                <div className="relative w-full grow flex flex-col justify-start items-center">
                    <BorderBg className={"bg-top-border-repeat h-16 sm:h-20 md:h-28 lg:h-36 z-50"}/>
                    {/* <CygnusTitleCard className={"absolute top-0 md:top-6 z-50"}/> */}
                    <CygnusTitleImgCard className={"absolute top-6 z-50"}/>
                    <div className="relative w-full grow px-10 pt-16 pb-16 md:pt-16 md:pb-24 flex flex-col justify-center items-center">
                        <img className="absolute top-[15%] right-16 h-32 object-contain animate-spin-slow" src={rangoli}/>
                        <img className="absolute bottom-1/4 left-[5%] h-24 object-contain animate-spin-slow" src={rangoli}/>
                        <div className="relative  w-full md:w-8/12 h-[50vh]  md:h-[62.5vh]">
                            <div className="absolute w-full h-full video-border z-40"></div>
                            <video className="absolute w-full h-full object-cover z-30  " src={"https://res.cloudinary.com/dxqkg7obm/video/upload/v1738333922/homebgvideo_fvr5lx.mp4"} muted loop autoPlay>
                                {/* <source src="https://www.instagram.com/reel/DFVGKgmSZTk/?igsh=MWRoczR0aHdzcjQ5MA==" type="video/mp4"/> */}
                            </video>
                            <p className="hidden md:block absolute bottom-10 w-full h-auto px-24 py-2 font-serif font-light text-base text-center text-[#F8F2BF] z-40 ">
                            Step into a world where heritage meets creativity, bringing the essence of our cultural roots to life. Experience a fusion of past and present like never before! Immerse yourself in tradition, artistry and more.
                            </p>
                        </div>
                        <div className="z-50 absolute hidden md:block bottom-0 w-full h-auto">
                            <img className="absolute bottom-0 h-56 left-80  object-contain origin-bottom movert" src={miniart1}/>
                            <img className="absolute bottom-0 h-56 right-80 object-contain origin-bottom moveleft" src={miniart2}/>
                            <img className="absolute bottom-0 h-56 left-40 object-contain origin-bottom movert2" src={miniart3}/>
                            <img className="absolute bottom-0 h-56 right-40 object-contain origin-bottom moveleft2" src={miniart4}/>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    )
}