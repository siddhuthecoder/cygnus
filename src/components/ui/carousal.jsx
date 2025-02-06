import {React} from "react";
import Slider from "react-slick";
//css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "../../utils";
export default function Carousel({data_array,children,childComp:ChildComp,className}){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "trnasparent" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "trnasparent" }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
              }
            }
          ]
        };
      
    return(
        <>
            <div className="w-auto h-auto flex flex-col justify-center items-center ">
                <div className={cn(`w-[85vw] h-auto rounded-[24px] ${data_array.length>=2?"block":" hidden"} `,className)}>
                {/* ${data_array.length>=2?"block":" sm:hidden"}  ${data_array.length>=3?"block":" md:hidden"}  ${data_array.length>=4?"block":"lg:hidden"} */}
                    <Slider {...settings}>
                        {
                            data_array.map((data_itm,i)=>{
                                return <ChildComp key={i} data={data_itm}/>;
                            })
                        }
                    </Slider>
                </div>
                <div className={cn(`w-[85vw] h-auto flex flex-row justify-start items-center gap-5 rounded-[24px] ${data_array.length>=2?"hidden":"block"}  `,className)}>
                    <ChildComp  data={data_array[0]}/>
                </div>
            </div>
        </>
    );
}

export function CarouselwithTwoItems ({data_array,children,childComp:ChildComp,className,nowOfRows}){
    const result = data_array
                  .map((_, i) => (i % nowOfRows === 0 ? data_array.slice(i, i + nowOfRows) : null)) // Get pairs
                  .filter(Boolean);

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "trnasparent" }}
          onClick={onClick}
        />
      );
    }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "trnasparent" }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      dots: false,
      infinite: true,
      swipeToSlide: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }
          }
        ]
    };
    
  return(
      <>
          <div className="w-full h-auto flex flex-row justify-center items-center ">
              <div className={cn(`w-[85vw] h-auto rounded-[24px]  ${data_array.length>nowOfRows?"block":"hidden"} `,className)}>
                  <Slider {...settings}>
                      {
                          result.map((data_itm_two,index_two)=>{
                              return(
                                <div key={index_two} className="w-auto h-auto flex flex-col justify-center items-center gap-4">
                                  {
                                    data_itm_two.map((data_itm,i)=>{
                                      return <ChildComp key={i} data={data_itm}/>;
                                    })
                                  }
                                </div>
                              );
                          })
                          
                      }
                  </Slider>
              </div>
              <div className={cn(`w-[85vw] h-auto flex flex-row justify-start items-center gap-5 rounded-[24px] ${data_array.length<=nowOfRows?"block":"hidden"} `,className)}>
                  {
                      result.map((data_itm_two,index_two)=>{
                          return(
                            <div key={index_two} className="w-auto h-full flex flex-col justify-center items-center gap-4">
                              {
                                data_itm_two.map((data_itm,i)=>{
                                  return <ChildComp key={i} data={data_itm}/>;
                                })
                              }
                            </div>
                          );
                      })
                          
                  }
                  
              </div>
          </div>
      </>
  );
}