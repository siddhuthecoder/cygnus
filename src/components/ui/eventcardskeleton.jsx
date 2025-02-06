import React from 'react';
import "../css/style.css";
const EventCardSkeleton = () => {
  return (
    <div className='w-auto h-auto rounded-lg bg-[#FFFFFF]'>
    <div className="relative w-[250px] h-[364px] flex flex-col justify-center items-center rounded-lg overflow-hidden ">
      <div className=" bg-[#ab5a5a] flex flex-col justify-end items-start gap-3 px-4 py-3 skeleton ">
        {/* <div className='w-full grow rounded-md  bg-gray-500'></div> 
        <div className="w-full h-5 bg-gray-500 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-600 rounded"></div> */}
      </div>
    </div>
    </div>
  );
};

export default EventCardSkeleton;

