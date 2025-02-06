import React from "react";
import { cn } from "../../utils";
import TileComponent from "../ui/tilecomponent";
import ResTileComponent from "../ui/responsiveTitelComp";
import bottombg from "/images/bottompattern.png";

function ResTitlePagelayout({ children,posTiltle, className,title,childclass,widthtitle }) {
    return (
        <div className={cn("relative w-full min-h-screen flex flex-col justify-center items-center",className)}>
            <div className={cn("w-full h-auto pt-16 pb-2 flex flex-col justify-center items-center",posTiltle)}>
                {/* <TileComponent className={"w-full h-auto"}>
                    {title}
                </TileComponent> */}
                <ResTileComponent width={widthtitle} className={"w-full h-auto"}>
                    {title}
                </ResTileComponent>
            </div>
            <div className={cn("w-full grow flex flex-col justify-center items-center",childclass)}>
                {children}
            </div>
        </div>
    );
}

export default ResTitlePagelayout;