import React,{useEffect,useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import BorderBg from "../../components/ui/borderbg";
import photo from "/images/map.png";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import { CarouselwithTwoItems } from "../../components/ui/carousal";
import { SponsersCardCarouleItems } from "../../components/ui/carouselitm";
import axiosInstance from "../../api/axiosInstance";
import Spinner from "../../components/ui/spinner";








function Sponsors(){
  const [sponsors,setSponsors]=useState([]);
  const [sloading,setSLoading] = useState(true);
   useEffect(()=>{
      const fetchsponsors=async()=>{
        const response=await axiosInstance.get("/api/sponsers/");
         setSponsors(response.data.sponsors);
        //  setSLoading(false);
      } 
      fetchsponsors();
      
   },[])
    return(
            <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
               
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                    <ResTitlePagelayout widthtitle={"w-[300px] md:w-[380px]"} className={"min-h-full md:min-h-screen"} title={"Sponsers"} posTiltle={"pt-4"} >
                        <div className={`${sloading?"hidden":"flex"} w-full grow  flex-col justify-start items-center `}>
                          <div className="w-full grow p-4 sm:px-8 md:px-16 lg:px-24 py-24 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 px-[40px] justify-start">
                              {sponsors?.map((sponsor) => (
                                  <div key={sponsor._id} className="w-full h-auto flex flex-col items-center justify-start gap-4">
                                    <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">{sponsor.name}</p>
                                      <div  className="w-full h-auto flex flex-col items-center justify-center gap-3  shadow-md p-1 py-2  border-[1px] border-[#EEC276]">
                                        <div className="bg-white w-full h-40">
                                          <img
                                            src={sponsor.imageUrl}
                                            alt={sponsor.name}
                                            className="w-full h-full object-contain"
                                          />
                                        </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                          <div className="w-full grow  p-8 flex md:hidden flex-col justify-center items-center">
                              {/* <Carousel/> */}
                              <CarouselwithTwoItems className={"w-[75vw]"} nowOfRows={3} data_array={sponsors} childComp={SponsersCardCarouleItems}/>
                          </div>
                        </div>
                        <div className={`${sloading?"flex":"hidden"}  w-full grow  flex-col justify-start items-center py-8 `}>
                            <div className="w-auto h-auto flex flex-row justify-center items-center gap-4 mt-4 md:mt-36">
                                <div className="w-16 h-16 md:w-24 md:h-24 flex flex-col justify-center items-center p-1">
                                  <Spinner id={"b23"} className={`${sloading?"block":"hidden"} `}/>
                                </div>
                                <div className="w-auto h-auto font-Young font-semibold text-center text-cy-secondary-bg text-2xl md:text-3xl lg:text-6xl">
                                  <p className="w-auto h-auto">Loading...</p>
                                </div>
                            </div>
                        </div>
                    </ResTitlePagelayout>
                    <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                    <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                </div>
            </div>
        );

}

export default Sponsors;