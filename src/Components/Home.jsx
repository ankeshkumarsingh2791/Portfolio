import Container from './Container'
import React from 'react'

const Home = () => {
  return (
    <Container bgColor={"#0B1C2E"}>
        <div className='w-full text-white  '>
         <div className="w-full md:h-screen md:justify-center md:items-center  md:flex">
          <div className="sm:w-1/2 sm:px-8 text-center sm:text-start flex flex-col gap-4 ">
            <h3 className="sm:text-4xl md:mt-5 text-xl font-semibold">
             Hii !!, I am Ankesh 
            </h3>
            <p className="sm:text-xl  text-sm font-sans  sm:leading-8">
            Welcome to my portfolio! I'm a frontend developer passionate about crafting engaging and user-friendly web experiences. With a keen eye for design and a strong foundation in coding, I specialize in bringing dynamic interfaces to life. From concept to deployment, I thrive on turning ideas into intuitive, visually stunning websites that resonate with users. Let's collaborate to build digital solutions that not only meet but exceed expectations.
            </p>
          </div>

          <div className="sm:w-1/2  ">
            {/* <img src='Ankesh-1.png' alt='' /> */}
            <img className="sm:hidden " />
          </div>
        </div>
      
    </div>
    </Container>
  )
}

export default Home
