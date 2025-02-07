import React,{useState,useEffect} from "react";
import Pagelayout from "../../components/layout/pagelayout";
import Eventcard from "../../components/ui/eventcard";
import rangoli from "/images/bgrangoli.png";
import eventminiart1 from "/images/eventminiart1.png";
import eventminiart2 from "/images/eventminiart2.png";
import eventminiart3 from "/images/eventminiart3.png";
import eventminiart4 from "/images/eventminiart4.png";
import { useLocation,useNavigate } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";
import axiosInstance from "../../api/axiosInstance";
import EventCardSkeleton from "../../components/ui/eventcardskeleton";


function HomeEvents(){            
    const navigate = useNavigate();
    const location = useLocation();         
    const [events, setEvents] = useState({ onTimeEvent: null, preEvents: [] });   
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axiosInstance("/api/events/homeevents");
            if (response.status==200) {
              setEvents(response.data.events);
              setLoading(false);
            }
          } catch (error) {
            console.error("Error fetching events:", error);
          }
        };
    
        fetchEvents();
      }, []);      
    return(
        <>
            <Pagelayout className={"justify-start"} title={"Events"}>
                <div className="relative w-full grow flex flex-col justify-center items-center">
                    <img className="absolute -top-6 md:top-[7.5%] right-0 md:right-[2%] h-24 object-contain animate-spin-slow" src={rangoli} alt="rangoli"/>
                    <img className="absolute bottom-20 md:bottom-[10%] left-2 md:left-[2%] h-20 object-contain animate-spin-slow" src={rangoli} alt="rangoli"/>
                    <div className="z-[100] hidden md:block absolute bottom-0 w-full h-auto">
                        <img className="absolute bottom-0 -left-36 h-36 object-contain origin-bottom moveleftdelay1" src={eventminiart1} alt="eventminiart" />
                        <img className="absolute bottom-0 -left-36 h-36 object-contain origin-bottom moveleftdelay2" src={eventminiart2} alt="eventminiart" />
                        <img className="absolute bottom-0 -left-36 h-36 object-contain origin-bottom moveleftdelay3" src={eventminiart3} alt="eventminiart" />
                        <img className="absolute bottom-0 -left-36 h-36 object-contain origin-bottom moveleftdelay4" src={eventminiart4} alt="eventminiart" />
                    </div>
                    <div className={`${loading?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
                        <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
                          <EventCardSkeleton/>
                          <EventCardSkeleton/>
                          <EventCardSkeleton/>
                        </div>
                         <div className="w-full h-auto flex md:hidden flex-row flex-wrap justify-center items-center gap-16">
                           <EventCardSkeleton/>
                         </div>
                    </div>
                    <div className={`${loading?"hidden":"block"} w-full h-auto`}>
                      <div className="w-full h-auto flex flex-col justify-center items-center py-8 gap-16">
                          <div className="w-full h-auto flex flex-col md:flex-row justify-around items-center gap-20 md:gap-0 px-24 py-4">
                            {events.onTimeEvent && (
                                <Eventcard
                                  event={events.onTimeEvent}
                                  onClick={() =>
                                    navigate(`${routesconfig.events}`, {
                                      state: { from: location },
                                    })
                                  }
                                />
                            )}   
                            {events.preEvents.map((event) => (
                                <Eventcard
                                  event={event}
                                  onClick={() =>
                                    navigate(`${routesconfig.events}`, {
                                      state: { from: location },
                                    })
                                  }
                                />
                            ))}
                          </div>
                          <div className="w-full h-auto flex flex-row items-center justify-center">
                              <button onClick={()=>{navigate(routesconfig.events,{state:{from:location}})}} className="w-auto h-auto px-4 py-2 rounded-md bg-[#FBF6E0] flex flex-row justify-center items-center gap-2">
                                  <span className="w-auto h-auto font-serif font-normal text-center text-base text-[#012D6E]">See More</span>
                                  <div className="w-auto h-full flex flex-col justify-center items-center">
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_686_822)">
                                              <path d="M2.5 8H13.5" stroke="#012D6E" stroke-width="1.94258" stroke-linecap="round" stroke-linejoin="round"/>
                                              <path d="M9 3.5L13.5 8L9 12.5" stroke="#012D6E" stroke-width="1.94258" stroke-linecap="round" stroke-linejoin="round"/>
                                          </g>
                                      </svg>
                                  </div>
                              </button>
                          </div>
                      </div>
                    </div>
                </div>
            </Pagelayout>
        </>
    );
}

export default HomeEvents;