import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Section1 = () => {
  return (
    <div className="container__style">
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 ">
        <div className="bg-white rounded-xl shadow-md overflow-hidden  my-4 cursor-pointer hovercard">
          <div
            className="flex flex-col 
"
          >
            <div className="">
              <img className="h-48 w-full object-cover " src="/images/s1.jpg" />
            </div>
            <div className=" py-4 px-4">
              <div className=" tracking-wide text-sm  font-semibold">
                <p className="text-[14px]">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>
                <button className="text-[#1B96DC] mt-4">
                  Read More <ArrowForwardOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden  my-4 cursor-pointer hovercard">
          <div
            className="flex flex-col 
"
          >
            <div className="">
              <img className="h-48 w-full object-cover " src="/images/s2.jpg" />
            </div>
            <div className=" py-4 px-4">
              <div className=" tracking-wide text-sm  font-semibold">
                <p className="text-[14px]">
                Eget lobortis lorem lacinia. Vivamus pharetra semper,
                </p>
                <button className="text-[#1B96DC] mt-4">
                  Read More <ArrowForwardOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden  my-4 cursor-pointer hovercard">
          <div
            className="flex flex-col 
"
          >
            <div className="">
              <img className="h-48 w-full object-cover " src="/images/s3.jpg" />
            </div>
            <div className=" py-4 px-4">
              <div className=" tracking-wide text-sm  font-semibold">
                <p className="text-[14px]">
                Maecenas blandit risus elementum mauris malesuada.
                </p>
                <button className="text-[#1B96DC] mt-4">
                  Read More <ArrowForwardOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
