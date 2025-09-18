import React from "react";
import loginimg from "/images/login.jpg";

function Registercard({ event }) {
  return (
    <div className="hidden md:flex relative w-[320px] h-[440px]  flex-col justify-center items-center sign-border ">
       {/* <>div className="w-full h-full bg-white"></div> */}
       <img className="w-full h-full object-cover" src={loginimg}/>
    </div>
  );
}

export default Registercard;
