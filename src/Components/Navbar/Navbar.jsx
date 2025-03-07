import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-black text-white p-4 fixed top-0 w-full shadow-lg z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#0097b2]">Lamiaa's Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-black text-white absolute top-16 left-0 w-full flex flex-col items-center transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="py-3 w-full text-center border-b border-gray-700">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li className="py-3 w-full text-center border-b border-gray-700">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li className="py-3 w-full text-center border-b border-gray-700">
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li className="py-3 w-full text-center border-b border-gray-700">
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li className="py-3 w-full text-center">
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
