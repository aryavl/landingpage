

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A]  text-[#9e9d9d]">
      <div className="w-[80%] mx-auto pt-20 pb-10">
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 text-[14px] gap-8">
          <div className="col-span-2 mr-10">
            <div className="dflex mb-2">
              <div className="w-[30px] cursor-pointer">
                <img src="/images/plant 1.png" alt="" className="w-[100%] " />
              </div>
              <h1 className=" text-[1.25rem]">BankNotes</h1>
            </div>
            <p className="mb-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-4 items-center mt-2">
              <div className="border-b-2 border-b-lime-400">
                <h1>(879) 555-01784</h1>
              </div>
              <p>or</p>
              <div className="border-b-2 border-b-lime-400">
                <h1>domain@gmail.com</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold  mb-4 text-sm">My Account</h1>
            <p className="mb-2">My Account</p>
            <p className="mb-2">Order History</p>
            <p className="mb-2">Shoping Cart</p>
            <p className="mb-2">Wishlist</p>
          </div>
          <div>
            <h1 className="text-white font-semibold  mb-4 text-sm">Helps</h1>
            <p className="mb-2">Contact</p>
            <p className="mb-2">Faqs</p>
            <p className="mb-2">Terms & Condition</p>
            <p className="mb-2">Privacy Policy</p>
          </div>
          <div>
            <h1 className="text-white font-semibold  mb-4 text-sm">Proxy</h1>
            <p className="mb-2">About</p>
            <p className="mb-2">shop</p>
            <p className="mb-2">Product</p>
            <p className="mb-2">Track Order</p>
          </div>
          <div>
            <h1 className="text-white font-semibold  mb-4 text-sm">
              Categories
            </h1>
            <p className="mb-2">Indian Rupee</p>
            <p className="mb-2">Euro</p>
            <p className="mb-2">Indian Rupee</p>
            <p className="mb-2">Euro</p>
          </div>
        </div>
        <hr className="mt-10 border-t border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-5">
          <div>
            <h1>Developed By Ciasoft © 2024. All Rights Reserved</h1>
          </div>
          <div className="flex items-center gap-2">
        <div className="w-[40px] h-[30px]">
<img src="/images/apple.png" alt="" className="w-[100%] h-[100%]"/>
        </div>
        <div className="w-[40px] h-[30px]">
<img src="/images/visa.png" alt="" className="w-[100%] h-[100%]"/>
        </div>
        <div className="w-[40px] h-[30px]">
<img src="/images/discover.png" alt="" className="w-[100%] h-[100%]"/>
        </div>
        <div className="w-[40px] h-[30px]">
<img src="/images/master.png" alt="" className="w-[100%] h-[100%]"/>
        </div>
        <div className="w-[40px] h-[30px]">
<img src="/images/cart.png" alt="" className="w-[100%] h-[100%]"/>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
