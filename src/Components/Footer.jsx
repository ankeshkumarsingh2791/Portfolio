// Footer.jsx (simplified & modernized with real links)
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#365d88] text-slate-100 border-t-4 border-blue-600">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-teal-300 font-medium text-lg mb-4">About</h3>
          <p className="text-sm">
            MERN Stack Developer passionate about building web applications that solve real-world problems. Let’s collaborate to build something amazing!
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-white">Web Design</Link></li>
            <li><Link to="#" className="hover:text-white">Web Development</Link></li>
            <li><Link to="#" className="hover:text-white">MERN Projects</Link></li>
            <li><Link to="#" className="hover:text-white">Responsive Design</Link></li>
            <li><Link to="#" className="hover:text-white">E-Commerce Solutions</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/resume" className="hover:text-white">Resume</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium text-lg mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Dehradun, India</li>
            <li>📞 +91 6205725286</li>
            <li>
              ✉️ <a href="mailto:ankeshkumarsingh2791@gmail.com" className="hover:text-white">ankeshkumarsingh2791@gmail.com</a>
            </li>
            <li className="flex space-x-4 mt-2">
              <a href="https://github.com/ankeshkumarsingh2791" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://x.com/AnkeshKuma11092" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="https://www.instagram.com/a_n_k_e_s_h______p_a_t_e_l_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/ankesh-kumar-singh-2a311a234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="ri-linkedin-box-fill text-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-blue-400">
        &copy; {new Date().getFullYear()} Ankesh Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
