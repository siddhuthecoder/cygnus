import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import bottombg from "/images/bottompattern.png";
import profile from "/images/profile.png";
import photo from "/images/map.png";
import WebTeam from "./webTeam";

import BorderBg from "../../components/ui/borderbg";
import Carousel, { CarouselwithTwoItems } from "../../components/ui/carousal";
import { CoreTeamCardCarouleItem, SponsorCardCarouleItem } from "../../components/ui/carouselitm";
const sponsors = [
  {id: 1, name: "Samuel Jonathan", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783634/IMG_20240818_141630_-_Samuel_Jonathan_s3jla8.jpg"},
  {id: 2, name: "Ashraf Shaik", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783632/IMG_20250205_194408_-_Ashraf_Shaik_aqbqxm.jpg"},
  {id: 3, name: "Jahnavi Parupalli", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783635/IMG_20250205_204957_-_Jahnavi_Parupalli_uzjwrt.jpg"},
  {id: 4, name: "Ynizam Kottu", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783635/IMG-20241023-WA0032_-_Ynizam_Kottu_sptwus.jpg"},
  {id: 5, name: "Sharmila Tangi", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783636/IMG_20250205_200450_-_Sharmila_Tangi_y9mjrh.jpg"},
  {id: 6, name: "Nikhitha Velicheti", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783637/IMG-20250111-WA0025_-_Nikhitha_Velicheti_d8bmkk.jpg"},
  {id: 7, name: "Mandla Pavan Kumar", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783637/IMG-20240811-WA0036_-_Mandla_Pavan_Kumar_wl8x4z.jpg"},
  {id: 8, name: "Bharath", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783637/IMG-20250203-WA0010_-_kaLION_i35g8w.jpg"},
  {id: 9, name: "M Harsha", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783688/imresizer-1738667243236_-_M_Harsha_a5zfl9.jpg"},
  {id: 10, name: "Kavya Sai Sri Iravada", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783800/1000019371_-_Kavya_sai_sri_Iravada_m425lm.jpg"},
  {id: 11, name: "Kalesha Vali Shaik", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738783936/1738774526344_-_Kalesha_vali_Shaik_uu2zma.jpg"},
  {id: 12, name: "Pallem Hemalatha", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738784183/IMG-20250205-WA0007_-_N200762_PALLEM_HEMALATHA_d5ijzr.jpg"},
  {id: 13, name: "Deepika", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738784184/IMG-20250205-WA0014_-_Deepu_Deepika_qytds8.jpg"},
  {id: 14, name: "Salopantula Sri Ram", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738784191/N200033_-_N200033_SALOPANTULA_SRI_RAM_ypt0md.jpg"},
  {id: 15, name: "Pathakamuri Venkata Srishanth", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785186/Picsart_24-04-15_15-51-14-935_2_-_N210378_PATHAKAMURI_VENKATA_SRISHANTH_h2omxu.jpg"},
  {id: 16, name: "Anjineyulu Besta", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785192/IMG20241103142911-01_-_Anjineyulu_Besta_ojhrxt.jpg"},
  {id: 17, name: "Jyothi", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785346/IMG20240423143855_-_Jyothi_Softball_a6ui1y.jpg"},
  {id: 18, name: "Raj", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785310/IMG_7112_-_Life_Friends_tt8g9p.jpg"},
  {id: 19, name: "Allam Yohetha Reddy", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785343/IMG-20250205-WA0011_-_N210198_ALLAM_YOHETHA_REDDY_tkmefp.jpg"},
  {id: 20, name: "Chandrika Batta", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785344/IMG-20250205-WA0020_-_Chandrika_batta_z0y69n.jpg"},
  {id: 21, name: "Moparthi Kumar Babu", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785345/reduced_-_Moparthi_Kumar_babu_uvvpfe.jpg"},
  {id: 22, name: "Swetha Susan", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785345/WhatsApp_Image_2025-02-05_at_11.03.45_PM_-_Swetha_Susan_a5bw15.jpg"},
  {id: 23, name: "Sowmya Sri", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785345/IMG20231112144213_2_-_Sowmya_Sri_lwr5me.jpg"},
  {id: 24, name: "Tanush Siddabathuni", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785689/1696740849307_-_Tanush_Siddabathuni_tvohh1.jpg"},
  {id: 25, name: "Jayasree", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785692/SRI_1677_10000_-_Parrot_14_guf04j.jpg"},
  {id: 26, name: "Surya Prakash Tamma", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785694/1738768596981_-_surya_Prakash_Tamma_cr0vrl.jpg"},
  {id: 27, name: "P Yaswanth", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785696/IMG-20240714-WA0027_-_Yaswanth_Yaswanth_boxecc.jpg"},
  {id: 28, name: "Jayanth Telugu", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785697/N210298_TELUGU_JAYANTH_-_Jayanth_Telugu_sl16a4.jpg"},
  {id: 29, name: "Aditya Uppala", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785697/RAO_1190_-_Aditya_Uppala_nggtv9.jpg"},
  {id: 30, name: "Palli Meghana", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785707/IMG_20250205_205715_-_N210613_PALLI_MEGHANA_jo6pn1.jpg"},
  {id: 36, name: "Padmasri Siri", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785769/1000256481_-_Padmasri_Siri_mdlko8.jpg"},
  {id: 37, name: "Siddhardha Bolla", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785866/SID_7467_-_Siddhardha_Bolla_xm1tst.jpg"},
  {id: 38, name: "Mannam Sekhar", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738785868/sketch1671882758688_-_N210096_MANNAM_SEKHAR_p5hgch.jpg"},
{id: 39, name: "Komali", imageUrl: "https://res.cloudinary.com/db552uxtr/image/upload/v1738786258/IMG-20241129-WA0172_rrkb5k.jpg"},


];
function TeamPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
      })
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