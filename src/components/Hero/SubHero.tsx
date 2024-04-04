
const SubHero = () => {
  return (
    <div className="container__style mb-5 border__style flex gap-8 py-4 px-8">
        <div className=" flex flex-col sm:flex-row gap-4 justify-between items-center w-[100%]">
            <div className="flex gap-2  items-center">
            <img src="/images/truck.png" alt="" />
            <div>
                <h1 className="font-bold">Free Shipping</h1>
                <p className="text-[#999999] text-[14px]">Free shipping on all your order</p>
            </div>
            </div>
            <div className="flex gap-2  items-center" >
            <img src="/images/phone.png" alt="" />
            <div>
                <h1 className="font-bold">Customer Support 24/7</h1>
                <p className="text-[#999999] text-[14px]">Instant access to Support</p>
            </div>
            </div>
            <div className="flex gap-2  items-center">
            <img src="/images/bag.png" alt="" />
            <div>
                <h1 className="font-bold">100% Secure Payment</h1>
                <p className="text-[#999999] text-[14px]">We ensure your money is save</p>
            </div>
            </div>
            <div className="flex gap-2 items-center">
            <img src="/images/package.png" alt="" />
            <div>
                <h1 className="font-bold">Money-Back Guarantee</h1>
                <p className="text-[#999999] text-[14px]">30 Days Money-Back Guarantee</p>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default SubHero