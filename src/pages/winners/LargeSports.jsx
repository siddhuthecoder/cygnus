import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import bottombg from "/images/bottompattern.png";
import BorderBg from "../../components/ui/borderbg";

function LargeSports({isborder}){
    const [isCricWin, setCricWin] = useState(false);
    const [isCricRun, setCricRun] = useState(false);
    const toggleIcon = (isVisible) =>isVisible ? faCaretUp : faCaretDown;
    
    return(
        <div className="w-full py-4 flex flex-col justify-start items-center gap-8">
            <h1 className="w-full h-auto text-start font-Young font-bold text-5xl mb-3 px-14">Cricket </h1>
            <div className="w-full h-auto flex flex-col justify-start items-center gap-24">
                <div className="w-full h-auto flex flex-col justify-start items-center gap-8">
                    <h1 className="w-full h-auto flex flex-row justify-center items-center font-Young font-semibold text-4xl text-[#E1CA6D]">Winners</h1>
                    <div className="w-[800px] h-auto flex flex-col justify-center items-center moreabout-border  about-border-box">
                        <img className="w-full h-[440px]"/>
                    </div>
                    <h1 className="w-full h-auto text-center font-Young font-semibold text-4xl">CSE</h1>
                    <div className="w-[800px] h-auto flex flex-col justify-center items-center gap-6">
                        <div className="w-full h-auto flex flex-row justify-center items-center gap-8">
                            <h2 className="w-auto h-auto text-center font-Young font-semibold text-3xl">Team Members</h2>
                            <FontAwesomeIcon
                                icon={toggleIcon(isCricWin)}
                                className="w-5 h-5 text-[#E1CA6D]"
                                onClick={() => setCricWin(!isCricWin)}
                            />
                        </div>
                        {isCricWin && (<div className="w-full h-auto grid grid-cols-6">
                            {[1,2,3,4,,5,6,7,8,9,10,11].map((item, index) =>(
                                <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
                                    <h1 className="grow h-auto text-center font-Young font-semibold text-lg truncate">Name</h1>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-8">
                    <h1 className="w-full h-auto flex flex-row justify-center items-center font-Young font-semibold text-4xl text-[#E1CA6D]">Runners</h1>
                    <div className="w-[800px] h-auto flex flex-col justify-center items-center moreabout-border  about-border-box">
                        <img className="w-full h-[440px]"/>
                    </div>
                    <h1 className="w-full h-auto text-center font-Young font-semibold text-4xl">CSE</h1>
                    <div className="w-[800px] h-auto flex flex-col justify-center items-center gap-6">
                        <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-2">
                            <h2 className="w-auto h-auto text-center font-Young font-semibold text-3xl">Team Members</h2>
                            <FontAwesomeIcon
                                icon={toggleIcon(isCricRun)}
                                className="w-5 h-5 text-[#E1CA6D]"
                                onClick={() => setCricRun(!isCricRun)}
                            />
                        </div>
                        
                        {isCricRun && (<div className="w-full h-auto grid grid-cols-6">
                            {[1,2,3,4,,5,6,7,8,9,10,11].map((item, index) =>(
                                <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
                                    <h1 className="grow h-auto text-center font-Young font-semibold text-lg truncate">Name</h1>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </div>
            </div>
            {isborder && (<><img className="w-full bg-cover hidden md:block" src={bottombg}/>
            <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/></>)}
        </div>
    );
}

export default LargeSports;