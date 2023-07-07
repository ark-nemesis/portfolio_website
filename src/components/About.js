import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
      <div className="about-img">
          <img
            src={'https://res.cloudinary.com/dqhyudo4x/image/upload/v1687781536/Portfolio/p3_gpgafs.png'}
            alt="coding illustration"
            className="lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl lg:ml-36 hidden md:flex"
          />
        </div>
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Pranjal Sharma. I am Full Stack Developer & ML Enthusiast.
            </p>
            <p className="pb-5">I did B.E. in Computer Science from UIET , CSJM University Kanpur.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Recoil, React Native,
            Axios, Tailwind CSS,   and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB.</p>

          <p>
            
          </p>
        </div>

        <div className="about-img">
          <img
            src={'https://res.cloudinary.com/dqhyudo4x/image/upload/v1687781536/Portfolio/p3_gpgafs.png'}
            alt="coding illustration"
            className="lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl md:ml-36 md:hidden flex"
          />
        </div>
      </div>

    </section>
  );
};

export default About;
