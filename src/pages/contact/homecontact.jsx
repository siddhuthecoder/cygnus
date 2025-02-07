import block from '/images/Union.png';
import border from '/images/border1.png';
import border2 from '/images/border2.png';
import map from '/images/map.png';
import { FaXTwitter } from "react-icons/fa6";
import {Facebook,Instagram,Linkedin,Youtube,MessageCircleCode} from 'lucide-react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa';
import Pagelayout from '../../components/layout/pagelayout';

const Homecontact = () => {
  return (
    <Pagelayout className={"min-h-full md:min-h-screen"} title="Contact Us">
      <div className="w-full h-auto flex flex-col justify-center items-center py-8 md:py-12 lg:py-16 px-6 md:px-16 lg:px-28">  

      {/* Main Content */}
      <div className=' w-full auto flex flex-cols justify-center items-center'>
      <div className=" w-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-10 font-serif ">
        {/* Left Section */}
        <div className='w-full h-auto flex flex-col justify-center items-start gap-11 md:gap-8 lg:gap-16'>
          <div className='w-full h-auto flex flex-col justify-start items-start gap-14 md:gap-8 lg:gap-16'>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-8 md:gap-6 lg:gap-8'>
              <div className="w-full h-auto flex flex-row justify-start items-start gap-4">
                <FaMapMarkerAlt className="text-[#E1CA6D] w-12 h-12  md:w-6 md:h-6 " />
                <p className='grow h-auto font-serif font-normal text-balance text-white text-base md:text-xl'>
                  Room No. FF-63, I3 Block, Rajiv Gandhi
                  University of Knowledge Technologies,
                  Nuzvid, Andhra Pradesh, 521202.
                </p>
              </div>
              <div className="w-full h-auto flex flex-row justify-start items-start gap-4">
                <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-[#E1CA6D] " />
                <p className='grow h-auto font-serif font-normal text-balance text-white text-base md:text-xl'>
                cygnus@rguktn.ac.in 
                </p>
              </div>
              <div className="w-full h-auto flex flex-row justify-start items-start gap-4">
                <FaPhoneAlt className="w-5 h-5 md:w-6 md:h-6 text-[#E1CA6D]" />
                <p className='grow h-auto font-serif font-normal text-balance text-white text-base md:text-xl'>
                +91 93917 28520 | +91 96185 67577
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex flex-col justify-center items-start  gap-4'>
              <p className="w-full h-auto font-Young font-normal text-white text-left text-base  sm:text-lg md:text-2xl">Follow us on:</p>
              <div className="w-full h-auto flex flex-row justify-start items-center gap-6">
                <a href="https://whatsapp.com/channel/0029Vb2XSpF0lwgjjkvGOk1C" className="text-[#E1CA6D] hover:text-blue">
                  <MessageCircleCode  className='h-6 w-6'/>
                </a>
                <a href="https://x.com/CYGNUS_2K25" className="text-[#E1CA6D] hover:text-blue">
                  <FaXTwitter className="h-6 w-6 " /> 
                </a>
                <a href="https://www.instagram.com/cygnus_2k25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#E1CA6D] hover:text-blue">
                  <Instagram className='h-6 w-6'/>
                </a>
                <a href="https://www.linkedin.com/company/cygnus2k25/" className="text-[#E1CA6D] hover:text-blue">
                  <Linkedin className='h-6 w-6'/>
                </a>
                <a href="https://www.youtube.com/@rgukt_studentmitra" className="text-[#E1CA6D] hover:text-blue">
                  <Youtube  className='h-6 w-6'/>
                </a>
                
              </div>

            {/* Message Section */}
            
            </div>
            
          </div>
        <div className="w-full h-auto  flex flex-row justify-start items-center gap-4">
            <input
              type="text"
              placeholder="Leave a Message"
              className="w-3/4 px-4 py-2 rounded-lg focus:outline-none bg-white"
            />
            <button className="bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] text-white px-6 py-2 w-[120px] rounded-sm hover:bg-[#d9b55b]">
              Send
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden lg:flex w-full h-auto flex-col justify-center items-center">
          <div> <img src={border} alt="" /></div>
          <div className="w-auto h-full  rounded-md">
              <iframe
                  className='sm:w-[360px] sm:h-[280px] md:w-[540px] md:h-[440px] rounded-lg'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.8004507121705!2d80.81784986687269!3d16.791002772264342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e53fa3b4fb%3A0xfd1e193c90e4643!2sRajiv%20Gandhi%20University%20of%20Knowledge%20and%20Technology%20%2C%20Nuzvid!5e0!3m2!1sen!2sin!4v1738920738074!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  
                ></iframe>
          </div>
          <div>
            <img src={border2} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
    </Pagelayout>
  );
};

export default Homecontact;
