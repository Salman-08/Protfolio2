import React, { useEffect } from 'react';
import profileimg from '../assets/Profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,  // animation duration
          easing: 'ease-in-out',
        });
      }, []);
  return (
    <section id="profile" className="bg-[#E5E5E5] text-[#14213D] py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div 
          className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
          data-aos="fade-right" // Animation for image
          data-aos-duration="1000"
        >
          <img
            src={profileimg} // Replace with the actual path or URL
            alt="Muhammad Salman Ahmad"
            className="rounded-full w-48 h-48 border-4 border-[#FCA311]"
          />
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left">
          <h2 
            className="text-4xl font-bold text-[#000000] mb-4"
            data-aos="fade-left" // Animation for heading
            data-aos-duration="1000"
          >
            Muhammad Salman Ahmad
          </h2>
          <p 
            className="text-2xl font-semibold text-[#FCA311]"
            data-aos="fade-left" // Animation for subheading
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Web Developer | AI Enthusiast
          </p>
          <p 
            className="text-lg mt-4 leading-relaxed"
            data-aos="fade-up" // Animation for paragraph
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Enthusiastic Computer Science graduate with experience in Web development (HTML, CSS, JavaScript, PHP).
            Skilled in using Python for AI model training. Completed a Final Year Project on Automated Assignment Evaluation.
            Eager to contribute to team projects and expand technical skills.
          </p>

          {/* Contact and Links */}
          <div 
            className="mt-6 space-y-2"
            data-aos="fade-up" // Animation for contact info
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <p className="text-lg">
              <span className="font-semibold">Location:</span> Mandi Bahauddin, Punjab, Pakistan
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> msalmanahmad1258@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/salman-ahmad-571654205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#FCA311] underline"
              data-aos="fade-up" // Animation for LinkedIn link
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
