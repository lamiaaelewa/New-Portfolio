import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../../assets/image/image5.png"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-black text-white px-10 overflow-hidden">
      {/* Left Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <p className="text-lg text-gray-400" data-aos="fade-down">Hello, my name is</p>
        <h2 className="text-6xl font-bold text-white" data-aos="fade-right">Lamiaa Elewa</h2> 
        <p className="text-3xl mt-2 font-semibold text-[#0097b2]" data-aos="fade-left">
          Front-end Developer | React.js
        </p>
        
        
        <p className="text-lg mt-4 text-gray-300 leading-relaxed" data-aos="zoom-in">
          Passionate about creating intuitive and user-friendly interfaces.  
          I have a strong interest in UI/UX design, networking, and cybersecurity.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6" data-aos="fade-up">
          <a href="https://github.com/lamiaaelewa" target="_blank" className="text-[#0097b2] text-2xl hover:text-white transition">
            <FaGithub />
          </a>
          
          <a href="https://www.linkedin.com/in/lamiaa-elewa-1a6b862a7/" target="_blank" className="text-[#0097b2] text-2xl hover:text-white transition">
            <FaLinkedin />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lamiaaelewa38@gmail.com" className="text-[#0097b2] text-2xl hover:text-white transition">
            <FaEnvelope /> 
          </a>
        </div>

        {/* Download CV Button */}
        <button 
          className="mt-6 px-6 py-3 border-2 border-[#0097b2] text-[#0097b2] rounded-lg shadow-lg 
          hover:bg-[#0097b2] hover:text-white transition transform hover:scale-105"
          data-aos="flip-left"
        >
          DOWNLOAD CV
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 w-full h-screen flex justify-end">
        <img
          src={profilePic} 
          alt="Profile"
          className="w-full h-auto max-h-screen object-cover rounded-lg shadow-lg"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
};

export default Hero;
