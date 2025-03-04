import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import LatestProjects from "./Components/LatestProjects/LatestProjects";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><LatestProjects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
