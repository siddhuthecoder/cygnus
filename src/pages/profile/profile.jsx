import React, {useEffect,useState} from "react";
import "../../components/css/style.css";
import ResTitlePagelayout from "../../components/layout/restitelpagecomp";
import MainLayout from "../../components/layout/MainLayout";
import BorderBg from "../../components/ui/borderbg";
import bottombg from "/images/bottompattern.png";
import EventTimer from "../../pages/events/eventTimer";
import Eventcard from "../../components/ui/eventcard";
import Carousel from "../../components/ui/carousal";
import { CarouselProfileEventCard } from "../../components/ui/carouselitm";
import { useLocation, useNavigate } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";
import axiosInstance from "../../api/axiosInstance";
import EventCardSkeleton from "../../components/ui/eventcardskeleton";

const ProfilePage = () => {
  const [name,setName]=useState("");
  const [collegeId,setCollegeId]=useState("");
  const [cygnusId,setCygnusId]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [revents,setREvents]=useState([]);
  const [loading,setLoading] = useState(true);
  const [userLoading,setUserLoading] = useState(true);


  const navigate = useNavigate();
  const location = useLocation(); 
  useEffect(()=>{
      window.scrollTo(0,0);
  });

  const handleLogout = () => {
    localStorage.removeItem("cygnusId");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("collegId");
    navigate('/login'); 
};

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); 
      if (!token) {
        navigate("/login");   
        return;
      }

      try {
        const response = await axiosInstance.get("/api/users/userdetails", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setName(response.data.userdetails.name);
        setCollegeId(response.data.userdetails.collegeId);
        setCygnusId(response.data.userdetails.cygnusId);
        setPhone(response.data.userdetails.phone);
        setEmail(response.data.userdetails.email);
      } catch (error) {
        if(error.status==403){
          localStorage.removeItem("cygnusId");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("collegId");
            navigate('/login');
        }
        console.error("Error fetching user details:", error.status);
      }
      setLoading(false);
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); 
      console.log(token)
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response1 = await axiosInstance.get("/api/events/userevents/", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
       
        setREvents(response1.data.registered);
        
        console.log(response1.data.registered[0].timeline_venue[0].date);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
      setUserLoading(false);
    };

    fetchUserDetails();
    console.log("Registered",revents)
  }, []);

  return (
    <div id='CygnusTeam' className='w-full h-auto flex flex-col justify-start items-center gap-0 bg-[#890304] bg-authbg bg-contain bg-repeat'>
    <MainLayout>
    <div className="w-full h-auto flex flex-col justify-start items-center gap-0 font-serif">
    <BorderBg className={"h-24 relative bg-cover md:bg-contain -top-1 bg-profileborder z-50 "} />
        <ResTitlePagelayout widthtitle={"w-[200px] md:w-[320px]"} childenclass={"grow-0"} className={"min-h-full"} title={"My Details"} posTiltle={"pt-4"} >
            <div className="w-full h-auto px-6 sm:px-14 md:px-24 lg:px-40 py-6 md:py-16 flex flex-col justify-start items-center">
              <div className="w-full flex flex-col  gap-4 px-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                      <p className="font-semibold text-[19px] text-white">Name:</p>
                      <div className={`${userLoading?"block":"hidden"} rounded-md bg-[#ab5a5a] pskeleton`}></div>
                      <p className={`${userLoading?"hidden":"block"} text-[24px] text-[#E1CA6D]`}>{name}</p>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                      <p className="font-semibold text-[19px] text-white">ID Number:</p>
                      <div className={`${userLoading?"block":"hidden"} w-[260px] h-8 rounded bg-[#ab5a5a] pskeleton`}></div>
                      <p className={`${userLoading?"hidden":"block"} text-[24px] text-[#E1CA6D]`}>{collegeId}</p>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                      <p className="font-semibold text-[19px] text-white">Cygnus ID:</p>
                      <div className={`${userLoading?"block":"hidden"} w-[260px] h-8 rounded bg-[#ab5a5a] pskeleton`}></div>
                      <p className={`${userLoading?"hidden":"block"} text-[24px] text-[#E1CA6D]`}>{cygnusId}</p>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                      <p className="font-semibold text-[19px] text-white">Contact Number:</p>
                      <div className={`${userLoading?"block":"hidden"} w-[260px] h-8 rounded bg-[#ab5a5a] pskeleton`}></div>
                      <p className={`${userLoading?"hidden":"block"} text-[24px] text-[#E1CA6D]`}>{phone}</p>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                      <p className="font-semibold text-[19px] text-white">Email Address:</p>
                      <div className={`${userLoading?"block":"hidden"} w-[260px] h-8 rounded bg-[#ab5a5a] pskeleton`}></div>
                      <p className={`${userLoading?"hidden":"block"} text-[24px] text-[#E1CA6D]`}>{email}</p>
                    </div>
                  </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-10">
                <button className="mt-4 border-2 border-white text-white rounded-lg hover:bg-yellow-700 text-base bg-[#890304] font-serif">
                    Changing any details please contact +91 7075883859
                </button>
                <button  onClick={handleLogout} className="w-auto h-auto px-8 py-3 rounded-lg font-serif font-semibold text-center bg-[#FBF6E0] text-[#012D6E] text-lg" >
                    LogOut
                </button>
          </div>
             </div>
        
            </div>
        </ResTitlePagelayout>
        <img className="w-full bg-cover" src={bottombg}/>
        <ResTitlePagelayout widthtitle={"w-[200px] md:w-[320px]"} className={"h-auto "} title={"My Events"} posTiltle={"pt-4"} >
          
        <div className={`${loading?"flex":"hidden"} w-full h-auto flex-row flex-wrap justify-center items-center gap-16 px-16 py-16`}>
            <div className="w-full h-auto hidden md:flex flex-row flex-wrap justify-center items-center gap-16">
              <EventCardSkeleton/>
              <EventCardSkeleton/>
              <EventCardSkeleton/>
            </div>
             <div className="w-full h-auto flex md:hidden flex-row flex-wrap justify-center items-center gap-16">
               <EventCardSkeleton/>
             </div>
        </div>
        <div className={`${loading?"hidden":"block"} w-full h-auto flex flex-col justify-center items-center `}>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[120px] gap-y-[60px] pt-24 pb-10">
                {revents.length>0? revents.map((event, index) => (
                    <div key={event._id} className="h-auto w-full flex flex-col gap-6">
                      <Eventcard 
                        event={event} 
                        onClick={() => navigate(`${routesconfig.events}/${event._id}`, { state: { from: location } })}
                      />
                      <EventTimer EventTimer={event.timeline_venue[0].date}/>
                    </div>
                )):
                <div className="col-span-1 md:col-span-2 lg:col-span-3 h-auto flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 lg:px-40 py-8 md:py-16 gap-8">
                  <p className="w-full h-auto text-2xl md:text-5xl font-Young font-bold text-cy-secondary-bg ">No Events Found</p>
                  <button onClick={()=>{navigate(`${routesconfig.events}`)}} className="block w-auto h-auto px-8 py-3 rounded-lg bg-transparent border-cy-secondary-bg border-[2px] font-Young font-medium text-lg text-center text-cy-secondary-bg hover:border-cygnus-white hover:text-cygnus-white">Register</button>
                </div>
              }
            </div>
            {revents.length>0?
            <div className="flex md:hidden w-full h-auto  flex-col justify-center items-center">
                <Carousel data_array={revents} childComp={CarouselProfileEventCard} />
            </div>:
            <div className="flex md:hidden w-full h-auto  flex-col justify-center items-center px-6 sm:px-12 md:px-24 lg:px-40 py-8 md:py-16 gap-8">
              <p className="w-full h-auto text-center text-2xl md:text-5xl font-Young font-bold text-cy-secondary-bg ">No Events Found</p>
              <button onClick={()=>{navigate(`${routesconfig.events}`)}} className="block w-auto h-auto px-8 py-3 rounded-lg bg-transparent border-cy-secondary-bg border-[2px] font-Young font-medium text-lg text-center text-cy-secondary-bg hover:border-cygnus-white hover:text-cygnus-white">Register</button>
            </div>
            }
        </div>
      

            
        </ResTitlePagelayout>
        <img className="w-full bg-cover hidden md:block" src={bottombg}/>
        <BorderBg className={" block md:hidden h-9 bg-cover bg-bottom-border-bg"}/>
     
    </div>
    </MainLayout>
    </div>
  );
};

export default ProfilePage; 