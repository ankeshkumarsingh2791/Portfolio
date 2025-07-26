import React from 'react';
import Workcard from './Workcard';
import Container from './Container';
import NavBar from './NavBar';

const projects = [
  {
    heading: 'D2D Tools - File Converter',
    text:
      'Transform files effortlessly with support for multiple formats including PDF, JPG, DOCX, and more. Built with React and TailwindCSS, it delivers fast, responsive conversions.',
    h1: '#Frontend',
    h2: '#File-Converter',
    h3: '#React + TailwindCSS',
    image: 'Screenshot (157).png',
    link: 'https://d2d-tools-ankesh-kumar-singhs-projects.vercel.app/',
  },
  {
    heading: 'Shiksha Setu - School ERP',
    text:
      'A powerful MERN stack solution for managing school administration, communication, and academic records. Optimized for performance and usability.',
    h1: '#MERN Stack',
    h2: '#School ERP',
    h3: '#Node + MongoDB',
    image: 'image-1.jpg',
    link: 'https://shiksha-setu.com/',
  },
  {
    heading: 'Music Player Web App',
    text:
      'Enjoy a seamless, modern audio experience with responsive design, curated playlists, artist profiles, and more. Built with React, perfect for music lovers.',
    h1: '#Music App',
    h2: '#Frontend',
    h3: '#Responsive UI',
    image: 'Screenshot (162).png',
    link: 'https://music-app-demo.netlify.app/',
  },
  {
    heading: 'Portfolio Website',
    text:
      'My personal developer portfolio showcasing projects, skills, services, and contact form. Built using React, TailwindCSS, and Framer Motion with strong SEO optimization.',
    h1: '#Portfolio',
    h2: '#React + Motion',
    h3: '#Modern UI',
    image: 'contact2.jpg',
    link: 'https://portfolio-chi-nine-46.vercel.app/#',
  },
  {
    heading: 'CI/CD + Docker Deployment',
    text:
      'Implemented Jenkins-based CI/CD pipelines with Docker containers to auto-deploy Next.js applications, improving delivery cycles and team collaboration.',
    h1: '#DevOps',
    h2: '#CI/CD + Docker',
    h3: '#Next.js + Jenkins',
    image: 'Hero.svg',
    link: 'https://github.com/qurvit/qurvit-webSite',
  },
   {
    heading: 'Task Manager App',
    text:
      'A sleek, full-stack task management tool built using the MERN stack. Users can create, assign, track, and complete tasks with real-time updates and a responsive dashboard UI.',
    h1: '#Task Manager',
    h2: '#Full Stack App',
    h3: '#React + Node.js',
    image: 'contact.jpg',
    link: 'https://github.com/ankeshkumarsingh2791/taskManager',
  },
];

const Project = () => {
  return (
    <>
      <NavBar />
      <Container bgColor="#0B1C2E">
        <div className="w-full mt-10 sm:p-10 py-16 mb-10 text-white">
          <div className="sm:px-36 sm:w-[70%] mx-auto text-white text-center space-y-3">
            <h3 className="text-3xl font-bold text-cyan-400">Recent Projects</h3>
            <p className="text-sm text-gray-300">
              From custom tools to full-stack platforms, here are some highlights of what I’ve recently built and deployed.
            </p>
          </div>

          <div className="sm:px-36 mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, index) => (
              <Workcard key={index} {...proj} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Project;