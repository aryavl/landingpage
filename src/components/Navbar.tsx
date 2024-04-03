import React from 'react'
import Topnavbar from './Navbar/Topnavbar'
import MiddleNavbar from './Navbar/MiddleNavbar'

const Navbar = () => {
  return (
    <>
    <div className='border-b-[1px] pb-2'>
        
    <Topnavbar/>
    </div>
    <MiddleNavbar/>
    </>
  )
}

export default Navbar