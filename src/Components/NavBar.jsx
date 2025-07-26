import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#17304B] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm lg:text-base font-medium">
          <Link to="/home" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          <Link to="/resume" className="hover:text-cyan-400 transition">Resume</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#17304B] px-4 pb-4 pt-2 space-y-3 text-base">
          <Link to="/home" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400">Contact</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)} className="block hover:text-cyan-400">Resume</Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
