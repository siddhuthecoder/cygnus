import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import BorderBg from "../../components/ui/borderbg";

import ResTitlePagelayout from "../../components/layout/restitelpagecomp";

import MoreAbout from "./MoreAbout";
import Theme from "./theme";
import Navbar from "../../components/navbar/navbar";

function AboutPage(){
    useEffect(()=>{
            window.scrollTo(0,0);
    })
    return(
        <div id='CygnusAbout' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            {/* <Navbar/> */}
            <MainLayout className={"min-h-full md:min-h-screen"}>
            <div className="w-full h-auto flex flex-col justify-start items-center gap-0 font-serif">
                <BorderBg className={"h-16 md:h-32 relative -top-[7px] bg-abouttopborder z-50 bg-cover md:bg-contain "} />
                    <ResTitlePagelayout widthtitle={"w-[312px] md:w-[700px] h-[64px] md:h-[82px] "}  className={"h-auto"} title={"CYGNUS - A Cultural Extravaganza"} posTiltle={"pt-4"} >
                        <div className="w-full grow  p-4 sm:px-8 md:px-16 lg:px-24 py-8  flex flex-col justify-center items-center gap-4 px-[40px]">
                         <MoreAbout/>
                        </div>
                    </ResTitlePagelayout>
                    <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                    <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                    <ResTitlePagelayout widthtitle={"w-[300px] md:w-[800px] h-[64px] md:h-[82px]"} className={"min-h-auto"} title={"Theme: Reviving the Timeless Traditions"} posTiltle={"pt-16"} >
                        <div className="w-full grow  p-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center items-center gap-4 px-[40px]">
                        <Theme/>
                        </div>
                    </ResTitlePagelayout>
                 
                </div>
            </MainLayout>
        </div>
    );
}

export default AboutPage;