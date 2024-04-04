import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Testimonial = () => {
  return (
    <div className="container__style flex-col py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold  my-8">Client Testimonials</h1>
        <div className="flex gap-4">
          <h1>
            <ArrowBackOutlinedIcon />
          </h1>
          <h1>
            <ArrowForwardOutlinedIcon />
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 w-[100%] justify-between items-center">
        <div className="w-[320px] h-[200px] bg-white border__style rounded-lg flex justify-center items-center px-4 ">
          <h1 className="text-[14px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget
          </h1>
        </div>
        <div className="w-[320px] h-[200px] bg-white border__style rounded-lg flex justify-center items-center px-4 ">
          <h1 className="text-[14px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget
          </h1>
        </div>
        <div className="w-[320px] h-[200px] bg-white border__style rounded-lg flex justify-center items-center px-4 ">
          <h1 className="text-[14px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
