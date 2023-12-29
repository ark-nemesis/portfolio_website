import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showImg1, setShowImg1] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowImg1((prev) => !prev);
        setIsAnimating(false);
      }, 1000); // 1 second animation duration
    }, 3000); // 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.section
      className="bg-secondery text-white"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-screen h-[70vh] z-0 hidden lg:block ">
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1689922556/Portfolio/home-bg_kptv17.gif"
          alt="light"
          className="w-full h-full opacity-30"
        />
      </div>
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between px-5">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={
              showImg1
                ? 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695212554/Pranjal_kubtx5-removebg-preview_mumy49.png'
                : 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695214158/WhatsApp_Image_2023-09-20_at_18.17.28-removebg-preview_aj0nue.png'
            }
            alt="coding illustration"
            className={`lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl lg:ml-36 hidden md:flex transition-opacity duration-1000 ${
              isAnimating ? 'animate-fade-out' : showImg1 ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </motion.div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Pranjal Sharma. I am Full Stack Developer & ML Enthusiast.
          </p>
          <p className="pb-5">
            I did B.E. in Computer Science from UIET, CSJM University Kanpur.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Recoil, React Native,
            Axios, Tailwind CSS, and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB.</p>
        </div>

        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={
              showImg1
                ? 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695212554/Pranjal_kubtx5-removebg-preview_mumy49.png'
                : 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695214158/WhatsApp_Image_2023-09-20_at_18.17.28-removebg-preview_aj0nue.png'
            }
            alt="coding illustration"
            className={`lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl md:ml-36 md:hidden flex transition-opacity duration-1000 ${
              isAnimating ? 'animate-fade-out' : showImg1 ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

// import React , { useState, useEffect } from "react";


// const About = () => {

//   const [showImg1, setShowImg1] = useState(true);

//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setShowImg1((prev) => !prev);
//         setIsAnimating(false);
//       }, 1000); // 1 second animation duration
//     }, 3000); // 30 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <section className="bg-secondery text-white   " id="about">
//       <div className=" absolute w-screen h-[70vh] z-0   hidden lg:block  ">
//      <img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1689922556/Portfolio/home-bg_kptv17.gif" alt="light" className=" w-full h-full opacity-30 "/>
//       </div>
//       <div className=" relative z-10 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between px-5 ">
//       <div className="about-img">
//       <img
//         src={
//           showImg1
//             ? 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695212554/Pranjal_kubtx5-removebg-preview_mumy49.png'
//             : 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695214158/WhatsApp_Image_2023-09-20_at_18.17.28-removebg-preview_aj0nue.png'
//         }
//         alt="coding illustration"
//         className={`lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl lg:ml-36  hidden md:flex transition-opacity duration-1000 ${
//           isAnimating ? 'animate-fade-out' : showImg1 ? 'opacity-100' : 'opacity-90'
//         }`}
//       />

//         </div>
//         <div className="about-info">
//           <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
//             About Me
//           </h2>

//           <p className="pb-5">
//             Hi, My Name Is Pranjal Sharma. I am Full Stack Developer & ML Enthusiast.
//             </p>
//             <p className="pb-5">I did B.E. in Computer Science from UIET , CSJM University Kanpur.
//           </p>
//           <p className="pb-5">
//             I am proficient in Frontend skills like React.js, Recoil, React Native,
//             Axios, Tailwind CSS,   and many more.
//           </p>

//           <p>In backend I know Node.js, Express.js, MongoDB.</p>

//           <p>
            
//           </p>
//         </div>

//         <div className="about-img">
//           <img
//             src={
//               showImg1
//                 ? 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695212554/Pranjal_kubtx5-removebg-preview_mumy49.png'
//                 : 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1695214158/WhatsApp_Image_2023-09-20_at_18.17.28-removebg-preview_aj0nue.png'
//             }
//             alt="coding illustration"
//             className={`lgw-[80%] md:mr-auto w-fit h-[514px] rounded-3xl md:ml-36 md:hidden flex transition-opacity duration-1000 ${
//               isAnimating ? 'animate-fade-out' : showImg1 ? 'opacity-100' : 'opacity-90'}`}
//           />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default About;
