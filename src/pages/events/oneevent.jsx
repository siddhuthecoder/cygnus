import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import Event from "./event";
import BorderBg from "../../components/ui/borderbg";
import bottombg from "/images/bottompattern.png";

function OneEvent(){
    useEffect(()=>{
          window.scrollTo(0,0);
      })
    return(
        <div id='CygnusEvent' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                    <BorderBg className={"h-20 bg-eventtopborder z-50 relative bg-cover md:bg-contain -top-4"} />
                    <Event />
                    <img className="w-full bg-cover" src={bottombg}/>
                </div>
            </MainLayout>
        </div>
    );
}

export default OneEvent;