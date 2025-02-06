import rangoli from "/images/bgrangoli.png";
import elephant from "/images/vintageelephant.png";
import elephantflip from "/images/elephantflip.png"
const ComingSoon = () => {
    return (
      <div className="relative flex items-center justify-center h-auto py-16  font-serif">
        <img className="hidden md:block absolute top-[27.5%] -right-[364px] w-[400px] h-[360px] object-contain" src={elephant} alt="elephant"/>
        <img className="hidden md:block absolute top-[27.5%] -left-[364px] w-[400px] h-[360px] object-contain" src={elephantflip} alt="elephant"/>

        <div className="text-center text-white p-8 rounded-xl">
          <div className="text-[50px] md:text-[150px] font-bold flex justify-center space-x-4 antialiased ">
            <span className="text-cy-secondary-bg">C</span>
            <span className="flex justify-center items-center">
                <img src={rangoli} alt="O" className="w-[48px] h-[48px] md:w-[125px] md:h-[125px] object-cover rounded-full animate-spin-slow" /></span>
            <span className="text-cy-secondary-bg">M</span>
            <span className="text-cy-secondary-bg">I</span>
            <span className="text-cy-secondary-bg">N</span>
            <span className="text-cy-secondary-bg">G</span>
          </div>
          <div className="text-[50px] md:text-[150px] font-bold flex justify-center space-x-4 mt-6">
            <span className="text-cy-secondary-bg">S</span>
            <span className="flex justify-center items-center">
              <img src={rangoli} alt="O" className="w-[48px] h-[48px] md:w-[125px] md:h-[125px] object-cover rounded-full animate-spin-slow" />
            </span>
            <span className="flex justify-center items-center">
              <img src={rangoli} alt="O" className="w-[48px] h-[48px] md:w-[125px] md:h-[125px] object-cover rounded-full animate-spin-slow" />
            </span>
            <span className="text-cy-secondary-bg">N</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComingSoon;
  