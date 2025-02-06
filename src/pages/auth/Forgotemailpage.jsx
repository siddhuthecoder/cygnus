import React, { useEffect } from "react";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import MainLayout from "../../components/layout/MainLayout";
import Registercard from "./registercard";
import ForgotEmailForm from "./ForgotPasswordForm";

function ForgotEmailPage({ title }) {
  useEffect(()=>{
        window.scrollTo(0,0);
    })
  return (
    <>
          <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-authbg bg-cover bg-repeat'>
                <MainLayout incFooter={false}>
                  <div className="w-full grow flex flex-col justify-start items-center gap-0 font-serif">
                  
                    <ResTitlePagelayout widthtitle={"w-[200px] md:w-[240px] md:h-16 "} childclass={"justify-start"} posTiltle={"pt-8 md:pt-8"} className={" min-h-full md:min-h-screen justify-start "} title={"Email"}>
                      <div className="flex justify-between items-start w-full max-w-5xl h-auto gap-8 p-8 rounded-2xl">
                        <ForgotEmailForm/>
                        <Registercard/>
                      </div>
                    </ResTitlePagelayout>
                  </div>
                </MainLayout>
            </div>

    </>
  );
}

export default ForgotEmailPage;
