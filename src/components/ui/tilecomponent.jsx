import React ,{useRef} from "react";
import { cn } from "../../utils";
import tilecardbg from "/images/tilecardbg.png";
import backtile from "/images/titelback.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(useGSAP,ScrollTrigger,CustomEase);
function TileComponent({className, children}){

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
              toggleActions: "restart pause restart pause",
              once: false,
            }
        });

    },{ scope: container });

    return (
        <div ref={container} className={cn("relative w-full h-auto py-14 flex flex-col justify-center items-center",className)}>
            <div className={cn("w-full h-auto flex flex-col justify-center items-center")}>
                <div id="line" className="w-full h-[1px] bg-[#E1CA6D]"></div>
            </div>
            <div className="hidden md:flex absolute left-32 animatelftdots w-auto h-auto  flex-row justify-center items-center gap-[1px]">
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
            <div className=" absolute container3d left-7 md:left-24  lg:left-32 w-[164px] md:w-[300px] h-[83px] lg:h-28 flex flex-row justify-center items-center ">  
                {/* <img className="h-full object-contain" src={tilecardbg} alt="tileimage"/>
                <p className="absolute font-Young font-normal text-[#012D6E] text-center text-3xl">{children}</p> */}
                <div className="absolute wrapper w-full h-full flex flex-row justify-center items-center gsapRotaconatiner"> {/*animate-titleflip*/}
                    <div className="back w-full h-full absolute flex flex-col justify-center items-center">
                        <img className="h-full object-contain" src={backtile} alt="tileimage"/>
                    </div>
                    <div className="front w-full h-full absolute flex flex-col justify-center items-center">
                        <img className="h-full object-contain" src={tilecardbg} alt="tileimage"/>
                        <p className="absolute font-Young font-normal text-[#012D6E] text-center text-xl md:text-3xl">{children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TileComponent;