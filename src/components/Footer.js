import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <footer id='footer' className="bg-[#14213D] text-[#FFFFFF] py-8" data-aos="fade-up" data-aso-delay="2000">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Name and Title */}
        <p className="text-xl font-semibold">Muhammad Salman Ahmad</p>
        <p className="text-md mt-1">Web Developer | AI Enthusiast</p>
        
        {/* Contact Information */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="mailto:msalmanahmad1258@gmail.com" className="hover:text-[#FCA311] text-2xl" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/salman-ahmad-571654205" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCA311] text-2xl" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCA311] text-2xl" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://wa.me/923092874587" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCA311] text-2xl" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        {/* Legal Links */}
        <div className="mt-4 space-x-4 text-sm">
          <a href="#profile" className="hover:text-[#FCA311]">Profile</a>
          <a href="#experience" className="hover:text-[#FCA311]">Experience</a>
          <a href="#education" className="hover:text-[#FCA311]">Education</a>
          <a href="#skills" className="hover:text-[#FCA311]">Skills</a>
          <a href="#awards" className="hover:text-[#FCA311]">Award</a>
          <a href="#contact" className="hover:text-[#FCA311]">Contact</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Muhammad Salman Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
