import React from 'react'
import Container from './Container'
import NavBar from './NavBar'
import Footer from './Footer'

const Resume = () => {
  return (
    <>
    <NavBar />
   <Container bgColor={"#0B1C2E"}>

    
    <div className='w-full sm:px-40 py-10  text-white '>
    <a href='https://drive.google.com/file/d/11cCsv8v2KXtBcxxc_wN4UvbZQYglR61i/view?usp=sharing'>
    
        <button  className='bg-[#38BDF8] mt-16 p-2 rounded-md '>Download</button>
    </a>

        </div>
          <div className='flex mt-5 pb-10 justify-center'>
        
            
          <img className='sm:w-3/4 ' src='Ankesh-1.png' alt=' ' />
          </div>
   
   </Container>
   <Footer />
    </>
  )
}

export default Resume
