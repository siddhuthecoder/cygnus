import React, { useState ,useEffect} from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../utils";
const EventTimer = ({EventTimer,headingtext="Event Starts In:",headingclass,timerclass}) => {
  
   
  const toggleIcon = (isVisible) =>
    isVisible ? faCaretUp : faCaretDown;
     // Timer states
    // Countdown Timer States
    const [timeLeft, setTimeLeft] = useState("");

    function convertDate(inputDate) {
      const date = new Date(inputDate);
    
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
    
      return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    }
  
    // Event Date (change it to your event date and time)
    const convertedDate=convertDate(EventTimer)
    
    const eventDate = new Date(convertedDate).getTime();
  
    // Function to calculate remaining time in hours, minutes, and seconds
    const calculateTimeLeft = (eventDate) => {
      const now = new Date().getTime();
      const distance = eventDate - now;
  
      if (distance <= 0) {
          return "Event Started";
      } else {
          // Calculate days, hours, minutes, and seconds
          const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24)); // Total days
          const totalHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
          const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
          const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000); // Remaining seconds
  
          return `${Number.isNaN(totalDays)?0:totalDays}d : ${Number.isNaN(totalHours)?0:totalHours}h : ${Number.isNaN(remainingMinutes)?0:remainingMinutes}m : ${Number.isNaN(remainingSeconds)?0:remainingSeconds}s`;
      }
  };
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        const time = calculateTimeLeft(eventDate);
        setTimeLeft(time);
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [eventDate]);


  return (
          <div className=" text-white mt-4 p-2 text-center rounded-lg">
            <h3 className={cn("text-base md:text-xl font-bold",headingclass)}>{headingtext}</h3>
            <p className={cn("text-base md:text-xl font-bold",timerclass)}>{timeLeft}</p>
          </div>
     
      
  );
};

export default EventTimer;
