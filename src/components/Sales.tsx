import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Sales = () => {
  return (
    <div className='container__style  my-5'>

        <div className='flex w-[100%] items-center '>
        <div className=' grid grid-cols-1 justify-content-center w-[100%] md:grid-cols-3 gap-4'>
        <div style={{
                backgroundImage:
                  "url('/images/img1.png')",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }} className='h-[350px] rounded-lg text-white'>
            <div className='flex flex-col justify-center items-center h-full object-cover gap-4'>
                <h1 className='uppercase text-[14px]'>Best Deals</h1>
                <h1 className='text-[26px] font-bold'>Sale of the Month</h1>
                <div className='flex gap-4'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col '>
                            <h1>00</h1>
                            <p className='text-[rgb(202,202,202)] text-[12px]'>DAYS</p>
                        </div>
                        <p className='text-[rgb(202,202,202)] '>:</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col '>
                            <h1>02</h1>
                            <p className='text-[rgb(202,202,202)] text-[12px]'>HOURS</p>
                        </div>
                        <p className='text-[rgb(202,202,202)] '>:</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col '>
                            <h1>18</h1>
                            <p className='text-[rgb(202,202,202)] text-[12px]'>MINS</p>
                        </div>
                        <p className='text-[rgb(202,202,202)] '>:</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col '>
                            <h1>46</h1>
                            <p className='text-[rgb(202,202,202)] text-[12px]'>SECS</p>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-full">
                <button className=" text-[14px] md:text-[16px]  rounded-full flex items-center justify-between gap-3 text-green-600 px-4 py-1">Shop Now
               
                 <ArrowForwardOutlinedIcon className='text-green-600 mt-[2px]'/>
                 </button>
              </div>
            </div>
        </div>
        <div style={{
                backgroundImage:
                  "url('/images/img2.png')",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }} className='h-[350px] rounded-lg text-white'>
            <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col justify-center items-center h-full object-cover gap-4'>
                <h1 className='uppercase text-[14px]'>Best Deals</h1>
                <h1 className='text-[26px] font-bold'>Indian Rupee</h1>
                <h2 className="text-[14px] md:text-[16px]">
                  Sale up to
                  <span className="bg-orange-500 text-[14px] md:text-[16px] px-1 md:px-2 md:py-1 ml-2 rounded">
                    30% OFF
                  </span>
                </h2>
                <div className="bg-white rounded-full">
                <button className=" text-[14px] md:text-[16px]  rounded-full flex items-center justify-between gap-3 text-green-600 px-4 py-1">Shop Now
               
                 <ArrowForwardOutlinedIcon className='text-green-600 mt-[2px]'/>
                 </button>
              </div>
            </div>
            </div>
        </div>
        <div style={{
                backgroundImage:
                  "url('/images/img3.png')",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }} className='h-[350px] rounded-lg text-white'>
            <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col justify-center items-center h-full object-cover gap-4'>
                <h1 className='uppercase text-[14px]'>Summer Sale</h1>
                <h1 className='text-[26px] font-bold'>British Pound </h1>
                <h2 className="text-[14px] md:text-[16px]">
                Up to
                  <span className="bg-[#1A1A1A] text-[14px] md:text-[16px] text-[#FCC900] px-1 md:px-2 md:py-1 ml-2 rounded">
                  64% OFF
                  </span>
                </h2>
                <div className="bg-white rounded-full">
                <button className=" text-[14px] md:text-[16px]  rounded-full flex items-center justify-between gap-3 text-green-600 px-4 py-1">Shop Now
               
                 <ArrowForwardOutlinedIcon className='text-green-600 mt-[2px]'/>
                 </button>
              </div>
            </div>
            </div>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Sales