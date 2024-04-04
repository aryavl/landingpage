import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const SalesSection = () => {
  return (
    <div className="container__style my-5">
        <div className="salesbg px-6 w-[100%]  rounded-lg ">
        <div className="grid grid-cols-2 w-[100%] ">
            <div className="w-[200px] h-full hidden sm:block">

        <img src="/images/p1.png" alt="" className="w-full h-full"/>
            </div>
        <div className="flex flex-col gap-4 text-white w-[80%] py-6">
            <h1 className='uppercase'>Summer Sale</h1>
            <h2 className="text-[28px]">
                 
                  <span className="text-[#FF8A00] text-[28px] mr-2 ">
                    37 % 
                  </span>
                  OFF
                </h2>
                <p className="text-[#FFFFFF] text-[14px]">Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                <div className="bg-[#1B96DC] rounded-full w-[40%]">
                <button className=" text-[16px]   rounded-full flex items-center justify-between gap-3 text-white px-4 py-1">Shop Now
               
                 <ArrowForwardOutlinedIcon className='text-white mt-[2px]'/>
                 </button>
              </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SalesSection