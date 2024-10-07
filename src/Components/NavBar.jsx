import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full px-4 sm:px-32 sm:h-16  flex fixed opacity-95 py-2.5 justify-between ring-2 text-white z-50 bg-[#17304B]'>
        <div className='sm:block hidden'>
      Logo
        </div>
        <div className=' justify-center ml-8 sm:ml-0 flex gap-4 text-sm sm:text-lg sm:gap-16 '>
          <Link to={"/home"}>
          Home
          </Link>
          <Link to={"/about"}>
           About
          </Link>
          <Link to={"/projects"}>
          Projects
          
          </Link>
           <Link to={"/contact"}>
           Contact
           </Link>
           <Link to={"/resume"}>
            Resume
           </Link>
           
        </div>
      
    </div>
  )
}

export default NavBar
