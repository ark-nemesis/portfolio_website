import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695211859/ezgif-3-4771dfb87c_wisgbo.gif",
      title: "Poetify-GPT",
      desc: " A AI powered web app for generating poetry based on user prompt. Built with Node.js,  React, Recoil and Tailwind CSS ",
      live: "https://poetify.netlify.app/",
      code: "https://github.com/Pranjal-sharma-SDE",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695996272/ezgif-2-e27e717ff1_lgwcvu.gif",
      title: "RealVibes",
      desc: "RealVibe is a dynamic React Native app, powered by Firebase and Expo, offering effortless reel creation, interactive viewing, and social engagement. Users can create, explore, and interact with short video reels, while the app optimizes loading and provides flexible playback controls. Experience the future of short video content with RealVibe. ",
      live: "https://drive.google.com/file/d/1yIT4yMlB4RL5W4fIQs_JnCXM1ZuAcBUh/view?usp=sharing",
      code: "https://github.com/Pranjal-sharma-SDE/realvibes",
    }, {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695213441/ezgif-3-c9e4c571ca_btphpq.gif",
      title: "Article Summarizer",
      desc: " A web app for Summarize your any website with given article link. Built with React, Recoil and Tailwind CSS ",
      live: "https://pjsummarizer.netlify.app/",
      code: "https://github.com/Pranjal-sharma-SDE/ai_summarizer/",
    },
    {
      img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795316/Portfolio/project-1_nlgrcm.png",
      title: "Movieflix-PJ",
      desc: " A web app for know trending Movie. Built with Node.js, MongoDB, React, Recoil and Tailwind CSS ",
      live: "https://moviflixpj.netlify.app/",
      code: "https://github.com/Pranjal-sharma-SDE/Moviflix-Pj",
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
      desc: "Pranjal-666/Potato-leaf-disease-detection",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://huggingface.co/spaces/Pranjal-666/Potato-leaf-disease-detection/tree/main",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-primary text-white px-5 py-32"
      id="projects"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN, ML, DeepLearning, and Reinforcement Learning. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <motion.div
        className="projects container mx-auto grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => {
          return (
            <motion.div
              className="relative"
              key={i}
              variants={projectVariants}
            >
              <p className="text-3xl font-bold m-6 ">{project.title}</p>
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-72 h-72 md:w-[405px] md:h-[405px]"
              />
              <motion.div
                className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-90 "
                whileHover={{ scale: 1.05 }}
              >
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Projects;

// import React from "react";
// // import cssProjects from "../assets/cssprojects.png";
// // import devlog from "../assets/devlog.png";
// // import getInspirred from "../assets/get-inspirred.png";
// // import uilogs from "../assets/uilogs.png";

// const Projects = () => {
//   const projects = [
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695211859/ezgif-3-4771dfb87c_wisgbo.gif",
//       title: "Poetify-GPT",
//       desc: " A AI powered web app for generating poetry based on user prompt. Built with Node.js,  React, Recoil and Tailwind CSS ",
//       live: "https://poetify.netlify.app/",
//       code: "https://github.com/Pranjal-sharma-SDE",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695996272/ezgif-2-e27e717ff1_lgwcvu.gif",
//       title: "RealVibes",
//       desc: "RealVibe is a dynamic React Native app, powered by Firebase and Expo, offering effortless reel creation, interactive viewing, and social engagement. Users can create, explore, and interact with short video reels, while the app optimizes loading and provides flexible playback controls. Experience the future of short video content with RealVibe. ",
//       live: "https://drive.google.com/file/d/1yIT4yMlB4RL5W4fIQs_JnCXM1ZuAcBUh/view?usp=sharing",
//       code: "https://github.com/Pranjal-sharma-SDE/realvibes",
//     }, {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1695213441/ezgif-3-c9e4c571ca_btphpq.gif",
//       title: "Article Summarizer",
//       desc: " A web app for Summarize your any website with given article link. Built with React, Recoil and Tailwind CSS ",
//       live: "https://pjsummarizer.netlify.app/",
//       code: "https://github.com/Pranjal-sharma-SDE/ai_summarizer/",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795316/Portfolio/project-1_nlgrcm.png",
//       title: "Movieflix-PJ",
//       desc: " A web app for know trending Movie. Built with Node.js, MongoDB, React, Recoil and Tailwind CSS ",
//       live: "https://moviflixpj.netlify.app/",
//       code: "https://github.com/Pranjal-sharma-SDE/Moviflix-Pj",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795251/Portfolio/ezgif-4-cb1aa57202_t9sa0p.gif",
//       title: "Model-LunarLander-v2 ",
//       desc: "This is a trained model of a PPO agent playing LunarLander-v2 using the stable-baselines3 library.",
//       live: "https://huggingface.co/Pranjal-666/ppo-LunarLander-v2",
//       code: "https://huggingface.co/Pranjal-666/ppo-LunarLander-v2/tree/main",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687795315/Portfolio/project-2_lgqrrb.png",
//       title: "Potato Disease Detection",
//       desc: "Pranjal-666/Potato-leaf-disease-detection",
//       live: "https://build-10-css-projects.netlify.app/",
//       code: "https://huggingface.co/spaces/Pranjal-666/Potato-leaf-disease-detection/tree/main",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797384/Portfolio/ezgif-5-cb08677b6e_ciyf8l.gif",
//       title: "Agent playing Taxi-v3",
//       desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
//       live: "https://huggingface.co/Pranjal-666/taxi",
//       code: "https://huggingface.co/Pranjal-666/taxi/tree/main",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797620/Portfolio/project-3_cpa88f.png",
//       title: "An Chat App",
//       desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
//       live: "https://tata-chat-2.web.app/",
//       code: "https://huggingface.co/Pranjal-666/taxi/tree/main",
//     },
//     {
//       img: "https://res.cloudinary.com/dqhyudo4x/image/upload/v1687797848/Portfolio/ezgif-4-a329a1daa8_yspckw.gif",
//       title: "Agent playing FrozenLake-v1",
//       desc: "This is a trained model of a Q-Learning agent playing Taxi-v3 .",
//       live: "https://huggingface.co/Pranjal-666/q-FrozenLake-v1-4x4-noSlippery",
//       code: "https://huggingface.co/Pranjal-666/q-FrozenLake-v1-4x4-noSlippery/tree/main",
//     },
//   ];

//   return (
//     <section className="bg-primary text-white px-5 py-32" id="projects">
//       <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
//         <div className="about-info mb-5">
//           <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
//             Projects
//           </h2>

//           <p className="pb-5">
//             These are some of my best projects. I have built these with React,
//             MERN , ML, DeepLearning and Reinforcement Learning. Check them out.
//           </p>
//         </div>

//         <div className="about-img"></div>
//       </div>

//       <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
//         {projects.map((project, i) => {
//           return (
//             <div className="relative" key={i}>
//               <p className=" text-3xl font-bold m-6 ">{project.title}</p>
//               <img src={project.img} alt={project.title} className="w-72 h-72 md:w-[405px] md:h-[405px]" />
//               <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-90 ">
//                 <p className="py-5 text-center font-bold px-2 text-white">
//                   {project.desc}
//                 </p>

//                 <div className="mx-auto">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold" rel="noreferrer"
//                   >
//                     Live
//                   </a>
//                   <a
//                     href={project.code}
//                     target="_blank"
//                     className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold" rel="noreferrer"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Projects;
