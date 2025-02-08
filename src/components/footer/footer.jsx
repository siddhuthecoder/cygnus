import React from "react";
import {Facebook,Instagram,Linkedin,Youtube,MessageCircleCode} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import design from '/images/Design.png';
import image1 from '/images/cygnus_logo.png';
import routesconfig from "../../configs/routesconfig";


const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#E1CA6D] border-t-4 border-red-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left py-16 px-8">
        {/* Logo and Name */}
        <div className="w-auto h-auto flex flex-col justify-ceneter items-start md:items-center gap-2">
          <img src={image1} alt="logo" className="h-16" />
          <div className='w-auto h-auto flex flex-col justify-center items-center gap-0'>
            <p className="w-full h-auto text-start text-4xl/[36px] text-[#012D6E] font-bold font-league tracking-wide">CYGNUS</p>
            <p className="w-full h-auto  text-sm/[12px] text-[#890304] font-league font-semibold">THE LEGACY CONTINUES</p>
          </div>
        </div>

        {/* Pages Section */}
        <div className="font-serif flex flex-col justify-start items-start md:items-center ">
          <h3 className="text-2xl font-semibold text-[#022E6E]">Pages</h3>
          <ul className="mt-4 space-y-2 text-xl">
            <li>
              <a href={`${routesconfig.home}`} className="text-[#000000] hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href={`${routesconfig.about}`} className="text-[#000000] hover:text-red-600">
                About
              </a>
            </li>
            <li>
              <a href={`${routesconfig.events}`} className="text-[#000000] hover:text-red-600">
                Events
              </a>
            </li>
            <li>
              <a href={`${routesconfig.sponsors}`} className="text-[#000000] hover:text-red-600">
                Sponsor
              </a>
            </li>
            <li>
              <a href={`${routesconfig.team}`} className="text-[#000000] hover:text-red-600">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="font-serif flex flex-col justify-start items-start md:items-center">
          <h3 className="text-2xl font-semibold text-[#022E6E]">Contact</h3>
          <p className="w-full h-auto text-start md:text-center text-[#000000] mt-2 text-xl">
            R.No. FF-63, I3 Block, <br />
            RGUKT Nuzvid, <br />
            Andhra Pradesh, 521202.
          </p>
          
          

        </div>

        {/* Help Section */}

        <div className="font-serif flex flex-col justify-start items-start gap-2">
        <h4 className="text-[#022E6E] font-semibold text-2xl">Follow us on</h4>
        <div className="flex justify-center md:justify-start space-x-6 mt-2">
        
            <a href="https://whatsapp.com/channel/0029Vb2XSpF0lwgjjkvGOk1C" className="text-black hover:text-[#022E6E]-400">
              <MessageCircleCode className='h-6 w-6 '/>{/* Facebook */}
            </a>
            <a href="https://x.com/CYGNUS_2K25" className="text-black hover:text-black-400">
              <FaXTwitter className="h-6 w-6 text-balck" />{/* Twitter */}
            </a>
            <a href="https://www.instagram.com/cygnus_2k25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-black hover:text-pink-600">
              <Instagram className="h-6 w-6"/>{/* Instagram */}
            </a>
            <a href="https://www.linkedin.com/company/cygnus2k25/" className="text-black hover:text-blue-800">
              <Linkedin className="h-6 w-6"/> {/* LinkedIn */}
            </a>
            <a href="https://www.youtube.com/@rgukt_studentmitra" className="text-black hover:text-blue-800">
              <Youtube className="h-6 w-6"/> {/* LinkedIn */}
            </a>
        </div>

        </div>
        
      </div>

      {/* Designed By and Developed By Section */}
      <div className="border-t border-[#000000] "></div>
      <div className=" text-[#000000] text-sm py-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
         <img src={design} alt="" className="h-[20px]"/>

         <div className="mt-2 md:mt-0 text-xs h-[20px] font-serif-400">
  Developed by  <span className="font-league-300 text-[#890304] text-base pl-2">Cygnus web Team</span>
</div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
