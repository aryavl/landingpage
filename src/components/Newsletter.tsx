
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Newsletter = () => {
  return (
    <div className='container__style py-8'>
        <div className='flex flex-col sm:flex-row  items-center justify-between w-full gap-6'>
            <div className="flex-1 ">
                <h1 className="font-bold">Subcribe our Newsletter</h1>
                <p className="text-[#999999] text-[14px]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className="flex-1 flex items-center gap-4">
            <div className="dflex w-full ">
          <div className="relative w-full">
           
            <input
              type="text"
              
              className="block w-full p-2  text-[0.75rem] border border-gray-300 rounded-l-xl placeholder-gray-500 focus:outline-none"
              
              placeholder="Your Email Address..."
            />
          </div>
          <button className="bg-[#1B96DC] text-white ml-[-8px] px-3 py-[7px] rounded-r-xl hover:bg-blue-400 hover:scale-105">
            Suscribe
          </button>
        </div>
        <div>
        <div className='hidden md:flex items-center gap-4 text-white'>
                        <button className='text-[#4D4D4D] p-2 rounded-full cursor-pointer transition-all ease-in-out hover:bg-blue-500 hover:rounded-full hover:text-white'>
                            <FacebookIcon/>
                        </button>
                        <button className='text-[#4D4D4D] p-2 rounded-full cursor-pointer transition-all ease-in-out hover:bg-blue-500 hover:rounded-full hover:text-white'>
                            <TwitterIcon/>
                        </button>
                        <button className='text-[#4D4D4D] p-2 rounded-full cursor-pointer transition-all ease-in-out hover:bg-blue-500 hover:rounded-full hover:text-white'>
                            <LinkedInIcon/>
                        </button>
                    </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter