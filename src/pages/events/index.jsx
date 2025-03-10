import React, { useEffect,useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import Event from "./event";
import BorderBg from "../../components/ui/borderbg";
import bottombg from "/images/bottompattern.png";
import Pagelayout from "../../components/layout/pagelayout";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import trophy from "/images/goldentrophy.png";
import ball from "/images/goldenball.png";
import Eventcard from "../../components/ui/eventcard";
import { useNavigate,useLocation } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";
import Navbar from "../../components/navbar/navbar";
import Carousel from "../../components/ui/carousal";
import { EventCardCarouleItem,HighlightCardCarouleItem } from "../../components/ui/carouselitm";
import Highlightscard from "../../components/ui/highlightscard";
import axiosInstance from "../../api/axiosInstance";
import EventCardSkeleton from "../../components/ui/eventcardskeleton";
import ComingSoon from "../../components/ui/comingsoon";

function EventPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const [events,setEvents]=useState([]);
    const [ontimevents,setOntimeEvents]=useState([]);
    const [highlights,setHighlights]=useState([]);
    const [loading,setLoading] = useState(true);
    const [eloading,setELoading] = useState(true);
    const [oloading,setOLoading] = useState(true);
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    useEffect(()=>{
        const fetchEvents=async()=>{
             try{
                const response= await axiosInstance.get("/api/events");
                
                setEvents(response.data);
             }catch(error){
                console.error("Error fetching events:", error);
             }
             setELoading(false);
        }
        fetchEvents();
       
    },[]);
    useEffect(()=>{
        const fetchEvents=async()=>{
             try{
                const response= await axiosInstance.get("/api/events/ontimeevents");
                setOntimeEvents(response.data.events);
             }catch(error){
                console.error("Error fetching events:", error);
             }
             setOLoading(false);
        }
        fetchEvents();
       
    },[]);
    useEffect(()=>{
        const fetchEvents=async()=>{
             try{
                const response= await axiosInstance.get("/api/highlights/");
             
                setHighlights(response.data);
             }catch(error){
                console.error("Error fetching events:", error);
             }
             setOLoading(false);
        }
        fetchEvents();
       
    },[]);
    return(
        <div id='CygnusEvent' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                    <BorderBg className={"h-16 md:h-32 bg-eventtopbordertwo z-50 bg-cover md:bg-contain "} />
                    <div className="w-full h-auto flex flex-col justify-start items-center ">
                        <div className="w-full h-auto  flex flex-col justify-start items-start py-10 relative">
                            <div className="relative w-full h-auto py-8">
                                <BorderBg className={"h-24 bg-sportsbg z-50 bg-cover absolute -top-9"} />
                                <div className="z-40 w-full h-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-3 bg-[#E1CA6D] innershadow px-8 md:px-20 py-14">
                                    <div className="w-full md:w-8/12 h-auto flex flex-col justify-start items-start gap-4">
                                        <div className="w-full h-auto flex flex-row justify-start items-center gap-4">
                                            <p className="w-auto h-auto font-Young font-normal text-left text-5xl text-cygnus-bg">SPORTS..</p>
                                            <img className="relative  -top-[2px] -left-[186px] h-[32px] object-contain" src={ball} alt="ball"/>
                                            <img className="relative -top-3 -left-20 h-16 object-contain" src={trophy} alt="trophy"/>
                                        </div>
                                        <div className="w-full h-auto flex flex-row justify-start items-center">
                                            <p className="w-auto h-auto font-serif font-normal text-left text-xl text-cygnus-black">
                                            Join the excitement and take part in your favorite sports! Compete in thrilling tournaments, showcase your skills, and experience the spirit of the game. Step onto the field, challenge your limits, and be part of the action                     </p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto h-full flex flex-col justify-center items-start md:items-end">
                                        <button    onClick={() => navigate("/sports", { state: { from: location } })}className="w-auto h-auto px-6 py-[10px] rounded-[4px] bg-cy-primary-text font-serif font-semibold text-center text-cygnus-white">
                                            See More
                                        </button>
                                    </div>
                                </div>
                                <BorderBg className={"h-24 bg-sportsbg z-50 bg-cover absolute -bottom-9"} />
                            </div>
                            
                        </div>
                        <Pagelayout className={"min-h-full md:min-h-screen"} title={"Pre Events"} posTiltle={"pt-4"} >
                          <div className={`${eloading?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
                              <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
                                <EventCardSkeleton/>
                                <EventCardSkeleton/>
                                <EventCardSkeleton/>
                                <EventCardSkeleton/>
                                <EventCardSkeleton/>
                                <EventCardSkeleton/>
                              </div>
                              <div className="w-full h-auto flex md:hidden flex-row flex-wrap justify-center items-center gap-16">
                                <EventCardSkeleton/>
                              </div>
                          </div>
                          <div className={`${eloading?"hidden":"block"} w-full h-auto`}>
                            {events.length > 0 && (
                              <div className="w-full grow hidden md:flex flex-row flex-wrap justify-evenly gap-y-36 items-center p-4 sm:px-8 md:px-16 lg:px-24 py-24">
                                {events.map((event, index) => (
                                  <div key={event._id} className="w-full lg:w-1/2 xl:w-1/3 h-auto flex flex-col justify-center items-center gap-0">
                                    <Eventcard 
                                      event={event} 
                                      onClick={() => navigate(`${routesconfig.events}/${event._id}`, { state: { from: location } })}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            {events.length > 0 && (
                              <div className="w-full h-auto flex md:hidden flex-col justify-center items-center pb-16">
                                <Carousel data_array={events} childComp={EventCardCarouleItem} />
                              </div>
                            )}
                          </div>
                        </Pagelayout>

                        <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                        <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                        <ResTitlePagelayout widthtitle={"w-[260px] md:w-[400px]"} className={"min-h-full md:h-auto"} title={"On Time Events"} posTiltle={"pt-4"} >
                          <div className={`${oloading?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
                                <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                </div>
                                <div className="w-full h-auto flex md:hidden flex-row flex-wrap justify-center items-center gap-16">
                                  <EventCardSkeleton/>
                                </div>
                          </div>
                          <div className={`${oloading?"hidden":"block"} w-full h-auto`}>
                              {ontimevents.length > 0 && (
                                  <div className="w-full grow hidden md:flex flex-row flex-wrap justify-evenly gap-y-36 items-center p-4 sm:px-8 md:px-16 lg:px-24 py-24">
                                    {ontimevents.map((event, index) => (
                                      <div key={event._id} className="w-full lg:w-1/2 xl:w-1/3 h-auto flex flex-col justify-center items-center gap-0">
                                        <Eventcard 
                                          event={event} 
                                          onClick={() => navigate(`${routesconfig.events}/${event._id}`, { state: { from: location } })}
                                        />
                                      </div>
                                    ))}
                                  </div>
                              )}
                              {ontimevents.length > 0 && (
                                <div className="w-full h-auto flex md:hidden flex-col justify-center items-center pb-16">
                                  <Carousel data_array={ontimevents} childComp={EventCardCarouleItem} />
                                </div>
                              )}
                          </div>
                        </ResTitlePagelayout>
                        <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                        <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                        <ResTitlePagelayout widthtitle={"w-[260px] md:w-[300px]"} className={"min-h-full md:h-auto"} title={"Highlights"} posTiltle={"pt-4"} >
                            <div className={`${oloading?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
                                <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                  <EventCardSkeleton/>
                                </div>
                                <div className="w-full h-auto flex md:hidden flex-row flex-wrap justify-center items-center gap-16">
                                  <EventCardSkeleton/>
                                </div>
                            </div>
                            <div className={`${oloading?"hidden":"block"} w-full h-auto`}>
                              {highlights.length > 0 && (
                                <div className="w-full grow hidden md:flex flex-row flex-wrap justify-evenly gap-y-36 items-center p-4 sm:px-8 md:px-16 lg:px-24 py-24">
                                  {highlights.map((event, index) => (
                                    <div key={event._id} className="w-full lg:w-1/2 xl:w-1/3 h-auto flex flex-col justify-center items-center gap-0">
                                      <Highlightscard 
                                        event={event} 
                                        onClick={() => navigate(`${routesconfig.highlight}/${event._id}`, { state: { from: location } })}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                              {highlights.length > 0 && (
                                <div className="w-full h-auto flex md:hidden flex-col justify-center items-center pb-16">
                                  <Carousel data_array={highlights} childComp={HighlightCardCarouleItem} />
                                </div>
                              )}
                            </div>
                        </ResTitlePagelayout>
                    </div>
                    <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                    <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                </div>
            </MainLayout>
        </div>
    );
}

export default EventPage;