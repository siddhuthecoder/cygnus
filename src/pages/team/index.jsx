import React, { useEffect,useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import bottombg from "/images/bottompattern.png";
import profile from "/images/profile.png";
import photo from "/images/map.png";
import WebTeam from "./webTeam";

import BorderBg from "../../components/ui/borderbg";
import Carousel, { CarouselwithTwoItems } from "../../components/ui/carousal";
import { CoreTeamCardCarouleItem, SponsorCardCarouleItem } from "../../components/ui/carouselitm";

import axiosInstance from "../../api/axiosInstance";

// const sponsors = [
//   {id: 1, name: "P Yaswanth", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785696/IMG-20240714-WA0027_-_Yaswanth_Yaswanth_boxecc.jpg"},
//   {id: 2, name: "Siddhardha Bolla", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785866/SID_7467_-_Siddhardha_Bolla_xm1tst.jpg"},
//   {id: 3, name: "Surya Prakash Tamma", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785694/1738768596981_-_surya_Prakash_Tamma_cr0vrl.jpg"},
//   {id: 4, name: "Jayasree", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785692/SRI_1677_10000_-_Parrot_14_guf04j.jpg"},
//   {id: 5, name: "Komali", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738786258/IMG-20241129-WA0172_rrkb5k.jpg"},
//   {id: 6, name: "Ashraf Shaik", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783632/IMG_20250205_194408_-_Ashraf_Shaik_aqbqxm.jpg"},
//   {id: 7, name: "Sharmila Tangi", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783636/IMG_20250205_200450_-_Sharmila_Tangi_y9mjrh.jpg"},
//     {id: 8, name: "Kalesha Vali Shaik", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783936/1738774526344_-_Kalesha_vali_Shaik_uu2zma.jpg"},
//   {id: 9, name: "Swetha Susan", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785345/WhatsApp_Image_2025-02-05_at_11.03.45_PM_-_Swetha_Susan_a5bw15.jpg"},
//   {id: 10, name: "Samuel Jonathan", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783634/IMG_20240818_141630_-_Samuel_Jonathan_s3jla8.jpg"},
//   {id:11,name:"Gangadhar",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738790144/gangadhar_lmgn0x.jpg"},
//   {id: 12, name: "Moparthi Kumar Babu", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785345/reduced_-_Moparthi_Kumar_babu_uvvpfe.jpg"},
//   {id: 13, name: "Jyothi", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785346/IMG20240423143855_-_Jyothi_Softball_a6ui1y.jpg"},
//   {id: 14, name: "Raj", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738863301/IMG_1532_1_lejjkw.jpg"},
//   {id:15,name:"Vijayandhra",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738863496/vijay_n3b29j.png"},
//   {id:16,name:"VAMSHI REDDY ",imageUrl:"https://res.cloudinary.com/db552uxtr/image/upload/v1738863723/vamsi_k99uxv.jpg"}
// ]  


function TeamPage(){
    const [sponsors,setSponsors]=useState([])
    useEffect(()=>{
        window.scrollTo(0,0);
      })
    useEffect(()=>{
      const fetchData=async()=>{
        try{
           const response= await axiosInstance.get("/api/teammates");
           setSponsors(response.data);
        }catch(error){
           console.error("Error fetching events:", error);
        }
   }
   fetchData();
    },[]) 
    return(
        <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout>
            <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
            <BorderBg className={"h-16  md:h-32 bg-teamtopborder z-50 relative -top-1 md:-top-2 bg-cover md:bg-contain "} />
                <ResTitlePagelayout widthtitle={"w-[300px] md:w-[480px]"} className={"min-h-full md:min-h-screen"} title={"Team Members"} posTiltle={"pt-4"} >
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
                          {sponsor.role && (
  <p className="text-base text-white text-center">{sponsor.role}</p>
)}
                          
                            
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
               < WebTeam/>
            </div>
            </MainLayout>
        </div>
    );
}

export default TeamPage;