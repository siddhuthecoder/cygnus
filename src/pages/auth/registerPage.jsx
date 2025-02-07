import React, { useEffect } from "react";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import MainLayout from "../../components/layout/MainLayout";
import bottombg from "/images/bottompattern.png";
import Eventcard from "../../components/ui/eventcard";
import Registercard from "./registercard";
import SigninForm from "./signinform";
import Register from "./register"; 
import eventimage from '/images/eventimage.png';

function RegisterPage({ title }) {
  useEffect(()=>{
        window.scrollTo(0,0);
    })
  return (
    <>
          <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-authbg bg-cover bg-repeat'>
                <MainLayout>
                  <div className="w-full h-auto flex flex-col justify-start items-center gap-0 font-serif">
                    <ResTitlePagelayout widthtitle={"w-[200px] md:w-[340px]"} posTiltle={"pt-8 md:pt-16"} className={"justify-start ]"} title={"Register"}>
                      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl h-auto gap-8 p-8 rounded-2xl mb-10">
                          <div className="order-2 md:order-1 w-full md:w-auto h-auto">
                            <Register />
                          </div>
                          <div className="order-1 md:order-2 w-auto h-auto flex flex-col justify-start items-center pt-0 md:pt-14 gap-6">
                              <div className="w-[95%] h-auto flex flex-col items-center ">
                                  <div className="w-full h-[400px]">
                                    <div className=" relative w-full h-full flex flex-col justify-center items-center p-10">
                                        <img className="w-full h-full  z-40" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738904330/register_csvq0g.webp"} alt={"eventimage"}/>
                                        <div className="absolute inset-0 flex flex-col justify-end items-start gap-[2px] event-border-two overflow-hidden z-50">
                                          
                                        </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                  <div >
                                      <p className="font-serif text-[19px]">Cygnus</p>
                                  </div>
                                  <div> 
                                      <p className="text-[22px] font-serif w-64 text-center text-[#E1CA6D]"> The Legacy Continues</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </ResTitlePagelayout>
                  </div>
                </MainLayout>
            </div>

    </>
  );
}

export default RegisterPage;
