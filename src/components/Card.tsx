import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PopularCategory {
    items:{name: string;
    image: string;
    }[] }
function Card({ items}:PopularCategory) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
     <Slider {...settings} className="text-black  ">
      {items.map((image, index) => (
        
        <div
        key={index}
        className="bg-white h-[280px] w-[200px]  text-black rounded-xl flex flex-col border__style px-4 py-3"
      >
          <div className="rounded-t-xl h-40 ">
          <img
            className="h-[100%] w-[100%] object-contain"
            src={image.image}
            alt={image.name}
          />
        </div>
        <div className="py-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
            {image.name}
          </div>
          
        </div>
      </div>
    
        
      ))}
      </Slider>
    </>   
  );
}


export default Card;
