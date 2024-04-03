import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const BottomNavbar = () => {
    const [showHomeDropdown, setShowHomeDropdown] = useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [showPageDropdown, setShowPagepDropdown] = useState(false);
    const [showBlogDropdown, setShowBlogDropdown] = useState(false);
    const [showMenu,setShowMenu] = useState(false)

  return (
    <>
    <div className="container__style flex items-center justify-between py-2">
                <a href="#" className="text-white md:hidden" onClick={()=>setShowMenu(prev=>!prev)}>
                      {showMenu ? "": <ListOutlinedIcon />}
                  </a>
             
            <ul className="hidden gap-6 text-[14px] text-gray-300 relative md:flex">
              <li 
                onMouseEnter={() => setShowHomeDropdown(true)}
                onMouseLeave={() => setShowHomeDropdown(false)}
                className="relative"
              >
                Home <KeyboardArrowDownIcon/>
                {showHomeDropdown && (
                  <ul className="ul__style">
                    <li className='hover'>Option 1</li>
                    <li className='hover'>Option 2</li>
                    <li className='hover'>Option 3</li>
                  </ul>
                )}
              </li>
              <li 
                onMouseEnter={() => setShowShopDropdown(true)}
                onMouseLeave={() => setShowShopDropdown(false)}
                className="relative"
              >
                Shop <KeyboardArrowDownIcon/>
                {showShopDropdown && (
                  <ul className='ul__style'>
                    <li className='hover'>Option 1</li>
                    <li className='hover'>Option 2</li>
                    <li className='hover'>Option 3</li>
                    <li className='hover'>Option 4</li>
                  </ul>
                )}
              </li>
              <li
              onMouseEnter={()=>setShowPagepDropdown(true)}
              onMouseLeave={()=>setShowPagepDropdown(false)}
              className="relative"
              >Pages <KeyboardArrowDownIcon/>
              {
                  showPageDropdown && (
                      <ul className='ul__style '>
                          <li className='hover'>Option 1</li>
                          <li className='hover'> Option 2</li>
                          <li className='hover'>Option 3</li>
                      </ul>
                  )
              }
              </li>
              <li
              onMouseEnter={()=>setShowBlogDropdown(true)}
              onMouseLeave={()=>setShowBlogDropdown(false)}
              className="relative"
              >Blog <KeyboardArrowDownIcon/>
              {
                  showBlogDropdown && (
                      <ul className='ul__style'>
                          <li className='hover'>Option 1</li>
                          <li className='hover'>Option 2</li>
                          
                      </ul>
                  )
              }
              </li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
            <div>
              <h1><PhoneInTalkOutlinedIcon/>(674) 453-98761</h1>
            </div>
          </div>
            

     {
            showMenu && (
                <div className={`${showMenu ? 'opacity-100' : 'opacity-0'}  fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[999999] `} onClick={()=>setShowMenu(prev=>!prev)}>
                    <div className='w-[50%] h-[100%] border bg-black flex px-6 py-6'>
                <a href="" className='absolute sm:top-[10px]  left-[40%] sm:left-[45%]' onClick={()=>setShowMenu(prev=>!prev)}>
                    <CloseOutlinedIcon/>
                </a>
                <div className='flex flex-col justify-between mt-5'>
            <ul className=" gap-6 text-[14px] text-gray-300 relative flex flex-col">
            <li 
              onMouseEnter={() => setShowHomeDropdown(true)}
              onMouseLeave={() => setShowHomeDropdown(false)}
              className="relative hover:text-white"
            >
              Home <KeyboardArrowDownIcon/>
              {showHomeDropdown && (
                <ul className="ul__style">
                  <li className='hover'>Option 1</li>
                  <li className='hover'>Option 2</li>
                  <li className='hover'>Option 3</li>
                </ul>
              )}
            </li>
            <li 
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
              className="relative hover:text-white"
            >
              Shop <KeyboardArrowDownIcon/>
              {showShopDropdown && (
                <ul className='ul__style'>
                  <li className='hover'>Option 1</li>
                  <li className='hover'>Option 2</li>
                  <li className='hover'>Option 3</li>
                  <li className='hover'>Option 4</li>
                </ul>
              )}
            </li>
            <li
            onMouseEnter={()=>setShowPagepDropdown(true)}
            onMouseLeave={()=>setShowPagepDropdown(false)}
            className="relative hover:text-white"
            >Pages <KeyboardArrowDownIcon/>
            {
                showPageDropdown && (
                    <ul className='ul__style '>
                        <li className='hover'>Option 1</li>
                        <li className='hover'> Option 2</li>
                        <li className='hover'>Option 3</li>
                    </ul>
                )
            }
            </li>
            <li
            onMouseEnter={()=>setShowBlogDropdown(true)}
            onMouseLeave={()=>setShowBlogDropdown(false)}
            className="relative hover:text-white"
            >Blog <KeyboardArrowDownIcon/>
            {
                showBlogDropdown && (
                    <ul className='ul__style'>
                        <li className='hover'>Option 1</li>
                        <li className='hover'>Option 2</li>
                        
                    </ul>
                )
            }
            </li>
            <li className='hover:text-white'>About Us</li>
            <li className='hover:text-white'> Contact Us</li>
          </ul>
          <div>
            <a href="" className='text-[14px]'>
                SignIn / SignUp
            </a>
          </div>
          </div>
          </div>
            </div>
            )
                
        }
       
    </>
  
  );
}

export default BottomNavbar;
