import React from "react";
import Eventcard from "./eventcard";
import { useNavigate,useLocation } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";
import profile from "/images/profile.png";
import photo from "/images/map.png";
import EventTimer from "../../pages/events/eventTimer";
import Highlightscard from "./highlightscard";

function HomeSponserCarouselItm({data:sponsor}){
    // console.log(sponsor);
    return(
        <div key={sponsor?.id} className="w-full h-auto flex flex-col items-center justify-center gap-4 p-3">
            <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">{sponsor?.name}</p>
            <div  className="w-full h-full flex flex-col items-center justify-center gap-3  shadow-md p-1 py-2  border-[1px] border-[#EEC276]">
              <div className="bg-white w-full h-40">
                <img
                  src={sponsor?.imageUrl}
                  alt={sponsor?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </div>
    );
}
export function HomeSponserCarouselItmtwo ({data:sponsor}){
  console.log("inside patners");
  console.log(sponsor);
    return(
        <div className="w-full h-full flex flex-col items-center justify-center p-3">
            <div key={sponsor?.id} className="w-full h-full flex flex-col items-center justify-center gap-3 px-1 py-2 shadow-md  border-[1px] border-[#EEC276]">      
                <div className="bg-white w-full h-36">
                <img
                    src={sponsor?.imageUrl}
                    alt={sponsor?.name}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
        </div>
    )
}

export function EventCardCarouleItem ({data:event}){
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div className="w-auto h-auto flex flex-row justify-center items-center m-8">
            <Eventcard onClick={()=>{navigate(`${routesconfig.events}/${event._id}`,{state:{from:location}})}} event={event}/>
        </div>
    );
}
export function HighlightCardCarouleItem ({data:event}){
  const navigate = useNavigate();
  const location = useLocation();
  return(
      <div className="w-auto h-auto flex flex-row justify-center items-center m-8">
          <Highlightscard onClick={()=>{navigate(`${routesconfig.highlight}/${event._id}`,{state:{from:location}})}} event={event}/>
      </div>
  );
}
export function SponsorCardCarouleItem ({data:sponser}){
    return(
        <div className="w-auto h-auto flex flex-row justify-center items-center m-8">
            <div key={sponser?.id} className="w-full h-auto flex flex-col items-center justify-center gap-4">
              <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">{sponser?.name}</p>
                <div  className="w-full h-full flex flex-col items-center justify-center gap-3  shadow-md p-1 py-2  border-[1px] border-[#EEC276]">
                  <div className="bg-white w-full h-40">
                    <img
                      src={sponser?.imageUrl}
                      alt={sponser?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
            </div>
        </div>
    );
}

export function CoreTeamCardCarouleItem ({data:sponser}){
    return(
        <div className="w-auto h-full flex flex-row justify-center items-center m-4">
           <div key={sponser?.id} className="w-auto h-auto gap-3 flex flex-col items-center justify-center text-center m-3">
                {/* Outer Border Design */}
                <div className="relative w-[140px] h-[140px] flex flex-col justify-content items-center">
                  <img
                    src={profile}
                    alt="Outer border"
                    className="absolute w-full h-full object-contain"
                  />
                  {/* Inner Circular Image */}
                  <img
                    src={sponser.imageUrl}
                    alt={sponser?.name}
                    className="absolute top-[12px] left-[13px] w-[115px] h-[115px] rounded-full object-cover"
                  />
                </div>
                {/* Details Below the Block */}
                <div className="w-full h-auto flex flex-col justify-center items-center mt-2 font-serif">
                  <p className="w-full h-auto font-semibold text-xl text-white text-center">{sponser?.name}</p>
                  <p className={`${sponser?.role?"block":"hidden"} w-full h-auto font-semibold text-base text-white text-center`}>{sponser?.role}</p>
                </div>
            </div>
        </div>
    );
}

export function SponsersCardCarouleItems ({data:sponsor}){
    return(
        <div className="w-full h-[240px] flex flex-col justify-center items-cente p-4">
            <div key={sponsor?.id} className="w-full h-full flex flex-col items-center justify-center gap-4">
              <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">Designing Partner</p>
                <div  className="w-full grow flex flex-col items-center justify-center gap-3  shadow-md p-1 py-2  border-[1px] border-[#EEC276]">
                  <div className="bg-white w-full grow">
                    <img
                      src={sponsor?.imageUrl}
                      alt={sponsor?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
            </div>
        </div>
    );
}

export function CarouselProfileEventCard({data:event}){
    return(
        <div className="h-auto w-full flex flex-col justify-center items-center gap-4 p-8">
            <Eventcard onClick={()=>{navigate(`${routesconfig.events}/eventId-0`,{state:{from:location}})}} event={event} />
            <EventTimer EventTimer={event?.timeline_venue[0].date} />
        </div>
    );
}

export default HomeSponserCarouselItm;