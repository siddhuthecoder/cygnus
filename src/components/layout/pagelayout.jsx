import React from "react";
import { cn } from "../../utils";
import TileComponent from "../ui/tilecomponent";
import bottombg from "/images/bottompattern.png";

function Pagelayout({ children,posTiltle, className,title }) {
    return (
        <div className={cn("relative w-full min-h-screen flex flex-col justify- items-center",className)}>
            <div className={cn("w-full h-auto pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-2 flex flex-col justify-center items-center",posTiltle)}>
                <TileComponent className={"w-full h-auto"}>
                    {title}
                </TileComponent>
            </div>
            <div className={cn("w-full grow flex flex-col justify-center items-center",className)}>
                {children}
            </div>
        </div>
    );
}

export default Pagelayout;