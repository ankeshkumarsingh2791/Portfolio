// ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaMobileAlt, FaTools, FaCogs, FaServer, FaLayerGroup,
} from 'react-icons/fa';

const iconMap = {
  'Frontend Web Development': <FaCode className="text-cyan-400 text-2xl" />,
  'Responsive Design': <FaMobileAlt className="text-cyan-400 text-2xl" />,
  'Custom Web Solutions': <FaTools className="text-cyan-400 text-2xl" />,
  'Full Stack Development': <FaLayerGroup className="text-cyan-400 text-2xl" />,
  'MERN Stack Applications': <FaCode className="text-cyan-400 text-2xl" />,
  'DevOps & Deployment': <FaCogs className="text-cyan-400 text-2xl" />,
};

const ServiceCard = ({ type, para, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-br from-[#1c2e45] to-[#0b1c2e] border border-blue-500 rounded-xl shadow-lg p-6 text-white hover:shadow-cyan-500/30"
    >
      <div className="flex justify-center items-center mb-6">
        <motion.img
          src={image}
          alt={type}
          className="w-14 h-14 object-contain rounded-lg"
          animate={{ rotate: [0, 360], borderRadius: ['20%', '50%', '20%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        />
      </div>

      <h3 className="text-xl font-semibold text-center flex items-center justify-center gap-2 mb-3">
        {iconMap[type] ?? null}
        {type}
      </h3>

      <p className="text-sm text-center text-gray-300 leading-relaxed">{para}</p>

      <div className="mt-4 flex justify-center">
        <span className="text-xs px-3 py-1 bg-blue-700 text-white rounded-full">
          {type.includes('Design') ? 'UI/UX' : 'Development'}
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;