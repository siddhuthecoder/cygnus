import React, { useEffect,useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import BorderBg from "../../components/ui/borderbg";
import photo from "/images/map.png";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import Sponsors from "./sponsers";
import Carousel, { CarouselwithTwoItems } from "../../components/ui/carousal";
import { SponsersCardCarouleItems } from "../../components/ui/carouselitm";
import axiosInstance from "../../api/axiosInstance";
import Spinner from "../../components/ui/spinner";

// const sponsors = [
//     { id: 1, name: "Sponsor 1", logo: "/path-to-logo1.png" },
//     { id: 2, name: "Sponsor 2", logo: "/path-to-logo2.png" },
//     { id: 3, name: "Sponsor 3", logo: "/path-to-logo3.png" },
//     { id: 4, name: "Sponsor 4", logo: "/path-to-logo4.png" },
//     { id: 5, name: "Sponsor 5", logo: "/path-to-logo5.png" },
//     { id: 6, name: "Sponsor 6", logo: "/path-to-logo6.png" },
//     { id: 7, name: "Sponsor 7", logo: "/path-to-logo7.png" },
//     { id: 8, name: "Sponsor 8", logo: "/path-to-logo8.png" },
//     { id: 9, name: "Sponsor 9", logo: "/path-to-logo9.png" },
//     { id: 10, name: "Sponsor 10", logo: "/path-to-logo10.png" },
//     { id: 11, name: "Sponsor 11", logo: "/path-to-logo11.png" },
//   ];


function SponsorsPage(){
    const [sponsors,setSponsors]=useState([]);
    const [ploading,setpLoading] = useState(true);
    useEffect(()=>{
        if(ploading){
          window.scrollTo(0,0);
        }
    },[]);
    useEffect(() => {
     
      const fetchPartners = async () => {
        try {
          const response = await axiosInstance.get("/api/partners/");
          setSponsors(response.data);
        } catch (error) {
          console.error("Error fetching partners:", error);
        }
        setpLoading(false);
      };
  
      fetchPartners();
    }, []);
    return(
            <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
                <MainLayout>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                <BorderBg className={"h-20 md:h-32 bg-sponerstopborder relative bg-cover md:bg-contain -top-4 md:-top-[22px] z-50 "} />
                    <ResTitlePagelayout widthtitle={"w-[300px] md:w-[480px]"} className={"min-h-full md:min-h-screen"} title={"Our Sponsors"} posTiltle={"pt-4"} >
                        <div className={`${ploading?"hidden":"flex"} w-full grow  flex-col justify-start items-center `}>
                          <div className="hidden w-full grow p-4 sm:px-8 md:px-12 lg:px-16 py-24 md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-12 px-[40px]">
                            {sponsors?.map((sponsor) => (
                              <div key={sponsor._id} className="w-full h-auto flex flex-col items-center justify-start gap-4">
                                <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">{sponsor.title}</p>
                                  <div  className="w-full h-auto flex flex-col items-center justify-center gap-3  shadow-md p-[6px] py-2  border-[1px] border-[#EEC276]">
                                    <div className="bg-white w-full h-52">
                                      <img
                                        src={sponsor.imageUrl}
                                        alt={sponsor.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                              </div>
                            ))}
                          </div>
                          {/* <div className="w-full grow  flex md:hidden flex-col justify-center items-center">
                              
                              <CarouselwithTwoItems className={"w-[60vw]"} nowOfRows={1} data_array={sponsors} childComp={SponsersCardCarouleItems}/>
                          </div> */}
                          <div className="w-full h-auto p-4 flex md:hidden flex-col justify-center items-center mb-8">
                            {/* <Carousel className={"w-[60vw]"} data_array={sponsors} childComp={CoreTeamCardCarouleItem}/> */}
                            <CarouselwithTwoItems nowOfRows={1} className={"w-[80vw]"} data_array={sponsors} childComp={SponsersCardCarouleItems}/>
                          </div>
                        </div>
                        <div className={`${ploading?"flex":"hidden"}  w-full grow  flex-col justify-start items-center `}>
                            <div className="w-auto h-auto flex flex-row justify-center items-center gap-4 mt-36">
                                <div className="w-24 h-24 flex flex-col justify-center items-center p-1">
                                  <Spinner id={"a12"} className={`${ploading?"block":"hidden"}`}/>
                                </div>
                                <div className="w-auto h-auto font-Young font-semibold text-center text-cy-secondary-bg text-xl md:text-3xl lg:text-6xl">
                                  <p className="w-auto h-auto">Loading...</p>
                                </div>
                            </div>
                        </div>
                  </ResTitlePagelayout>
                    <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                    <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                    {/* <Sponsors/> */}
                    
                </div>
                </MainLayout>
            </div>
        );

}

export default SponsorsPage;