import React, { useState } from "react";
import Pagelayout from "../../components/layout/pagelayout";
import EventCardSkeleton from "../../components/ui/eventcardskeleton";
import LargeSports from "./LargeSports";
function SportsWinnersPage() {
    return(
        <Pagelayout className={"min-h-full md:min-h-screen"} title={"Sports"} posTiltle={"pt-4"} >
          <div className={`${false?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
              <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
                <EventCardSkeleton/>
                <EventCardSkeleton/>
                <EventCardSkeleton/>
                <EventCardSkeleton/>
                <EventCardSkeleton/>
                <EventCardSkeleton/>
              </div>
          </div>
          <div className={`${false?"hidden":"flex"} w-full grow flex-col justify-start items-start py-8 gap-16`}>
            <LargeSports isborder={true}/>
            <LargeSports isborder={true}/>
            <LargeSports isborder={true}/>
            <LargeSports isborder={false}/>
          </div>
        </Pagelayout>
    );
}

export default SportsWinnersPage;