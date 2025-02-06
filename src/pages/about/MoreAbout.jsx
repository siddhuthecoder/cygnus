import React from 'react'
import boxabout1 from '/images/boxabout1.png'
import borderpattern from '/images/bottompattern.png'

const MoreAbout = () => {
  return (
    <div className='moreabout w-full min-h-screen flex flex-col gap-[50px] text-white '>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="order-2 md:order-1 grow h-auto flex flex-col justify-center items-start">
          <p className='w-full lg:w-[80%]  h-auto font-serif font-normal text-cygus-white text-lg md:text-xl lg:text-2xl'>
          Dive into a captivating world of cultural brilliance at CYGNUS! This two-day celebration showcases incredible talents, blending tradition, creativity, and cultural exchange. Experience epic narratives brought to life, emphasizing the moral values and rich cultural legacy of our nation.
          </p>
        </div>
        <div className='order-1 md:order-2 moreabout-border  about-border-box '>
          <div className='w-[240px] h-[160px] md:w-[360px] md:h-[240px] bg-white'>
              <img className="w-full h-full object-cover " alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738871424/about1_o8ybjk.jpg"} />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="grow h-auto order-2 flex flex-col justify-center items-end">
          <p className='w-full lg:w-[80%] h-auto font-serif font-normal text-cygus-white text-lg md:text-xl lg:text-2xl'>
          Get ready to be amazed by  dynamic dances, soulful music, motivational speeches, heartfelt skits, and breathtaking performances . The presence of an esteemed celebrity guest and respected dignitaries will take the celebration to the next level, adding excitement and making the experience unforgettable with cherished moments and endless creativity!
          </p>
        </div>
        <div className='md:order-1'>
          <div className='moreabout-border  about-border-box '>
            <div className='w-[240px] h-[160px] md:w-[360px] md:h-[240px]'>
              <img className="w-full h-full object-cover " alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738794576/studentmitra_zmcbwt.jpg"} />
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MoreAbout
