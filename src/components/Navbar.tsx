
import Topnavbar from './Navbar/Topnavbar'
import MiddleNavbar from './Navbar/MiddleNavbar'
import BottomNavbar from './Navbar/BottomNavbar'
import style from './Navbar.module.css'
import { Dispatch, SetStateAction } from 'react';
interface NavbarProps {
  setSearchProducts: Dispatch<SetStateAction<string[]>>; 
  setSearchResult: Dispatch<SetStateAction<string>>; 
  searchProducts:string[]   
 
}

const Navbar: React.FC<NavbarProps> = ({ setSearchProducts,searchProducts ,setSearchResult}) => {

  return (
    <>
    <div className='border-b-[1px] pb-2'>
        
    <Topnavbar/>
    </div>
    <MiddleNavbar setSearchProducts={setSearchProducts} searchProducts={searchProducts}  setSearchResult={setSearchResult}/>
    <div className={style.bgNav}>
    <BottomNavbar/>
    </div>
    </>
  )
}

export default Navbar