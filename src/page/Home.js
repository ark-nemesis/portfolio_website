import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import InternshipCard from "../components/InternshipCard";

const Home = () => {
  // const internships = [
  //   {
  //     company: 'Company A',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     logo: 'https://example.com/company-a-logo.png',
  //   },
  //   {
  //     company: 'Company B',
  //     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     logo: 'https://example.com/company-b-logo.png',
  //   },
  //   {
  //     company: 'Company A',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     logo: 'https://example.com/company-a-logo.png',
  //   },
  //   {
  //     company: 'Company B',
  //     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     logo: 'https://example.com/company-b-logo.png',
  //   },
  //   // Add more internships as needed
  // ];

  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <Blog /> */}
      <InternshipCard/>
      {/* {internships.map((internship, index) => (
          <InternshipCard
            key={index}
            {...internship}
            isDescriptionLeft={index % 2 === 0}
          />
        ))} */}
      <Contact />
    </>
  );
};

export default Home;
