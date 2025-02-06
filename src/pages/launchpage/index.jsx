import React, { useEffect, useState } from "react";
import "../../components/css/style.css";
import { useNavigate } from "react-router-dom";


function LaunchPage({className}){
    const [loading,setLoading] = useState(false);
    const [time,setTime] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (time === null) return; 
        if (time === 0) {
            navigate("/");
            return;
        }
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time, navigate]);

    const handelclick = (e)=>{
        setLoading(true);
        setTime(5);
    }

    return(
        <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-[#890304] bg-patterntwo bg-contain bg-repeat">
            <div className="z-[100] absolute top-0 left-0 w-full h-44 bg-top-cutone bg-contain bg-repeat "></div>
            <div className="z-[96] absolute w-full h-full flex flex-row justify-center items-center">
                <div className="absolute  w-1/4 left-0 h-full bg-side-curtain bg-cover "></div>
                <div className="absolute  w-1/4 right-0 h-full bg-side-curtain-lft bg-cover "></div>
            </div>
            {/* <div className="z-[99] absolute w-full h-full flex flex-row justify-center items-center"> */}
                <div className="z-[99] absolute  w-1/2 left-0 h-full bg-curtain-image bg-cover leftcurtain"></div>
                <div className="z-[99] absolute  w-1/2 right-0 h-full bg-curtain-image bg-cover rightcurtain"></div>
            {/* </div> */}
            <div className="z-[97] absolute w-auto h-auto flex flex-col justify-center items-center px-16 py-12 ">
                <div className="w-auto h-auto flex flex-col justify-center items-center gap-4">
                    <p className="w-auto h-auto font-serif font-bold text-center text-cy-secondary-bg text-8xl">
                        CYGNUS<span className="mx-6">2K25</span>
                    </p>
                    <p className="w-auto h-auto font-serif font-medium text-center text-cy-secondary-bg text-4xl">
                        Website Launch
                    </p>
                    <button onClick={handelclick} className={`${loading?"hidden":"block"} w-auto h-auto px-8 py-3 mt-4 border-none rounded-lg bg-cygnus-btn-bg font-serif font-medium text-center text-cygnus-white text-3xl hover:cursor-pointer hover:drop-shadow-2xl`}>
                        Launch
                    </button>
                    <div className={`${loading?"block":"hidden"} w-auto h-auto p-5`}>
                        <p className="w-auto h-auto font-serif font-semibold text-center text-5xl text-cygnus-white ">
                            {time}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LaunchPage;