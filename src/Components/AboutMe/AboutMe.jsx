import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../../assets/image/image5.png";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section id="about" className="bg-black text-white pt-10 pb-20 px-10 mt-[-50px]">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 
          className="text-6xl font-bold text-center text-[#0097b2] mb-10"
          data-aos="fade-down" 
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Right section - Image */}
          <div 
            className="md:w-1/2 w-full flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={profilePic}
              alt="About Me"
              className="rounded-lg shadow-lg w-full max-w-lg h-auto"
            />
          </div>

          {/* Left section - Text content */}
          <div 
            className="md:w-1/2 w-full text-center"
            data-aos="fade-left"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Who Am I?</h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              I'm <span className="text-[#0097b2] font-semibold">Lamiaa Elewa</span>,  
              a <span className="text-[#0097b2] font-semibold">Front-end Developer</span>  
              specializing in <span className="text-[#0097b2] font-semibold">React.js</span>.  
              I’m passionate about crafting smooth and engaging web experiences that are  
              both visually appealing and highly functional.
            </p>

            <p className="text-2xl text-gray-300 leading-relaxed mt-6">
              I am a <span className="text-[#0097b2] font-semibold">Computer Science student</span>  
              with a deep enthusiasm for technology. My passion extends beyond frontend development  
              to <span className="text-[#0097b2] font-semibold">UI/UX design, networking, and cybersecurity</span>.  
              I enjoy exploring different aspects of technology and continuously expanding my skill set  
              to create better digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
