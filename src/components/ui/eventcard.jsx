import React from "react";
import eventimage from "/images/eventimage.png";
// import routesconfig from "../../configs/routesconfig";
// import { useNavigate,useLocation } from "react-router-dom";

function Eventcard({event ,...props}) {
    // const navigate = useNavigate();
    // const location = useLocation();
    return (
        <div  {...props} className="group/event relative w-[250px] h-[364px] flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 hover:cursor-pointer">
            <img className="absolute w-full h-full z-40" src={eventimage} alt={"eventimage"}/>
            <div className="absolute inset-0 group-hover/event:bg-event-bgcolor group-hover/event:opacity-85 flex flex-col justify-end items-start gap-[2px] event-border px-4 py-3 overflow-hidden z-50">
                <p className="w-full h-auto group-hover/event:scale-100 font-serif font-semibold text-start text-base text-white">{event?.title}</p>
                <p className="w-full h-auto hidden group-hover/event:block font-serif font-normal text-start text-sm text-white text-wrap">{event?.tagline}</p>
            </div>
        </div>
    );
}

export default Eventcard;