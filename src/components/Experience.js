import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experience" className="bg-[#F5F5F5] text-[#14213D] py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-4xl font-bold mb-10 text-center text-[#000000]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Experience & Projects
        </h2>
        
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">IT Lab Head</h3>
            <p className="text-md font-semibold text-[#14213D]">Mandi Bahauddin Computing Society</p>
            <p className="text-md mt-2">
              Established and managed the university IT lab, including network setup and providing technical support.
            </p>
          </div>

          {/* Experience Item 2 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">President</h3>
            <p className="text-md font-semibold text-[#14213D]">Mandi Bahauddin Computing Society</p>
            <p className="text-md mt-2">
              Led the Computing Society, organized tech workshops, and promoted computing initiatives.
            </p>
          </div>

          {/* Experience Item 3 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Teacher's Assistant</h3>
            <p className="text-md font-semibold text-[#14213D]">University of Gujrat Sub-Campus, Mandi Bahauddin</p>
            <p className="text-md mt-2">
              Conducted labs for C++, OOP, and ICT, assisting students with exercises and course material.
            </p>
          </div>

          {/* Project Item 1 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Final Year Project: Automated Assignment Evaluation</h3>
            <p className="text-md mt-2">
              Developed a fair and efficient grading system to automate the evaluation of student assignments.
            </p>
            <ul className="list-disc list-inside mt-2 text-[#14213D]">
              <li>Automated grading of assignments</li>
              <li>Comparison of student submissions with provided solutions</li>
              <li>Improved grading accuracy and efficiency</li>
            </ul>
            <p className="text-md mt-2">
              <span className="font-semibold">Technologies Used:</span> PHP, Python, HTML, CSS, JavaScript
            </p>
          </div>

          {/* Project Item 2 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Agriculture System</h3>
            <p className="text-md mt-2">
              Developed a platform to help farmers access medicines for crop diseases.
            </p>
            <ul className="list-disc list-inside mt-2 text-[#14213D]">
              <li>Searchable database of medicines</li>
              <li>Disease-specific recommendations</li>
              <li>User-friendly interface for farmers</li>
            </ul>
            <p className="text-md mt-2">
              <span className="font-semibold">Technologies Used:</span> HTML, CSS, PHP, JavaScript
            </p>
          </div>

          {/* Project Item 3 */}
          <div 
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Teaching App</h3>
            <p className="text-md mt-2">
              Created an application for teachers to upload lectures and students to view them.
            </p>
            <ul className="list-disc list-inside mt-2 text-[#14213D]">
              <li>Upload and manage lecture content</li>
              <li>View lectures on-demand</li>
              <li>Simple and intuitive user interface</li>
            </ul>
            <p className="text-md mt-2">
              <span className="font-semibold">Technologies Used:</span> Java, Firebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
