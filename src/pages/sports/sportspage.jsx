// import React, { useState ,useEffect} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import map from '/images/map.png';
// import price from '/images/prize.png';
// import BorderBg from "../../components/ui/borderbg";
// import eventimage from '/images/eventimage.png';
// import eventdivider from '/images/eventdivider.png';
// import { useNavigate,useLocation,useParams } from "react-router-dom";
// import routesconfig from "../../configs/routesconfig";
// import axiosInstance from "../../api/axiosInstance";

// const Event = () => {
//   const [isOverviewVisible, setOverviewVisible] = useState(false);
//   const [isStructureVisible, setStructureVisible] = useState(false);
//   const [isTimelineVisible, setTimelineVisible] = useState(false);
//   const [isRulesVisible, setRulesVisible] = useState(false);
//   const [isContactVisible, setContactVisible] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   let { eventId } = useParams();
//   const [eventname,setEventname]=useState();
//   const [tagline,setTagline]=useState();
//   const [prizeMoney, setPrizeMoney] = useState(0);
//   const [teammates, setTeammates] = useState(0);
//   const [noOfRounds, setNoOfRounds] = useState(0);
//   const [overview, setOverview] = useState("");
//   const [rounds, setRounds] = useState([]);
//   const [timelineVenue, setTimelineVenue] = useState([]);
//   const [rules, setRules] = useState([]);
//   const [contactDetails, setContactDetails] = useState([]);
//   const [imageUrl,setImagUrl]=useState("");
//   const [eventstart,setEventstart]=useState();


//   function formatDate(inputDate) {
//     const date = new Date(inputDate);
  
//     const months = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
  
//     const month = months[date.getMonth()];
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
  
//     return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
//   }


//   const toggleIcon = (isVisible) =>
//     isVisible ? faCaretUp : faCaretDown;
//      // Timer states
//     // Countdown Timer States
//     const [timeLeft, setTimeLeft] = useState("");

//     const updatedData=formatDate(eventstart).toString();
//     const eventDate = new Date(updatedData).getTime();
  
//     // Function to calculate remaining time in hours, minutes, and seconds
//     const calculateTimeLeft = (eventDate) => {
//       const now = new Date().getTime();
//       const distance = eventDate - now;
    
//       if (distance <= 0) {
//         return "Event Started";
//       } else {
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Total days
//         const totalHours = Math.floor(distance / (1000 * 60 * 60)); // Total hours
//         const remainingHours = totalHours % 24; // Hours after counting full days
//         const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
//         const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000); // Remaining seconds
    
//         return `${days}d : ${remainingHours}h : ${remainingMinutes}m : ${remainingSeconds}s`;
//       }
//     };
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         const time = calculateTimeLeft(eventDate);
//         setTimeLeft(time);
//       }, 1000);
  
//       return () => clearInterval(interval); // Cleanup on unmount
//     }, [eventDate]);

//     useEffect(()=>{
//       const fetchEvent=async()=>{
//           try{
//              const response=await axiosInstance.get(`/api/events/${eventId}`);
//              console.log(response.data)
//              if(response.status=200){
//                 console.log(response.data.event.timeline_venue[0].date);
//                 setEventstart(response.data.event.timeline_venue[0].date);
//                 setEventname(response.data.event?.title);
//                 setTagline(response.data.event?.tagline);
//                 setPrizeMoney(response.data.event?.prizeMoney || 0);
//                 setTeammates(response.data.event?.teammates || 0);
//                 setNoOfRounds(response.data.event?.no_of_rounds || 0);
//                 setOverview(response.data.event?.overview || "");
//                 setRounds(response.data.event?.rounds || []);
//                 setTimelineVenue(response.data.event?.timeline_venue || []);
//                 setRules(response.data.event?.rules || []);
//                 setContactDetails(response.data.event?.contactDetails || []);
//                 setImagUrl(response.data.event.imageUrl);
                
//              }else{
//                 console.log("Error while fetching particular event");
//              }
//           }catch(error){
//             console.error("Error fetching events:", error);
//           }
//       }
//       fetchEvent();
     
// },[]);


//   return (
//     <div className="w-full h-auto px-8 sm:px-6 md:px-12 lg:px-20 pt-9 pb-16 text-white font-serif">
//       {/* Header Section */}
//       {/* Main Content */}
//       <div className="w-full h-full flex flex-col lg:flex-row  gap-16">
//         {/* Left Section: Image & Countdown */}
//         <div className="w-full lg:w-1/4 h-auto flex flex-col items-center ">
//           <div className="w-[278px] lg:w-full h-[378px] md:h-[480px]">
//             <div className=" relative w-full h-full flex flex-col justify-center items-center p-10">
//                 <img className="w-full h-full  z-40" src={imageUrl} alt={"eventimage"}/>
//                 <div className="absolute inset-0 flex flex-col justify-end items-start gap-[2px] event-border-two overflow-hidden z-50">
                   
//                 </div>
//             </div>
//           </div>
//           <div className=" text-white mt-4 p-2 text-center rounded-lg">
//             <h3 className="text-xl font-bold">Event Starts In:</h3>
//             <p className="text-3xl text-[#E1CA6D] font-bold">{timeLeft} Hrs</p>
//           </div>
//         </div>
//         {/* Right Section: Details */}
//         <div className="flex-1 space-y-2">
//             {/* Overview */}
//             <div className="w-full h-auto flex flex-col md:flex-row justify-start items-center gap-4 lg:gap-[200px]">
//               <div>
//               <h1 className="text-xl md:text-2xl text-center md:text-start font-normal md:font-bold text-[#E1CA6D] mb-2 ">
//                 {eventname}
//               </h1>
//               <h2 className="text-base md:text-xl text-center md:text-start font-semibold font-serif mb-4">{tagline}</h2>
//               </div>
//               <div className="w-auto h-full flex flex-col justify-center items-center">
//                 <button onClick={()=>{navigate(`${routesconfig.events}/${eventId}/register`)}} className="bg-gradient-to-r from-[#002263] via-[#035B9B] to-[#002263]  px-6 py-2 rounded-[4px] hover:bg-blue-600 text-white font-semibold text-base h-[40px]">
//                   REGISTER NOW
//                 </button>
//               </div>
//             </div>
//             {/* Prize Section */}
//             <div className="relative w-full h-auto py-3 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
//               <img src={price} alt="princingimage" className=" hidden md:w-full h-28 md:h-auto max-w-full object-contain" />
             

//               <div className="absolute w-auto h-full py-7 hidden md:flex flex-col md:flex-row justify-start items-center md:divide-x-[3px] md:divide-cy-primary-text">
//                 <div className="w-auto h-full px-6 flex flex-row justify-center items-center gap-3">
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-normal text-cy-primary-text text-xl text-ceneter">Prize Money</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-bold text-cy-primary-text text-xl text-ceneter">-</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-serif font-bold text-cy-primary-text text-xl text-ceneter">{prizeMoney}/-</p>
//                 </div>
//                 <div className="w-auto h-full px-6 flex flex-row justify-center items-center gap-3">
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-normal text-cy-primary-text text-xl text-ceneter">Team Size</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-bold text-cy-primary-text text-xl text-ceneter">-</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-serif font-bold text-cy-primary-text text-xl text-ceneter">{teammates}</p>
//                 </div>
//                 <div className="w-auto h-full px-6 flex flex-row justify-center items-center gap-3">
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-normal text-cy-primary-text text-xl text-ceneter">No.of Rounds</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-Young font-bold text-cy-primary-text text-xl text-ceneter">-</p>
//                     <p className="w-auto h-full flex flex-row justify-center items-center font-serif font-bold text-cy-primary-text text-xl text-ceneter">{noOfRounds}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setOverviewVisible(!isOverviewVisible)}
//               >
//                 <h3 className="text-xl font-bold  text-[#E1CA6D]">Overview</h3>
//                 <FontAwesomeIcon
//                   icon={toggleIcon(isOverviewVisible)}
//                   className="w-5 h-5 text-[#E1CA6D]"
//                 />
//               </div>
//               {isOverviewVisible && (
//                 <p className="mt-2 font-semibold text-base">
//                  {overview}
//                 </p>
//               )}
//             </div>
//             <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
//             {/* Structure */}
//             <div>
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setStructureVisible(!isStructureVisible)}
//               >
//                 <h3 className="text-xl font-bold text-[#E1CA6D]" >Structure</h3>
//                 <FontAwesomeIcon
//                   icon={toggleIcon(isStructureVisible)}
//                   className="w-5 h-5 text-[#E1CA6D]"
//                 />
//               </div>
//               {isStructureVisible && (
//                 <ul className="list-disc list-inside mt-2 space-y-2 font-semibold text-base">
//                    {rounds?.map((round, index) => (
//     <li key={round._id}>
//       <span className="font-semibold">Round {round.roundNumber}:{round.title}</span> {round.description}
//     </li>
//   ))}
//                 </ul>
//               )}
//             </div>
//             <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
//             {/* Timeline */}
//             <div>
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setTimelineVisible(!isTimelineVisible)}
//               >
//                 <h3 className="text-xl font-bold text-[#E1CA6D]">Timeline & Venue</h3>
//                 <FontAwesomeIcon
//                   icon={toggleIcon(isTimelineVisible)}
//                   className="w-5 h-5 text-[#E1CA6D]"
//                 />
//               </div>
//               {isTimelineVisible && (
//                 <ul className="list-none mt-2 space-y-2 font-semibold text-base">
//                    {timelineVenue?.map((item, index) => {
//   const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   const formatTime = (time) => {
//     const hours = parseInt(time?.split(":")[0], 10);
//     const minutes = time?.split(":")[1];
//     // const period = hours >= 12 ? "PM" : "AM";
//     const formattedHours = hours % 12 || 12;
//     return `${formattedHours}:${minutes}`;
//   };

//   const startTimeFormatted = formatTime(item.startTime);
//   const endTimeFormatted = formatTime(item.endTime);

//   const timeSlot =` ${startTimeFormatted} - ${endTimeFormatted}`;

//   return (
//     <li key={index}>
//       {`Round ${item.roundNumber} - ${formattedDate}, ${timeSlot} | ${item.venue}`}
//     </li>
//   );
// })}
//                 </ul>
//               )}
//             </div>
//             <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>

//             {/* Rules */}
//             <div>
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setRulesVisible(!isRulesVisible)}
//               >
//                 <h3 className="text-xl font-bold text-[#E1CA6D]">Rules & Regulations</h3>
//                 <FontAwesomeIcon
//                   icon={toggleIcon(isRulesVisible)}
//                   className="w-5 h-5 text-[#E1CA6D]"
//                 />
//               </div>
//               {isRulesVisible && (
//                 <ol className="list-decimal list-inside mt-2 space-y-2 font-semibold text-base">
//                      {rules.map((rule, index) => (
//           <li key={index}>{rule}</li>
//         ))}
//                 </ol>
//               )}
//             </div>
//             <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>

//             {/* Contact Details */}
//             <div>
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setContactVisible(!isContactVisible)}
//               >
//                 <h3 className="text-xl font-bold text-[#E1CA6D]">Contact Details</h3>
//                 <FontAwesomeIcon
//                   icon={toggleIcon(isContactVisible)}
//                   className="w-5 h-5 text-[#E1CA6D]"
//                 />
//               </div>
//               {isContactVisible && (
//                 <div className=" text-white  rounded-lg mt-2 font-semibold text-base">
//                      {contactDetails.map((contact) => (
//         <p key={contact._id} className="mt-2">
//           <span className="font-semibold">{contact.name}:</span> {contact.phone}
//         </p>
//       ))} 
      
//                 </div>
//               )}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Event;