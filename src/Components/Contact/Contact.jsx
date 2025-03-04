import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer 
      className="bg-black text-white py-16 px-10 opacity-100 transition-opacity duration-500"
      data-aos="fade-up" 
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left ml-10">
        
        {/* Contact Section */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-3xl font-semibold text-[#0097b2]">📞 Contact</h3>
          <div className="flex gap-6 mt-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lamiaaelewa38@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0097b2] hover:text-white text-3xl"
              data-aos="fade-right"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/lamiaa-elewa-1a6b862a7/" 
              target="_blank" 
              className="text-[#0097b2] hover:text-white text-3xl"
              data-aos="fade-up"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/lamiaaelewa" 
              target="_blank" 
              className="text-[#0097b2] hover:text-white text-3xl"
              data-aos="fade-left"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <h3 className="text-3xl font-semibold text-[#0097b2]">🎓 Education</h3>
          <p className="text-2xl text-gray-300 mt-3 font-semibold">Computer Science Student</p>
          <p className="text-xl text-gray-400">Modern Academy Cairo - Maadi</p>
          <p className="text-xl text-gray-400">Expected Graduation: 2025 / 2026</p>
        </div>

        {/* Work Experience Section */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
          <h3 className="text-3xl font-semibold text-[#0097b2]">💼 Work Experience</h3>
          <p className="text-2xl text-gray-300 mt-6 font-semibold">Support Team - Code Challenge Championship</p>
          <p className="text-xl text-gray-400">Assisting participants with inquiries and event-related support.</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-gray-400" data-aos="fade-up" data-aos-delay="800">
        <p>&copy; {new Date().getFullYear()} Lamiaa Elewa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
