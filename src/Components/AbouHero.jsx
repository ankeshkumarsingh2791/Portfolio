// AboutHero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-[#0B1C2E] py-20 px-6 md:px-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">About Me</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m Ankesh Kumar Singh – a MERN stack developer passionate about building scalable, user-friendly, and modern web applications. With a solid foundation in both frontend and backend technologies, I strive to bring your ideas to life through clean code and thoughtful design.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
