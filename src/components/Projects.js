import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795316/Portfolio/project-1_nlgrcm.png",
      title: "Movieflix-PJ",
      desc: " A web app for know trending Movie. Built with Node.js, MongoDB, React, Recoil and Tailwind CSS ",
      live: "https://moviflixpj.netlify.app/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795251/Portfolio/ezgif-4-cb1aa57202_t9sa0p.gif",
      title: "Model-LunarLander-v2 ",
      desc: "This is a trained model of a PPO agent playing LunarLander-v2 using the stable-baselines3 library.",
      live: "https://huggingface.co/Pranjal-666/ppo-LunarLander-v2",
      code: "https://huggingface.co/Pranjal-666/ppo-LunarLander-v2/tree/main",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795315/Portfolio/project-2_lgqrrb.png",
      title: "Potato Disease Detection",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797384/Portfolio/ezgif-5-cb08677b6e_ciyf8l.gif",
      title: "Agent playing Taxi-v3",
      desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
      live: "https://huggingface.co/Pranjal-666/taxi",
      code: "https://huggingface.co/Pranjal-666/taxi/tree/main",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797620/Portfolio/project-3_cpa88f.png",
      title: "An Chat App",
      desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
      live: "https://tata-chat-2.web.app/",
      code: "https://huggingface.co/Pranjal-666/taxi/tree/main",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797848/Portfolio/ezgif-4-a329a1daa8_yspckw.gif",
      title: "Agent playing FrozenLake-v1",
      desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
      live: "https://huggingface.co/Pranjal-666/q-FrozenLake-v1-4x4-noSlippery",
      code: "https://huggingface.co/Pranjal-666/q-FrozenLake-v1-4x4-noSlippery/tree/main",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN , ML, DeepLearning and Reinforcement Learning. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <p className=" text-3xl font-bold m-6 ">{project.title}</p>
              <img src={project.img} alt={project.title} className="w-72 h-72 md:w-[405px] md:h-[405px]" />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-90 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold" rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold" rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
