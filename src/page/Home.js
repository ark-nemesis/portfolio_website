import React  from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

import Contact from "../components/Contact";
import InternshipCard from "../components/InternshipCard";


const Home = () => {
  
  
 
  return (
    <>
   
      <Hero />
      <About />
      <Projects />
      {/* <Blog /> */}
      <InternshipCard/>
      
      <Contact />
    </>
  );
};

export default Home;
