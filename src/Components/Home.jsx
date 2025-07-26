import Container from './Container'
import React from 'react'
import { delay, motion } from "framer-motion"
import NavBar from './NavBar'
import ServicePage from '../Pages/ServicePage'

import Project from './Project'
import Contact from './Contact'

import BioData from './BioData'
import Testinomial from './Testinomial'
import Footer from './Footer'
const Home = () => {
  return (
    <>
 
    <Container bgColor={"#0B1C2E"}>


     <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full bg-gradient-to-b from-[#102236] via-[#17304B] to-[#102236] text-white py-10 sm:py-24 px-4 sm:px-10 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Glowing Background Behind Image */}
      <div className="absolute right-0 top-10 md:right-20 md:top-32 w-72 h-72 bg-cyan-400 opacity-20 blur-3xl rounded-full z-0"></div>

      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
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

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
        >
          Let’s Work Together 🚀
        </motion.a>
      </div>

      {/* Right Image Section */}
      {/* <motion.div
        className="md:w-1/2  h-80 flex justify-center z-10"
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
          className="relative w-full rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20"
        >
          <img
            src="Anuj.jpg"
            alt="Ankesh's Profile"
            className="w-full h-80 object-cover rounded-2xl p-4"
          />
        </motion.div>
      </motion.div> */}
        <motion.div
      className="md:w-1/2 w-full flex mt-10 justify-center items-center z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-lg border border-white/20"
      >
        <img
          src="/Anuj.jpg"
          alt="Ankesh's Profile"
          className="w-full h-full object-cover  rounded-3xl"
        />
        {/* Optional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 rounded-3xl pointer-events-none" />
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
