
import Topnavbar from './Navbar/Topnavbar'
import MiddleNavbar from './Navbar/MiddleNavbar'
import BottomNavbar from './Navbar/BottomNavbar'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
    <div className='border-b-[1px] pb-2'>
        
    <Topnavbar/>
    </div>
    <MiddleNavbar/>
    <div className={style.bgNav}>
    <BottomNavbar/>
    </div>
    </>
  )
}

export default Navbar