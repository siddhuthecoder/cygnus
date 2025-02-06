import React, { useEffect } from "react";
import bottombg from "/images/bottompattern.png";
import MainLayout from "../../components/layout/MainLayout";
import HomeAbout from "../about/homeabout";
import HomeEvents from "../events/homeevent";
import HomeSponsorsPage from "../sponsers/homesponsers";
import Homecontact from "../contact/homecontact";
import BorderBg from "../../components/ui/borderbg";
import Navbar from "../../components/navbar/navbar";
import Home from "./mainhome";
function HomePage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    return(
        <div id='CygnusHome' className='w-screen h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-patterntwo bg-contain bg-repeat'>
            <MainLayout>
                <Home />
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                <HomeAbout />
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                <HomeEvents />
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
                {/* <HomeSponsorsPage />
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/> */}
                <Homecontact />
                <img className="w-full bg-cover hidden md:block" src={bottombg}/>
                <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
            </MainLayout>
        </div>
    );
}

export default HomePage;