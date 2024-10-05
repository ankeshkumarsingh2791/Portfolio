import React from 'react'
import Container from './Container'
import NavBar from './NavBar'

const Resume = () => {
  return (
    <>
    <NavBar />
   <Container bgColor={"#0B1C2E"}>

    
    <div className='w-full sm:px-40 py-10  text-white '>

        <button  className='bg-[#38BDF8] mt-10 p-2 rounded-md '>Download</button>
        </div>
          <div className='flex mt-5 pb-10 justify-center'>
        
            
          <img className='sm:w-3/4 ' src='Ankesh-1.png' alt=' ' />
          </div>
   
   </Container>
    </>
  )
}

export default Resume
