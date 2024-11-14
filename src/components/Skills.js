import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="bg-[#F5F5F5] text-[#14213D] py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-4xl font-bold mb-10 text-center text-[#000000]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          Skills
        </h2>
        
        {/* Technical Skills */}
        <div
          className="mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-3xl font-semibold text-[#FCA311] mb-4">Technical Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Python</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">PHP</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">HTML</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">CSS</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">JavaScript</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">ReactJS</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Java</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Firebase</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Jupyter Notebook</li>
          </ul>
        </div>
        
        {/* Professional Skills */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-3xl font-semibold text-[#FCA311] mb-4">Professional Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Project Management</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Technical Support</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Team Leadership</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Communication</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Problem Solving</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Collaboration</li>
            <li className="bg-[#FFFFFF] shadow-lg rounded-lg p-4 text-center font-semibold">Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
