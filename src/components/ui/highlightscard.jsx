import React from "react";
import eventimage from "/images/eventimage.png";
import routesconfig from "../../configs/routesconfig";
import { useNavigate,useLocation } from "react-router-dom";
import EventTimer from "../../pages/events/eventTimer";

function Highlightscard({event ,...props}) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div {...props} className="group/event relative w-[250px] h-[364px] flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 hover:cursor-pointer p-2">
            <img className=" w-full h-full z-40 object-cover" src={event.imageUrl} alt={"eventimage"}/>
            <div className={`absolute w-full h-full ${event.isRevealed?"group-hover/event:bg-event-bgcolor group-hover/event:opacity-85":"bg-highlight-bgcolor group-hover/event:bg-hover-highlight-bgcolor"}  flex flex-col justify-end items-start gap-[2px] highlight-border px-6 py-4 overflow-hidden z-50`}>
                <p className={`${event.isRevealed?"block":"hidden"} w-full h-auto group-hover/event:scale-100 font-serif font-semibold text-start text-base text-white`}>{event.title}</p>
                <p className={`${event.isRevealed?"block group-hover/event:block":"hidden"} w-full h-auto hidden  font-serif font-normal text-start text-sm text-white text-wrap`}>{""}</p>
                <button  onClick={()=>{navigate(`${routesconfig.highlight}/${event._id}`,{state:{from:location}})}} className={`${event.isRevealed?"hidden":"hidden group-hover/event:block group-hover/event:mb-2"} w-auto h-auto  px-2 py-1 rounded-md bg-[#F8F2BF] text-center font-serif font-semibold text-base text-[#012E6E]`}>Guess Now ?</button>
                <div className={`${event.isRevealed?"hidden":"block group-hover/event:hidden"} w-full h-auto flex flex-col justify-center items-start`}>
                    <EventTimer EventTimer={event.revealDate} headingtext="Reveals in:" headingclass={"md:text-base font-semibold font-serif text-white text-left "} timerclass={"md:text-base font-bold font-serif text-white text-left "}/>
                </div>
            </div>
        </div>
    );
}

export default Highlightscard;