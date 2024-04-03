import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const MainHero = () => {
  return (
    <section className="py-8  w-full z-0">
      <div className="flex flex-col md:flex-row w-full h-[100vh] lg:h-[80vh] gap-2  ">
        <div className="flex-1 w-full h-full  row-span-4 relative">
          <div className="h-full w-full bg-cover rounded-lg shadow-md relative">
            <div
              className="h-full w-full bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/random/1280x720')",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
            ></div>
            
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            
            <div className="flex flex-col   absolute inset-0 md:top-[20%] md:w-[90%] h-[100%] text-white px-6">
              <h1 className="md:text-3xl font-bold">
                Good Collection of All Bank Notes
              </h1>
              <div className="mt-4 flex flex-col border-l-[0.5px] md:border-l-2 pl-4 gap-2 border-lime-300 ">
                <h2 className="text-[14px] md:text-[16px]">
                  Sale up to
                  <span className="bg-orange-500 text-[14px] md:text-[16px] px-1 md:px-2 md:py-1 ml-2 rounded">
                    30% OFF
                  </span>
                </h2>
                <h5 className="text-[12px] md:text-[14px] text-gray-300">Free shipping on all your order.</h5>
              </div>
              <div className="md:mt-2 mt-1 ">
                <button className="px-6 md:py-1 py-0 bg-white text-[14px] md:text-[16px] text-blue-500 rounded-full flex items-center justify-between gap-3">Shop Now
               
                 <ArrowForwardOutlinedIcon />
                 </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-full md:grid grid-rows-4 gap-2">
            
          <div className="h-full w-full bg-cover rounded-lg shadow-md relative mb-2 md:mb-0 row-span-2">
            <div
              className="h-full w-full bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/random/1280x720')",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
            ></div>
            
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            
            <div className="flex flex-col   absolute inset-0 sm:top-[20%] w-[80%] text-white px-6">
              <h1 className="text-3xl font-bold">
              Summer Sale
              </h1>
              <h1>75% OFF</h1>
              <h1>Only Fruit & Vegetable</h1>
              <div className="md:mt-2 mt-1 ">
                <button className="  text-[14px] md:text-[16px]  rounded-full flex items-center justify-between gap-3">Shop Now
               
                 <ArrowForwardOutlinedIcon className='text-green-600 mt-[2px]'/>
                 </button>
              </div>
            </div>
          </div>

          
            <div className="h-full w-full row-span-2 bg-cover rounded shadow-md relative">
              <div
                className="h-full w-full bg-cover rounded"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/random/1280x720')",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                }}
              ></div>
              
              <div className="absolute inset-0 bg-black opacity-50"></div>
              
              <div className="flex flex-col justify-center items-center absolute inset-0 text-center text-white px-6">
                <h1 className="text-3xl font-bold">
                  Good Collection of All Bank Notes
                </h1>
                <div className="mt-4">
                  <h2 className="text-lg">
                    Sale up to
                    <span className="bg-orange-500 px-2 py-1 rounded">
                      30% OFF
                    </span>
                  </h2>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </section>
  );
};

export default MainHero;
