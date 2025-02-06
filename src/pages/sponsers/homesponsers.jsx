import Pagelayout from "../../components/layout/pagelayout";
import rangoli from "/images/bgrangoli.png";
import Carousel from "../../components/ui/carousal";
import HomeSponserCarouselItm from "../../components/ui/carouselitm";
import { HomeSponserCarouselItmtwo } from "../../components/ui/carouselitm";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import SponersSketeton from "../../components/ui/sponserskeleton";

const HomeSponsorsPage = () => {
  const [sponsors, setSponsors] = useState([]);
  const [partners, setPartners] = useState([]);
  const [sloading,setSLoading] = useState(true);
  const [ploading,setPLoading] = useState(true);
  useEffect(() => {
    // Fetch main sponsors
    const fetchSponsors = async () => {
      try {
        const response = await axiosInstance.get("/api/sponsers/mainsponsers/");
        setSponsors(response.data);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
      setSLoading(false);
    };

    // Fetch main partners
    const fetchPartners = async () => {
      try {
        const response = await axiosInstance.get("/api/partners/mainpartners/");
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
      setPLoading(false)
    };

    fetchSponsors();
    fetchPartners();

  }, []);

  return (
    <Pagelayout title="Sponsors" className="justify-center min-h-full md:min-h-screen p-0 pb-8">
      <img className="absolute top-1/2 right-6 h-20 object-contain animate-spin-slow" src={rangoli} alt="rangoli" />
      
      <div className="py-6 md:py-12 w-full grow justify-center items-center">
        <div className="w-full h-auto flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-20 px-0 sm:px-8 md:px-16 lg:px-32">
          
          {/* Mobile View - Sponsors */}
          {sponsors.length > 0 && (
            <div className="block md:hidden w-full h-auto px-4 py-4">
              <Carousel data_array={sponsors} childComp={HomeSponserCarouselItm} />
            </div>
          )}

          {/* Mobile View - Partners */}
          {partners.length > 0 && (
            <div className="block md:hidden w-full h-auto px-4 py-4">
              <Carousel data_array={partners} childComp={HomeSponserCarouselItmtwo} />
            </div>
          )}

          <div className="w-full h-auto flex flex-col justify-center items-center">
              <div className={`${sloading?"flex":"hidden"} w-full h-auto  flex-row justify-center items-center gap-20`}>
                <SponersSketeton className={"w-[300px]"}/>
                <SponersSketeton className={"hidden md:flex w-[300px]"}/>
                <SponersSketeton className={"hidden md:flex w-[300px]"}/>
              </div>
              <div className={`${sloading?"hidden":"hidden md:flex"} w-full h-auto  flex-col justify-center items-center`}></div>
                {/* Desktop View - Sponsors */}
                {sponsors.length > 0 && (
                  <div className="hidden md:grid w-full h-auto grid-cols-1 md:grid-cols-3 justify-between items-center gap-4 sm:gap-8 md:gap-16 lg:gap-28">
                    {sponsors.map((sponsor) => (
                      <div key={sponsor.id} className="w-full h-auto flex flex-col items-center justify-center gap-4">
                        <p className="w-full h-auto font-serif font-semibold text-center text-white text-base">{sponsor.name}</p>
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 shadow-md p-1 py-2 border-[1px] border-[#EEC276]">
                          <div className="bg-white w-full h-40">
                            <img src={sponsor.imageUrl} alt={sponsor.name} className="w-full h-full object-contain" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
          </div>
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className={`${ploading?"hidden md:flex":"hidden"} w-full h-auto  flex-row justify-center items-center gap-14`}>
              <SponersSketeton childclass={"h-[120px]"} className={"w-[270px]"}/>
              <SponersSketeton childclass={"h-[120px]"} className={"hidden md:flex w-[270px]"}/>
              <SponersSketeton childclass={" h-[120px]"} className={"hidden md:flex w-[270px]"}/>
            </div>

            <div className={`${ploading?"hidden":"hidden md:flex"} w-full h-auto  flex-col justify-center items-center`}>
            {/* Desktop View - Partners */}
            {partners.length > 0 && (
              <div className="hidden md:block w-full h-auto">
                <div className="w-full h-auto grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8 lg:gap-16">
                  {partners.map((partner) => (
                    <div key={partner.id} className="w-full h-full flex flex-col items-center justify-center gap-3 px-1 py-2 shadow-md border-[1px] border-[#EEC276]">
                      <div className="bg-white w-full h-36">
                        <img src={partner.imageUrl} alt={partner.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </Pagelayout>
  );
};

export default HomeSponsorsPage;