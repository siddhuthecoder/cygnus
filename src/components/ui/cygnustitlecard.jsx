import React from "react";
import { cn } from "../../utils";
import rguktlogo from "/images/rguktlogo.png"

function CygnusTitleCard ({className,children,...props}){
    return(
        <div {...props} className={cn("absolute w-[440px] h-[340px]  flex flex-col justify-center items-center bg-cygnus-title-card bg-cover",className)}>
            <DotsElements className={"top-10"}/>
            <DotsElements className={"bottom-[34px] rotate-180 translate-x-[3px]"}/>
            <DotsElements className={"right-0 rotate-90 translate-y-[1px]"}/>
            <DotsElements className={"left-0 rotate-[270deg] translate-y-[5px]"}/>
            <div className="absolute w-full h-full p-16 pt-24 flex flex-col justify-start items-center gap-2">
                <div className="w-full h-auto px-10 py-1 flex flex-row justify-center items-center">
                    <div className="w-full h-auto grid grid-cols-2 gap-8">
                        <div className="w-full h-[1px] rounded-[36px] bg-line-gradient-rl"></div>
                        <div className="w-full h-[1px] rounded-[36px] bg-line-gradient-lr"></div>
                    </div>
                    <img className="absolute h-7" src={rguktlogo} alt="rguktlogo"/>
                </div>
                <div className="w-full grow px-6 py-2 flex flex-col justify-center items-center gap-2">
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <p className="w-full h-auto font-Young font-normal text-center text-[54px]/[56px] text-[#012E6E]">CYGNUS</p>
                        <p className="w-full h-auto font-Young font-normal text-center text-[54px]/[56px] tracking-wider text-[#012E6E]">2K25</p>
                    </div>
                    <p className="w-full h-auto font-Young font-normal text-xs text-center text-[#890304]">
                        Reviving The Timeless Traditions
                    </p>
                </div>
            </div>
        </div>
    );
}

const DotsElements = ({className,...props})=>{
    return(
        <div className={cn("w-32 h-12 absolute origin-center p-2 px-3 flex flex-row justify-center items-start gap-1",className)}>
            <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full translate-x-[2px] translate-y-[16px]"></div>
            <div className="w-1 h-1 bg-dots-gradient rounded-full translate-x-[2px] translate-y-[14px]"></div>
            <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full translate-x-[2px] translate-y-[10px]"></div>
            <div className="w-3 h-3 rounded-full bg-dots-gradient  translate-x-[2px] translate-y-[1px]"></div>
            <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full translate-x-[2px]  translate-y-[10px]"></div>
            <div className="w-1 h-1 bg-dots-gradient rounded-full translate-x-[2px] translate-y-[14px]"></div>
            <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full translate-x-[2px] translate-y-[16px]"></div>
        </div>
    );
}

export default CygnusTitleCard;