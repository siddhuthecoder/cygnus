import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import map from '/images/map.png';
import price from '/images/prize.png';
import BorderBg from "../../components/ui/borderbg";
import eventimage from '/images/eventimage.png';
import eventdivider from '/images/eventdivider.png';
import { useNavigate,useLocation } from "react-router-dom";
import routesconfig from "../../configs/routesconfig";

const SportEvent = () => {
  const [isOverviewVisible, setOverviewVisible] = useState(false);
  const [isKhoKhoVisible, setKhoKhoVisible] = useState(false);
  const [isVolleyballVisible, setVolleyballVisible] = useState(false);
  const [isFootballVisible, setFootballVisible] = useState(false);
  const [isCricketVisible, setCricketVisible] = useState(false);
  const [isKabaddiVisible, setKabaddiVisible] = useState(false);
  const [isThrowballVisible, setThrowballVisible] = useState(false);
  const [isStructureVisible, setStructureVisible] = useState(false);
  const [isTimelineVisible, setTimelineVisible] = useState(false);
  const [isRulesVisible, setRulesVisible] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleIcon = (isVisible) =>
    isVisible ? faCaretUp : faCaretDown;
     // Timer states
    // Countdown Timer States
    const [timeLeft, setTimeLeft] = useState("");

    // Event Date (change it to your event date and time)
    const eventDate = new Date("January 31, 2025 17:00:00").getTime();
  
    // Function to calculate remaining time in hours, minutes, and seconds
    const calculateTimeLeft = (eventDate) => {
      const now = new Date().getTime();
      const distance = eventDate - now;
  
      if (distance <= 0) {
        return "Event Started";
      } else {
        const totalHours = Math.floor(distance / (1000 * 60 * 60)); // Total hours
        const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000); // Remaining seconds
  
        return `${totalHours}h : ${remainingMinutes}m : ${remainingSeconds}s`;
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
    <div className="w-full h-auto px-8 sm:px-6 md:px-12 lg:px-20 pt-9 pb-16 text-white font-serif">
      {/* Header Section */}
      {/* Main Content */}
      <div className="w-full h-full flex flex-col lg:flex-row  gap-16">
        {/* Left Section: Image & Countdown */}
        <div className="w-full lg:w-1/4 h-auto flex flex-col items-center ">
          <div className="w-[278px] lg:w-full h-[378px] md:h-[480px]">
            <div className=" relative w-full h-full flex flex-col justify-center items-center p-10">
                <img className="w-full h-full  z-40" src={"https://res.cloudinary.com/db552uxtr/image/upload/v1740319487/up_n468tf.webp"} alt={"eventimage"}/>
                <div className="absolute inset-0 flex flex-col justify-end items-start gap-[2px] event-border-two overflow-hidden z-50">
                   
                </div>
            </div>
          </div>
          
        </div>
        {/* Right Section: Details */}
        <div className="flex-1 space-y-2">
            {/* Overview */}
            <div className="w-full h-auto flex flex-col md:flex-row justify-start items-center gap-4 lg:gap-[200px]">
              <div>
              <h1 className="text-xl md:text-2xl text-center md:text-start font-normal md:font-bold text-[#E1CA6D] mb-2 ">
              CYGNUS '25 DPL
              </h1>
              <h2 className="text-base md:text-xl text-center md:text-start font-semibold font-serif mb-4">Play,Compete,Conquer!</h2>
              </div>
              
            </div>
            {/* Prize Section */}
            <div className="relative w-full h-auto py-3 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
              <img src={price} alt="princingimage" className=" hidden md:w-full h-28 md:h-auto max-w-full object-contain" />
          
            </div>
       
            <div className="space-y-4">
  {/* Collapsible Section */}
  <div
    className="cursor-pointer"
    onClick={() => setOverviewVisible(!isOverviewVisible)}
  >
    <div className="flex justify-between items-center">
    <h3 className="text-xl font-bold text-[#E1CA6D]" >Badminton</h3>
      <FontAwesomeIcon
        icon={toggleIcon(isOverviewVisible)}
        className="w-5 h-5 text-[#E1CA6D]"
      />
    </div>
  </div>

  {/* Content that expands/collapses */}
  {isOverviewVisible && (
    <div className="space-y-4">
      {/* Overview Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Smash the game, rule the court</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Unleash the power of your racket and own the court. Come on over for a high voltage tournament with electrifying players. A real battle and a perfect competition, where speed and skill collide to crown the champion. 
Hit hard, play smart and conquer the court!

        </p>
      </div>

      {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
        SAC shuttle cour
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
    </div>
  )}
</div>

            <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>




            <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setKhoKhoVisible(!isKhoKhoVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Kho Kho</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isKhoKhoVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isKhoKhoVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              Runners fly and chasers sprint!
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              Clash in the ultimate Kho Kho showdown. Are you a chaser or a
              runner? A high-voltage game awaits your reflexes, where speed and
              strategy decide the win. Feel the thrill, tag the crown, and own
              the sport. Don’t just watch - be part of the action!
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
          {"Faculty ground (beside P3 block)"}
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>
      <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
      {/* Volleyball Section */}
      <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setVolleyballVisible(!isVolleyballVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Volleyball</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isVolleyballVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isVolleyballVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              Rise, strike, spark
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              The court is set. Spike, dive, and serve your way to victory,
              where teamwork decides the top and strategy earns the win. Push
              your limits, rise above the rest, and secure the place. The action
              starts now - step onto the volleyball field and mark your moment.
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
          {"Faculty ground (beside P3 block)"}
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>
      <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
      {/* Football Section */}
      <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setFootballVisible(!isFootballVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Football</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isFootballVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isFootballVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              Chase the Goal, Seize the glory.
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              It's goal time – a ball, a goal, and a victory. A battle between
              teams, with the ball at their feet. A fight with every kick and a
              quest to grab the win. Let the field echo with triumph. The final
              whistle seals the victory and the hearts roar with pride.
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
        K2 ground 
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>
      <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>

 
      {/* Cricket Section */}
      <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setCricketVisible(!isCricketVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Cricket</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isCricketVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isCricketVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              From pitch to peak, hold the line
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              The battle begins, with the roar of the crowd and the crack of the
              bat! Its viewers are not just spectators, but the silent
              commanders. The pitch is the grand arena and every shot is a
              strike. Step in and be part of this legendary fight.
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
        K2 ground 
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>
      <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
      {/* Kabaddi Section */}
      <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setKabaddiVisible(!isKabaddiVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Kabaddi</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isKabaddiVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isKabaddiVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              Embrace the champion within!
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              The field is set, waiting for your grace. Feel the energy of the
              mighty earth and lead the game. Every breath you take fuels your
              strength, every step you make shakes the ground. One move, one
              moment to shift the battle. The league of Kabaddi, where power
              meets speed.
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
          {"Faculty ground (beside P3 block)"}
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>
      <img className="w-full object-contain " src={eventdivider} alt={"eventdivider"}/>
      {/* Throwball Section */}
      <div className="space-y-4">
        <div
          className="cursor-pointer"
          onClick={() => setThrowballVisible(!isThrowballVisible)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#E1CA6D]">Throwball</h3>
            <FontAwesomeIcon
              icon={toggleIcon(isThrowballVisible)}
              className="w-5 h-5 text-[#E1CA6D]"
            />
          </div>
        </div>

        {isThrowballVisible && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#E1CA6D]">
              Let your throw be the smash
            </h3>
            <p className="mt-2 font-semibold text-base text-white">
              Strengthen your palms and tighten your grip! Gear yourself up to
              dominate the throwball court. Catch the ball with grace, push it
              with power and send it flying with unstoppable force. The game is
              on - will you make it to the top?
            </p>
              {/* Venue Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Venue</h3>
        <p className="mt-2 font-semibold text-base text-white">
          {"Faculty ground (beside P3 block)"}
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-[#E1CA6D]">Contact</h3>
        <p className="mt-2 font-semibold text-base text-white">
        Phone : +91 9704696008<br />
  
        </p>
      </div>
          </div>
        )}
      </div>

      {/* Other Sports (Badminton, Kho Kho, Volleyball, Football) */}
      {/* You can keep your previous events' code here */}

     
 
           
     
           
         
 
            
        </div>
      </div>
    </div>
  );
};

export default SportEvent;