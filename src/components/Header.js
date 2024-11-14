import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      easing: 'ease-in-out',
    });
  }, []);
  

  return (
    <header className="bg-[#14213D] text-[#E5E5E5] py-4 px-6 shadow-md" data-aos="fade-right">
      <div className="container mx-auto flex items-center justify-between">
        {/* Name on Left */}
        <div 
          className="text-[#FCA311] font-bold text-2xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Muhammad Salman Ahmad
        </div>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex space-x-8 text-lg font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="#profile" className="hover:text-[#FCA311]">Profile</a>
          <a href="#experience" className="hover:text-[#FCA311]">Experience</a>
          <a href="#education" className="hover:text-[#FCA311]">Education</a>
          <a href="#skills" className="hover:text-[#FCA311]">Skills</a>
          <a href="#awards" className="hover:text-[#FCA311]">Awards</a>
          <a href="#footer" className="hover:text-[#FCA311]">Contact</a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FCA311]">
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav 
          className="md:hidden mt-4 space-y-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <a href="#profile" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Profile
          </a>
          <a href="#experience" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Experience
          </a>
          <a href="#education" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Education
          </a>
          <a href="#skills" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Skills
          </a>
          <a href="#awards" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Awards
          </a>
          <a href="#footer" onClick={toggleMenu} className="block text-left text-lg hover:text-[#FCA311]">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
