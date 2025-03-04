import React from "react";

const Navbar = () => {
  return (
 
    <nav className="bg-black text-white p-4 fixed top-0 w-full shadow-lg z-50 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0097b2]">Lamiaa's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
