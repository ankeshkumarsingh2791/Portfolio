import Container from './Container'
import React from 'react'
import { delay, motion } from "framer-motion"
import NavBar from './NavBar'
import ServicePage from '../Pages/ServicePage'

import Project from './Project'
import Contact from './Contact'

import Footer from './Footer'
import BioData from './BioData'
import Testinomial from './Testinomial'
const Home = () => {
  return (
    <>
    <NavBar />
    <Container bgColor={"#0B1C2E"}>
         
         <motion.div 
         
         className="w-full   text-white py-12 sm:py-0  h-screen md:justify-center md:items-center  md:flex">
          <div className="sm:w-1/2 sm:px-8 justify-center text-center sm:text-start flex flex-col gap-4 ">
            <motion.h3
            animate={{x: [0, 100, 0, 100], y:[-50,0]  } }
            transition={{duration: 3, delay:1,}}
            
            
           
             className="sm:text-4xl md:mt-5 mt-20  text-xl font-semibold">
             Hii !!, I am Ankesh 
            </motion.h3
            >
            <p className="sm:text-xl  text-sm font-sans  sm:leading-8">
            Welcome to my portfolio! I'm a MERN stack developer passionate about crafting engaging and user-friendly web experiences. With a keen eye for design and a strong foundation in coding, I specialize in bringing dynamic interfaces to life. From concept to deployment, I thrive on turning ideas into intuitive, visually stunning websites that resonate with users. Let's collaborate to build digital solutions that not only meet but exceed expectations.
            </p>
          </div>

          <motion.div
          
          className="sm:w-1/2 p-10  flex justify-center  ">
          {/* <img className='w-60 p-10' src='Ankesh-1.png' alt='' /> */}

          
          <motion.div  
          animate={{
            scale:[1,1,1,1],
            rotate: [0,360,360,0],
            borderRadius:["10%","10%","50%","10%"]
          }}

          transition={{
            duration:5
            , ease: "easeInOut",
            // repeat:Infinity,
            repeatDelay:1,
            
            
            
          }}
          className=' bg-rose-50 border-black  '>

          <img className='w-60 p-10' src='Ankesh-1.png' alt='' />
          </motion.div>
            
          </motion.div>
        </motion.div>
      

    </Container>
    <BioData />
    <ServicePage />
    <Project />
   
    <Testinomial />

    <Contact />
   
    <Footer />
    </>
  )
}

export default Home
