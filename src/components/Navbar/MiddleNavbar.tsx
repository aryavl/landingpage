import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const MiddleNavbar = () => {
  return (
    <div className="container py-4 justify-between">
      <div className="dflex">
        <div className="w-[20px] cursor-pointer">
          <img src="/images/plant 1.png" alt="" className="w-[100%]" />
        </div>
        <a href="/" className=" hidden md:block">
          BankNotes
        </a>
      </div>
      <div className="w-[80%] md:w-[40%]">
        <div className="dflex w-full ">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm border border-gray-300 rounded-l-lg placeholder-gray-500 "
              placeholder="Search..."
            />
          </div>
          <button className="bg-blue-500 text-white ml-[-8px] px-4 py-[7px] rounded-r-lg hover:bg-blue-400 hover:scale-105">
            Search
          </button>
        </div>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <div className="">
          <a href="">
            <FavoriteBorderIcon />
          </a>
        </div>
        <div className="border-r-[1px] h-5"></div>
        <div className="relative">
    <a href="" className="z-0">
    <ShoppingCartOutlinedIcon />
    </a>
  <div className="absolute top-[-6px] right-[5px] bg-blue-500 rounded-full w-[14px] h-[14px] flex justify-center items-center text-white z-10 text-[12px] ">
    0
  </div>
  
        </div>
        <div className="flex flex-col ml-1">
        <h1 className="text-[14px] text-gray-500">Shopping cart:</h1>
        <p className="font-bold">$ 57.00</p>
      </div>
      </div>
      
    </div>
  );
};

export default MiddleNavbar;
