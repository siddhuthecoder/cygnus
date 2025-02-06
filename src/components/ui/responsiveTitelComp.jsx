import React,{useRef} from "react";
import { cn } from "../../utils";
import tilecardbg from "/images/tilecardbg.png";
import titleheader from "/images/titleheadertwo.png";
import titleheaderlft from "/images/titleheader4.png";
import titleheaderrt from "/images/titleheader3.png";
import titlebacklft from "/images/headingbox1.png";
import titlebackrt from "/images/headingbox2.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(useGSAP,ScrollTrigger,CustomEase);

function ResTileComponent({className, children,width}){

    const container = useRef();
        useGSAP(() => {
            gsap.to('.gsapRotaconatiner',{
                keyframes: {
                    "0%":{ rotationX:0 },
                    "70%": {rotationX: 1800},
                    "100%":{rotationX: 1800},
                  },
                  ease: CustomEase.create("custom", "0.14, 0.76, 0.41, 0.98"),
                  duration: 12,
                  repeat: -1,
                  repeatDelay: 60,
                scrollTrigger: {
                  trigger: '.gsapRotaconatiner',
                  start: 'top 95%',
                  end: 'bottom 10%',
                  toggleActions: "restart  restart pause",
                  once: false,
                }
            });
    
        },{ scope: container });
    

    return (
        <div ref={container} className={cn("relative w-full h-auto py-14 flex flex-col justify-center items-center",className)}>
            <div className={cn("w-full h-auto flex flex-col justify-center items-center")}>
                <div id="line" className="w-full h-[1px] bg-[#E1CA6D]"></div>
            </div>
            <div className="absolute left-32 animatelftdots w-auto h-auto hidden md:flex flex-row justify-center items-center gap-[1px]">
                    <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full"></div>
                    <div className="w-1 h-1 bg-dots-gradient rounded-full"></div>
                    <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-dots-gradient"></div>
                    <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full"></div>
                    <div className="w-1 h-1 bg-dots-gradient rounded-full"></div>
                    <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full"></div>
                </div>
                <div className="absolute right-32 animatergtdots w-auto h-auto flex flex-row justify-center items-center gap-[1px]">
                    <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full"></div>
                    <div className="w-1 h-1 bg-dots-gradient rounded-full"></div>
                    <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-dots-gradient"></div>
                    <div className="w-[6px] h-[6px] bg-dots-gradient rounded-full"></div>
                    <div className="w-1 h-1 bg-dots-gradient rounded-full"></div>
                    <div className="w-[2px] h-[2px] bg-dots-gradient rounded-full"></div>
                </div>
                {/* <div className="absolute left-7 md:left-48 w-auto h-28 flex flex-row justify-center items-center animate-titleflip">  
                    <img className="relative left-[3px] h-[64px] md:h-[82px] object-contain z-40" src={titleheaderlft} alt="tileimage"/>
                    <div className="w-[180px] md:w-auto h-[64px] md:h-[82px] z-50 flex flex-row justify-center items-center bg-cy-light-bg border-y-[1.6px]  border-[#FFD58B]">
                        <p className="w-auto h-auto font-Young font-normal text-[#012D6E] text-start md:text-center text-base md:text-3xl">{children}</p>
                    </div>
                    <img className="relative right-[3px] h-[64px] md:h-[82px] object-contains z-40" src={titleheaderrt} alt="tileimage"/>
                </div> */}
                <div className={cn("absolute container3d left-7 md:left-24  lg:left-32 w-[260px] md:w-[700px] h-[48px] md:h-[82px]  flex flex-row justify-center items-center",width)}>  
                    {/* <img className="h-full object-contain" src={tilecardbg} alt="tileimage"/>
                    <p className="absolute font-Young font-normal text-[#012D6E] text-center text-3xl">{children}</p> */}
                    <div className="absolute wrapper w-full h-full flex flex-row justify-center items-center gsapRotaconatiner">
                        <div className="back w-full h-full absolute flex flex-row justify-center items-center">
                            <img className="relative left-[3px] h-full  object-contain z-40" src={titlebacklft} alt="tileimage"/>
                            <div className="grow h-full flex flex-row justify-center items-center bg-[#FFD58B] border-y-[1.6px]  border-[#FFD58B]">
                                <p className="w-auto h-auto font-Young font-normal text-transparent text-start md:text-center text-xl md:text-3xl">{children}</p>
                            </div>
                            <img className="relative right-[3px] h-full object-contains z-40" src={titlebackrt} alt="tileimage"/>
                        </div>
                        <div className="front w-full h-full absolute flex flex-row justify-center items-center">
                            <img className="relative left-[3px] h-full object-contain z-40" src={titleheaderlft} alt="tileimage"/>
                            <div className="grow  h-full z-50 flex flex-row justify-center items-center bg-cy-light-bg border-y-[1.6px]  border-[#FFD58B]">
                                <p className="w-auto h-auto font-Young font-normal text-[#012D6E] text-start md:text-center text-xl md:text-3xl">{children}</p>
                            </div>
                            <img className="relative right-[3px] h-full object-contains z-40" src={titleheaderrt} alt="tileimage"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ResTileComponent;