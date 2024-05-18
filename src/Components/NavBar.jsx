import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full flex fixed opacity-95 py-2.5 justify-between ring-2 text-white z-50 bg-[#17304B]'>
        <div className=''>
      Logo
        </div>
        <div className=' flex gap-16 '>
           <h3>About</h3>
           <h3>Project</h3>
           <h3>Contact</h3>
           <h3>Resume</h3>
        </div>
      
    </div>
  )
}

export default NavBar
