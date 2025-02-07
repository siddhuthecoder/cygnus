import React from 'react'
import boxabout1 from '/images/boxabout1.png'
import borderpattern from '/images/bottompattern.png'

const Theme = () => {
  return (
    <div className='moreabout w-full h-auto flex flex-col gap-[50px] text-white '>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="order-2 md:order-1 grow h-auto flex flex-col justify-center items-start">
          <p className='w-full lg:w-[80%] h-auto font-serif font-normal text-cygus-white text-lg md:text-xl lg:text-2xl'>
          Reconnecting with our cultural roots while embracing modern creativity. A legacy that once shaped our culture is now ready to shine. By rediscovering the echoes of the past and shaping the future, we blend tradition with innovation. This fusion honors our rich heritage while inspiring creativity for generations to come.
          </p>
        </div>
        <div className='order-1 md:order-2'>
          <div className='moreabout-border  about-border-box '>
            <div className='w-[240px] h-[160px] md:w-[360px] md:h-[240px] '>
                <img className="w-full h-full object-cover " alt="image" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1738910573/about_4_dnvgbu.jpg"} />
            </div>
        </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Theme;
