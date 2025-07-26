// ContactHero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="bg-[#0B1C2E] py-20 px-6 md:px-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">Get In Touch</h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Have a project idea, collaboration, or just want to say hello? I’m open to freelance work, startup opportunities, or full-time positions. Feel free to reach out anytime — I’d love to connect with you.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
