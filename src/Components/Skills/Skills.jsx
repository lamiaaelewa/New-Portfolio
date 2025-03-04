import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub, 
  FaFigma, FaLinux, FaPython 
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiPhp, SiNextdotjs, SiMysql } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    // Initialize AOS library with animation duration
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section id="skills" className="bg-black text-white py-20 px-10">
      <div className="container mx-auto text-center">
        {/* Section Title with Animation */}
        <h2 
          className="text-6xl font-bold text-[#0097b2] mb-10"
          data-aos="fade-down"
        >
          Skills
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center items-center">
          {/* Skills Icons with Animation */}
          <div className="text-center" data-aos="zoom-in">
            <FaHtml5 className="text-red-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">HTML</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaCss3Alt className="text-blue-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">CSS</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaJs className="text-yellow-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">JavaScript</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaReact className="text-cyan-400 text-7xl mx-auto" />
            <p className="mt-2 text-xl">React.js</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <SiNextdotjs className="text-white text-7xl mx-auto" />
            <p className="mt-2 text-xl">Next.js</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <SiTailwindcss className="text-teal-400 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Tailwind CSS</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <SiBootstrap className="text-purple-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Bootstrap</p>
          </div>
          
          <div className="text-center" data-aos="zoom-in">
            <FaFigma className="text-pink-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Figma</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaGit className="text-orange-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Git</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaGithub className="text-white text-7xl mx-auto" />
            <p className="mt-2 text-xl">GitHub</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <SiPhp className="text-indigo-500 text-7xl mx-auto" />
            <p className="mt-2 text-xl">PHP</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaPython className="text-blue-300 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Python</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <SiMysql className="text-blue-600 text-7xl mx-auto" />
            <p className="mt-2 text-xl">SQL</p>
          </div>

          <div className="text-center" data-aos="zoom-in">
            <FaLinux className="text-yellow-300 text-7xl mx-auto" />
            <p className="mt-2 text-xl">Linux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;