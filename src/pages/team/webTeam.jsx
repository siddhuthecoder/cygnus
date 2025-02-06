import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import bottombg from "/images/bottompattern.png";
import profile from "/images/profile.png";
import photo from "/images/map.png";

import BorderBg from "../../components/ui/borderbg";
import { CarouselwithTwoItems } from "../../components/ui/carousal";
import { CoreTeamCardCarouleItem } from "../../components/ui/carouselitm";
const sponsors = [
  { id: 1, name: "Gangadhar", role: "Full Stack Developer" ,imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738790144/gangadhar_lmgn0x.jpg"},
  { id: 2, name: "Arun Kumar", role: "Backend Developer",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738791435/IMG_20250206_030246_l5dm4v.jpg" },
  { id: 3, name: "Surya Vamsi", role: "Frontend Developer",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738792871/WhatsApp_Image_2025-02-06_at_03.32.41_c7783af6_x5rcpk.jpg"},
  { id: 4, name: "Rupak Choppala", role: "Full Stack Developer",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738789518/rupak_ojx9cn.jpg" },
  { id: 5, name: "Ranjith", role: "Frontend Developer",imageUrl:"https://res.cloudinary.com/dru7btk92/image/upload/v1738870385/ranjith_hg0kzr.jpg"},
  { id: 6, name: "ManiKanta", role:"Frontend Developer",imageUrl:"https://res.cloudinary.com/dru7btk92/image/upload/v1738870576/manikanta_mcahxe.jpg" },
  { id: 7, name: "Karthik", role: "Frontend Developer",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738795417/profile-user-icon-isolated-on-white-background-eps10-free-vector_ph6jc7.jpg"},
];
function WebTeam(){
    return(
        <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                <ResTitlePagelayout widthtitle={"w-[260px] md:w-[360px]"} className={"h-auto"} title={"Web Team"} posTiltle={"pt-4"} >
                    <div className="w-full grow p-4 sm:px-8 md:px-16 lg:px-24 py-24 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-[40px]">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.id} className="flex flex-col items-center justify-center text-center m-3">
                                {/* Outer Border Design */}
                                <div className="relative w-[140px] h-[140px] flex flex-col justify-content items-center">
                                  <img
                                    src={profile}
                                    alt="Outer border"
                                    className="absolute w-full h-full object-contain"
                                  />
                                  {/* Inner Circular Image */}
                                  <img
                                    src={sponsor.imageUrl}
                                    alt={sponsor.name}
                                    className="absolute top-[12px] left-[13px] w-[115px] h-[115px] rounded-full object-cover"
                                  />
                                </div>
                                {/* Details Below the Block */}
                                <div className="mt-2 font-serif">
                                  
                                  <p className="text-lg text-white text-center">{sponsor.name}</p>
                                  <p className="text-base text-white  text-start">{sponsor.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full grow p-4 flex md:hidden flex-col justify-center items-center">
                        {/* <Carousel className={"w-[60vw]"} data_array={sponsors} childComp={CoreTeamCardCarouleItem}/> */}
                        <CarouselwithTwoItems nowOfRows={2} className={"w-[60vw]"} data_array={sponsors} childComp={CoreTeamCardCarouleItem}/>
                    </div>
                </ResTitlePagelayout>
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
            </div>
        </div>
    );
}

export default WebTeam;