import React from "react";
import HeroImg from "../assets/hero-img.png";
import Typical from 'react-typical'

import {
  AiFillGithub,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineLinkedin
} from "react-icons/ai";
import {SiGeeksforgeeks} from "react-icons/si"

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Pranjal Sharma</span> <br />
            <span class=" ">
            <Typical
        steps={['Frontend Developer  ', 5000, 'ML Developer', 5000,'React Developer',5000,'React Native Developer',5000]}
        loop={Infinity}
        wrapper="p"
      /> 
      </span>
          </h1>

          <p className="py-5">
          A Computer Science Engineer passionate about Programming, Machine Learning and Design.
          </p>

          <div className="flex py-5 ">
            <a
              href="http://linkedin.com/in/pranjal-sharma-93b4a01a4"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white" rel="noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
              
            </a>
            <a
              href="https://github.com/Pranjal-sharma-SDE"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white" rel="noreferrer"
            >
              {" "}
              <AiFillGithub size={40} />{" "}
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/pranjalsoftwareengineer/practice"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white" rel="noreferrer"
            >
              {" "}
              <SiGeeksforgeeks size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-gradient-to-r from-orange-600 to-purple-700 rounded-3xl  hover:border-2 hover:animate-pulse  text-white px-6 py-3 hover:border-[#51ab77]"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={"https://images.squarespace-cdn.com/content/v1/5e9e61184a2e5f4b613d5853/1590108422294-AVIEWRKP9MKDJLYQQGXO/AI.gif"}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
