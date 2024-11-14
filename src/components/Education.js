import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="education" className="bg-[#FFFFFF] text-[#14213D] py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-4xl font-bold mb-10 text-center text-[#000000]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Education
        </h2>
        
        <div className="space-y-8">
          {/* Education Item 1 */}
          <div
            className="bg-[#F5F5F5] shadow-md rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Bachelor of Science in Computer Science</h3>
            <p className="text-md font-semibold text-[#14213D]">University of Gujrat, Sub-Campus Mandi Bahauddin</p>
            <p className="text-md mt-2">
              <span className="font-semibold">CGPA:</span> 3.91 / 4.00
            </p>
            <p className="text-md mt-2">November 2020 - August 2024</p>
            <p className="text-md mt-2">
              Courses: Data Structures, Algorithms, Operating Systems, Database Management, AI & Machine Learning
            </p>
          </div>

          {/* Education Item 2 */}
          <div
            className="bg-[#F5F5F5] shadow-md rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">F.Sc Pre Engineering</h3>
            <p className="text-md font-semibold text-[#14213D]">The Readers Group of Colleges, Mandi Bahauddin</p>
            <p className="text-md mt-2">2018 - 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
