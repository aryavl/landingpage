
// import { useEffect, useState } from "react";
// import { getPopularCategories } from "../helper/fetcher";

import { useEffect, useState } from "react";
import Card from "./Card";
import { getPopularCategories } from "../helper/fetcher";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
    interface PopularCategory {
    name: string;
    image: string;
    }

// const Popular = () => {
 
//   const [popularCategories, setPopularCategories] = useState<PopularCategory[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getPopularCategories();
//         setPopularCategories(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching popular categories data:", error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);


//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === popularCategories.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [popularCategories]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? popularCategories.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === popularCategories.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
   

//   <div className="container__style mt-10">
//     <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto relative">
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-2 bg-gray-200 text-gray-800 rounded-md z-10"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>
//       <div className="col-span-3 relative overflow-hidden">
//         {popularCategories.map((image, index) => (
//           <img
//             key={index}
//             src={image.image}
//             alt={`slide-${index}`}
//             className={`w-full absolute top-0 transition-transform duration-500 ${
//               index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           />
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-gray-200 text-gray-800 rounded-md z-10"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//     </div>
  
//   );
// };

// export default Popular;
// import React from "react";

// const ImageCard = ({ image, title, description }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
//       <div className="flex flex-col">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-48 w-full object-cover md:w-48"
//             src={image}
//             alt={title}
//           />
//         </div>
//         <div className="p-8">
//           <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//             {title}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// const ImageCardGrid = ({ images }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
//       {images.map((image, index) => (
//         <ImageCard
//           key={index}
//           image={image.url}
//           title={image.title}
//           description={image.description}
//         />
//       ))}
//     </div>
//   );
// };



function Popular() {
    const [popularCategories, setPopularCategories] = useState<PopularCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularCategories();
        setPopularCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular categories data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className="container__style flex-col">
        <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold  my-8">Popuplar Categories</h1>
<h1>View All <ArrowForwardOutlinedIcon/></h1>
      </div>
      {loading ? (<h1>Loading...</h1>):( <Card items={popularCategories} />)}
     
    </div>
  );
}

export default Popular;

