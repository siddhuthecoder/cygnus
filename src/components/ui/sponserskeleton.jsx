import React from "react";
import { cn } from "../../utils";
import "../css/style.css";


export default function SponersSketeton ({className}){
    return(
        <div className={cn("w-auto h-auto  p-4 bg-[#D13B3C] flex flex-col justify-end items-start gap-3 px-4 py-3 skeleton",className)} >
            {/* <div className={cn("w-full h-8 bg-stone-500 animate-pulse rounded-lg")}></div>
            <div className={cn(`w-full h-[160px] bg-stone-500 rounded-lg animate-pulse`,childclass)}>
            </div> */}
        </div>
    )
}