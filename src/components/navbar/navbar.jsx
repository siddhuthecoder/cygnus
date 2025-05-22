import image from '/images/underline_image.png';
import image1 from  '/images/cygnus_logo.png'; // Path to your image
import { cn,navgationCheck } from '../../utils';
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import  routesconfig  from '@/configs/routesconfig';
const Navbar = ({className}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen,setMenuOpen] = useState(false);
  const [active,setActive] = useState("Home");
   const NavMenuItems = [
      {
       name: "Home",
       link : routesconfig.home
      },
      {
        name: "About",
        link : routesconfig.about
       },
      {
       name: "Winners",
       link : routesconfig.winners
      },
      {
        name: "Team",
        link : routesconfig.team
       },
      {
       name: "Sponsors",
       link : routesconfig.sponsors
      },
   ]

  const userName = localStorage.getItem("name");
  const collegeId = localStorage.getItem("collegId");
  const token = localStorage.getItem("token");

  return (
    <div className={cn("w-screen h-auto fixed top-0 left-0 z-[100]  bg-[#E1CA6D] lg:px-10 lg:py-4 border-b border-[#890304]",className)}>
      <div className="w-full h-full flex flex-row justify-between lg:justify-between items-center px-4 sm:px-6 md:px-10 lg:px-0 py-4 lg:py-0">
        <NavBarcontainer id={"Brand"} className={`w-auto px-2`} >
          <div className="w-auto h-full flex flex-row justify-ceneter items-center gap-2">
            <div onClick={()=>{setMenuOpen(!menuOpen);}} className='block lg:hidden w-auto h-auto p-1'>
              <svg className={`${menuOpen?"hidden":"block stroke-cy-primary-text"}`} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24.4678V21.8011H28V24.4678H4ZM4 17.8011V15.1344H28V17.8011H4ZM4 11.1344V8.46777H28V11.1344H4Z" fill="#1D1B20"/>
              </svg>
              <svg className={`${menuOpen?"block fill-cy-primary-text ":"hidden"}`}  width="32" height="33" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </div>
            <img onClick={()=>{navigate(routesconfig.home ,{state:{from:location}})}} src={image1} alt="logo" className="object-contain" />
            <div className='hidden md:flex w-auto h-full  flex-col justify-center items-center gap-0'>
              <p className="w-full h-auto text-start text-4xl/[36px] text-[#012D6E] font-bold font-league tracking-wider">CYGNUS</p>
              <p className="w-full h-auto  text-sm/[12px] text-[#890304] font-league font-semibold">THE LEGACY CONTINUES</p>
            </div>
          </div>
        </NavBarcontainer>

        {/* Center Menu */}

        <NavBarcontainer id={"NavBarMenu"} className={"hidden lg:flex w-auto h-full flex-col lg:flex-row justify-center items-center"}>
            {
              NavMenuItems.map((navitem,index)=>{
                return(
                  <NavBarItem key={index} onClick={()=>navigate(navitem.link,{state:{from:{location}}})} className={`w-auto h-full flex flex-col justify-center items-center gap-1 px-2 py-1 `} >
                      
                        <div onClick={()=>{
                          setActive(navitem.name);
                          
                          }} data-content={navitem.name} className={`group relative w-28  h-auto flex flex-col justify-center items-center hover:cursor-pointer overflow-hidden ${navgationCheck(location.pathname,navitem.link)?"pointer-events-none":"pointer-events-auto"}  navitem`}>
                              <span className={`inline-block font-serif ${navgationCheck(location.pathname,navitem.link)?"font-bold text-xl/[24px] text-[#890304]":"font-normal text-lg/[20px] text-[#012D6E]"}  translate-y-0 group-hover:-translate-y-6 group-hover:transition group-hover:duration-300 group-hover:ease-in-out `}>
                                  {navitem.name}
                              </span>
                        </div>
                      
                      <div className={` ${navgationCheck(location.pathname,navitem.link)?"flex":"hidden"} w-full h-auto flex-col justify-center items-center`}>
                          <img className='h-[10px]' src={image} alt={"navselectimg"} />
                      </div>
                  </NavBarItem>
                );
              })
            }
        </NavBarcontainer>

        {/* Register Button */}
        <NavBarcontainer id={"NavBarTail"} className={`w-auto gap-4`}>
          <div className='w-auto h-full flex flex-col justify-center items-center '>
          {
            token  ?
            <button onClick={()=>navigate("/profile",{state:{from:location}})} className="w-auto h-auto px-6 py-2 flex flex-col justify-center items-center gap-1 rounded-md outline-none font-semibold font-serif text-base text-white hover:bg-gray-200 transition-colors duration-200 bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] ">
           <p className='w-auto h-auto font-serif font-semibold text-sm/[14px]  text-cygus-white'>{userName}</p>
           <p className='w-auto h-auto font-serif font-semibold text-xs/[12px]  text-cygus-white'>{collegeId}</p>
            </button>:
            <button onClick={()=>navigate("/login",{state:{from:location}})} className="w-auto h-auto px-6 py-2 rounded-md outline-none font-semibold font-serif text-base text-white hover:bg-gray-200 transition-colors duration-200 bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263] ">
            <span className='px-2'>Register</span><span className='text-base'>/</span><sapn className="px-2">Login</sapn>
          </button>
          }
          </div>
         
        </NavBarcontainer>
        
      </div>
      <NavBarcontainer id={"NavBarMenu"} className={` w-full h-auto ${menuOpen?"flex lg:hidden":"hidden"}   flex-col justify-center items-center gap-5 py-5 border-t border-[#012E6E]`}>
            {
              NavMenuItems.map((navitem,index)=>{
                return(
                  <NavBarItem key={index} onClick={()=>{
                        navigate(navitem.link,{state:{from:{location}}});
                        setMenuOpen(false);
                    }} className={`w-full h-full flex flex-col justify-center items-center gap-1 px-2 py-1 `} >
                      {/* <a className='block w-full h-full' href={navitem.link}> */}
                        <div onClick={()=>{
                          setActive(navitem.name);
                          
                          }} data-content={navitem.name} className={`group relative w-28  h-auto flex flex-col justify-center items-center hover:cursor-pointer overflow-hidden ${navgationCheck(location.pathname,navitem.link)?"pointer-events-none":"pointer-events-auto"}`}>
                              <span className={`inline-block font-serif ${navgationCheck(location.pathname,navitem.link)?"font-bold text-xl/[24px] text-[#890304]":"font-normal text-lg/[20px] text-[#012D6E]"}  translate-y-0 group-hover:-translate-y-6 group-hover:transition group-hover:duration-300 group-hover:ease-in-out `}>
                                  {navitem.name}
                              </span>
                        </div>
                      {/* </a> */}
                      <div className={` ${navgationCheck(location.pathname,navitem.link)?"flex":"hidden"} w-full h-auto flex-col justify-center items-center`}>
                          <img className='h-[10px]' src={image} alt={"navselectimg"} />
                      </div>
                  </NavBarItem>
                );
              })
            }
      </NavBarcontainer>
    </div>
  );
};

const NavBarcontainer = ({className,children,...props})=>{
  return(
      <div {...props} className={cn("w-auto h-full flex flex-row justify-center items-center",className)}>
          {children}
      </div>
  );
}

const NavBarItem = ({className,children,...props})=>{
    return (
        <div {...props} className={cn("w-auto h-auto flex flex-col justify-start items-center",className)}>
            {children}
        </div>
    );
}

export default Navbar;
