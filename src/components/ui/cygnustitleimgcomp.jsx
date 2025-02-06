
import React from "react";
import { cn } from "../../utils";
import rguktlogo from "/images/rguktlogo.png";
import cygustitleimage from "/images/cygnuscard.png";

function CygnusTitleImgCard ({className,children,...props}){
    return(
        <div {...props} className={cn("absolute w-[284px] h-[212px] md:w-[440px] md:h-[340px]  flex flex-col justify-center items-center ",className)}>
            <img src={cygustitleimage} alt="cygnustileimg" className="absolute h-full object-contain titletransitioneffect titleImageShadow  hover:cursor-pointer"/>
            <div className="absolute top-10 lg:top-[68px] w-full h-auto px-6 md:px-14  flex flex-col justify-start items-center gap-2">
                <div className="w-full h-auto px-10 py-1 flex flex-row justify-center items-center">
                    <div className="w-full h-auto grid grid-cols-2 gap-8">
                        <div className="w-full h-[1px] rounded-[36px] bg-line-gradient-rl"></div>
                        <div className="w-full h-[1px] rounded-[36px] bg-line-gradient-lr"></div>
                    </div>
                    <img className="absolute h-7" src={rguktlogo} alt="rguktlogo"/>
                </div>
            </div>
        </div>
    );
}


export default CygnusTitleImgCard;