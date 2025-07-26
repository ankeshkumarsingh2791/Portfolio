import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiExpress, SiTypescript,
} from 'react-icons/si';
import { HiDownload } from 'react-icons/hi';

const techSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-300" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
];

const languages = ['English', 'Hindi', 'Technical Documentation'];

const roles = ['Frontend Developer', 'Full Stack Developer', 'Software Developer'];

const BioData = () => {
  return (
    <Container bgColor="#0B1C2E">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="relative w-full text-slate-100 mt-16 sm:mt-20 py-10 px-4 sm:px-10 md:px-20 flex flex-col lg:flex-row gap-12 items-center justify-between overflow-hidden"
      >
        {/* ✨ Floating Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-xl rounded-full z-0"></div>
        <div className="absolute animated-ping bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-xl rounded-full z-0"></div>

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: false }}

          className="hidden lg:flex lg:w-1/2 justify-center z-10"
        >
          <div className="relative w-4/5 border-l-[8px] border-t-[8px] border-blue-500 rounded-md overflow-hidden">
            <img src="bio.jpg" alt="Ankesh Bio" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="lg:w-1/2 w-full space-y-6 z-10">
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            MY <span className="text-cyan-400">BIODATA</span>
          </motion.h3>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="flex-1 h-[2px] bg-blue-500"></div>
          </div>

          {/* Bio Description */}
          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
            I'm a <strong className="text-white">B.Tech Computer Science</strong> graduate from Dev Bhoomi Uttarakhand University.
            A passionate <strong className="text-white">MERN Stack Developer</strong> focused on creating modern, responsive, and user-centric applications.
            With strong problem-solving skills and a creative mindset, I aim to bring value to every digital solution I craft.
          </p>

          {/* Roles */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Roles I Can Fit In:</h4>
            <div className="flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="bg-blue-600 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-2">Tech Stack:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-400 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-2">Languages:</h4>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-gray-700 text-sm text-white px-4 py-1.5 rounded-full hover:bg-cyan-500 transition"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Button & Socials */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="/Ankesh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </a>

            <div className="flex gap-5">
              <a
                href="https://github.com/ankeshkumarsingh2791"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 text-2xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ankesh-kumar-singh-2a311a234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default BioData;
