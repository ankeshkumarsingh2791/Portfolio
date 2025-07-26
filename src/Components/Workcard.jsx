import React from 'react';
import { motion } from 'framer-motion';

const Workcard = ({ heading, text, h1, h2, h3, image, link }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="w-full border border-blue-600 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#122a45] to-[#0B1C2E] hover:shadow-cyan-500/30"
    >
      <img className="w-full h-48 object-cover p-2 rounded-xl" src={image} alt={heading} />

      <div className="px-6 py-4 text-white">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
      </div>

      <div className="px-6 pt-2 pb-4 flex flex-wrap gap-2">
        {[h1, h2, h3].map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-blue-800 text-white rounded-full px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <div className="px-6 pb-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md transition"
          >
            View Project
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default Workcard;