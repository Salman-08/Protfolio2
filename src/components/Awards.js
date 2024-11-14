import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="awards" className="bg-[#F5F5F5] text-[#14213D] py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-4xl font-bold mb-10 text-center text-[#000000]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Awards & Achievements
        </h2>
        
        <div className="space-y-8">
          {/* Award 1 */}
          <div
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Certificate of Academic Excellence - 2024</h3>
            <p className="text-md mt-2 text-[#14213D]">
              Recognized for outstanding academic performance with a high CGPA throughout the academic years.
            </p>
          </div>

          {/* Award 2 */}
          <div
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Certificate of IT Head – 2023</h3>
            <p className="text-md mt-2 text-[#14213D]">
              Awarded for exemplary leadership and management of the university IT lab and technical support.
            </p>
          </div>

          {/* Award 3 */}
          <div
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Certificate of President - 2024</h3>
            <p className="text-md mt-2 text-[#14213D]">
              Honored for leading the Mandi Bahauddin Computing Society and promoting tech initiatives.
            </p>
          </div>

          {/* Award 4 */}
          <div
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Front End Fundamental from Pirple.com - 2021</h3>
            <p className="text-md mt-2 text-[#14213D]">
              Completed the Front End Fundamental course, gaining skills in HTML, CSS, and JavaScript basics.
            </p>
          </div>

          {/* Award 5 */}
          <div
            className="bg-[#FFFFFF] shadow-lg rounded-lg p-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-[#FCA311]">Punjab Chief Minister Laptop Award - 2023</h3>
            <p className="text-md mt-2 text-[#14213D]">
              Awarded a laptop for academic excellence under the Chief Minister's program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
