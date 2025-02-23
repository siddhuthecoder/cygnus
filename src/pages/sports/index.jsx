import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import BorderBg from "../../components/ui/borderbg";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import { cn } from "../../utils";
import ComingSoon from "../../components/ui/comingsoon";
import SportEvent from "./sportspage";

function SportsPage({className}){
    return(
        <div id='CygnusAbout' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout className={"min-h-full md:min-h-screen"}>
            <div className="w-full h-auto flex flex-col justify-start items-center gap-0 font-serif">
                <BorderBg className={"h-16 md:h-32 relative -top-[7px] bg-abouttopborder z-50 bg-cover md:bg-contain "} />
                    {/* <ResTitlePagelayout widthtitle={"w-[240px] md:w-[280px] h-[64px] md:h-[82px] "}  className={"min-h-full md:min-h-screen"} title={"Sports"} posTiltle={"pt-4"} >
                        <ComingSoon/>
                       
                    </ResTitlePagelayout> */}
                   <SportEvent/>
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                </div>
            </MainLayout>
        </div>
    );
}


export default SportsPage