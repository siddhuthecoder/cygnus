import React from "react";


export default function Spinner({className,id}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <radialGradient id={id} cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
                <stop offset="0" stopColor="#E1CA6D"></stop>
                <stop offset=".3" stopColor="#E1CA6D" stopOpacity=".9"></stop>
                <stop offset=".6" stopColor="#E1CA6D" stopOpacity=".6"></stop>
                <stop offset=".8" stopColor="#E1CA6D" stopOpacity=".3"></stop>
                <stop offset="1" stopColor="#E1CA6D" stopOpacity="0"></stop>
            </radialGradient>
            <circle transform-origin="center" fill="none" stroke={`url(#${id})`} strokeWidth="24" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70">
                <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite">
                </animateTransform>
            </circle>
            <circle transform-origin="center" fill="none" opacity=".2" stroke="#E1CA6D" strokeWidth="24" strokeLinecap="round" cx="100" cy="100" r="70">
            </circle>
        </svg>
    );
}