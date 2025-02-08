import React from "react";
import bgrangoli from "/images/bgrangoli.png";

export default function Loading(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-authbg bg-contain bg-repeat bg-[#890304]">
            <div className="relative w-auto h-auto flex flex-col justify-center items-center">
                <svg width={600} height={600} id="e68SJ5Zdr4l1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="084414f1d0474602a9fa9842b22d7671" export-id="9ea3b2979fe44b3e83113011b9fedfb3" cached="false"><g transform="translate(0 0.000001)">
                    <path className="animatonpath1" d="M20.822724,34.695584q-2.880218.140771-19.257992.178315C-14.813042,34.911443,-30.271253,26.031362,-30,0s11.100199-37.072141,27.668741-37.072141q16.568542,0,23.05116.118637" transform="translate(154.128875 152.862425)" fill="none" stroke="#012d6e" stroke-width="10" stroke-dashoffset="296.7" stroke-dasharray="148.35"/>
                    <path className="animatonpath2" d="M6.393573,3.813948h28.549363l.000001,25.848747q-21.625874.1929-38.194416.1929C-19.820021,29.855595,-30.185294,19.945306,-30,0s7.048494-30.691231,26.640002-31.199975q19.591508-.508744,33.119975,0l5.460254.207334.108507,18.602897" transform="matrix(.593238 0 0 0.593238 158.804115 151.980037)" fill="none" stroke="#012d6e" stroke-width="12" stroke-dashoffset="485.16" stroke-dasharray="242.58"/></g></svg>
            </div>
        </div>
    );
}