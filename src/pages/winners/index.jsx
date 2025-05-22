import React, { useEffect,useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import BorderBg from "../../components/ui/borderbg";
import bottombg from "/images/bottompattern.png";
import { useNavigate,useLocation } from "react-router-dom";
import EventCardSkeleton from "../../components/ui/eventcardskeleton";
import Pagelayout from "../../components/layout/pagelayout";
import SportsWinnersPage from "./sports";



function WinnersPage(){
    const [navState , setNavState] = useState(false);
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    

    return(
        <div id='CygnusEvent' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-0">
                    <BorderBg className={"h-16 md:h-32 bg-eventtopbordertwo z-50 bg-cover md:bg-contain "} />
                    <div className="w-full grow flex flex-col justify-start items-start pt-6">
                        <div className="w-full h-auto flex flex-row justify-center items-center gap-10">
                            <button onClick={()=>setNavState(false)} className="group w-auto h-auto px-4 py-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-transparent border-none focus:outline-none">
                                <span className="inline-block font-Young text-xl/[22px] px-2">Sports</span>
                                <span className={` ${navState?"invisible":"visible"} group-hover:visible inline-block w-full h-[2px] rounded-sm bg-[#E1CA6D] `}></span>
                            </button>
                            <button onClick={()=>setNavState(true)} className="w-auto group h-auto px-4 py-2 flex flex-col justify-center items-center gap-1 hover:cursor-pointer bg-transparent border-none focus:outline-none">
                                <span className="inline-block font-Young text-xl/[22px] px-2">Events</span>
                                <span className={`${navState?"visible":"invisible"} group-hover:visible inline-block w-full h-[2px] rounded-sm bg-[#E1CA6D]`}></span>
                            </button>
                        </div>
                        <div className="w-full h-auto flex flex-col justify-start items-center">
                            {navState? <SportsWinnersPage/>:<SportsWinnersPage/>}
                        </div>
                    </div>
                    <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                    <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                </div>
            </MainLayout>
        </div>
    );
}

export default WinnersPage;