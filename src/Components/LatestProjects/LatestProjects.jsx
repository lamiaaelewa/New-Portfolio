import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "../../assets/image/project1.png";
import project2 from "../../assets/image/project2.png";
import project3 from "../../assets/image/project3.png";
import figmaProject from "../../assets/image/figma1.png";

const LatestProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  // React.js Projects
  const reactProjects = [
    {
      id: 1,
      title: "Candle-Store",
      image: project1,
      liveLink: "https://lamiaaelewa.github.io/Candle-Store2/",
      githubLink: "https://github.com/lamiaaelewa/Candle-Store2",
    },
    {
      id: 2,
      title: "E-Commerce App",
      image: project2,
      liveLink: "https://lamiaaelewa.github.io/E-commerce/",
      githubLink: "https://github.com/lamiaaelewa/E-commerce",
    },
    {
      id: 3,
      title: "Moon",
      image: project3,
      liveLink: "https://lamiaaelewa.github.io/Moon-Website/",
      githubLink: "https://github.com/lamiaaelewa/Moon-Website",
    }
  ];

  // Figma Projects
  const figmaProjects = [
    {
      id: 4,
      title: "Figma UI Design",
      image: figmaProject,
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-10">
      <div className="container mx-auto text-center">
        {/* Main Section Title */}
        <h2
          className="text-6xl font-bold text-[#0097b2] mb-20"
          data-aos="fade-down"
        >
          Latest Projects
        </h2>

        {/* React.js Projects Section */}
        <div data-aos="fade-up">
          <h3 className="text-4xl font-semibold text-white mb-10">React.js Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {reactProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 border-4 border-black hover:border-[#0097b2]"
                data-aos="zoom-in"
                data-aos-delay={index * 200} // تأخير زمني بين العناصر
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                />

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-black hover:text-[#0097b2] transition"
                    title="GitHub Repo"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-black hover:text-[#0097b2] transition"
                    title="View Live"
                  >
                    <FaExternalLinkAlt size={28} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Figma UI Designs Section */}
        <div data-aos="fade-up">
          <h3 className="text-4xl font-semibold text-white mb-10">Figma UI Designs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {figmaProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 border-4 border-black hover:border-[#0097b2]"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                {/* Clickable Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50 cursor-pointer"
                  onClick={() => window.open(project.image, "_blank")}
                  title="Click to view full image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
