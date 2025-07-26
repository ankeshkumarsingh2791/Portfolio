import Container from './Container'
import React from 'react'
import { delay, motion } from "framer-motion"
import NavBar from './NavBar'
import ServicePage from '../Pages/ServicePage'

import Project from './Project'
import Contact from './Contact'

import BioData from './BioData'
import Testinomial from './Testinomial'
const Home = () => {
  return (
    <>
 
    <Container bgColor={"#0B1C2E"}>


    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-b from-[#102236] via-[#17304B] to-[#102236] text-white py-10 sm:py-24 px-4 sm:px-10 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-0"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Hi 👋, I’m <span className="text-cyan-400">Ankesh</span>
        </motion.h3>

        <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm a <strong className="text-white">MERN Stack Developer</strong> passionate about building intuitive, responsive, and beautiful web apps. I love combining clean code with modern design to bring ideas to life. Let’s collaborate and create something amazing!
        </p>
      </div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative rounded-full shadow-2xl bg-white/10 backdrop-blur-md border border-white/20"
        >
          <img
            src="Profile.jpg"
            alt="Ankesh's Profile"
            className="w-64 sm:w-72 md:w-80 rounded-full p-4"
          />
        </motion.div>
      </motion.div>
    </motion.div>


      

    </Container>
    <BioData />
    <ServicePage />
    <Project />
   
    <Testinomial />

    <Contact />
   
   
    </>
  )
}

export default Home
