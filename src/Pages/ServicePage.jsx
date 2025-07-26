import React from 'react';
import Container from '../Components/Container';
import ServiceCard from '../Components/ServiceCard';

const services = [
  {
    image: 'React.svg',
    type: 'Frontend Web Development',
    para:
      'Building modern, responsive, and accessible user interfaces using React, TailwindCSS, and JavaScript.',
  },
  {
    image: 'Web.svg',
    type: 'Responsive Design',
    para:
      'Crafting pixel-perfect responsive layouts that adapt beautifully across all devices and screen sizes.',
  },
  {
    image: 'All.svg',
    type: 'Custom Web Solutions',
    para:
      'Delivering tailor-made web applications built to meet your business goals and customer needs.',
  },
  {
    image: 'BookHero.jpg',
    type: 'Full Stack Development',
    para:
      'Creating scalable web apps using both frontend and backend technologies including React, Node.js, and MongoDB.',
  },
  {
    image: 'Hero.svg',
    type: 'MERN Stack Applications',
    para:
      'End-to-end applications built using MongoDB, Express, React, and Node.js for high performance and maintainability.',
  },
  {
    image: 'contact2.jpg',
    type: 'DevOps & Deployment',
    para:
      'Streamlining deployment with CI/CD, Docker, and cloud platforms for high availability and fast delivery.',
  },
];

const ServicePage = () => {
  return (
    <Container bgColor="#0B1C2E">
      <div className="w-full py-16 px-4 sm:px-10 md:px-20 text-white space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">Services I Offer</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            From intuitive UIs to backend logic and server deployment, I offer full-cycle web development
            services to turn your ideas into production-grade digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServicePage;
