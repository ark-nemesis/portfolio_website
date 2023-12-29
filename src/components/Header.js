import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  // Variants for animations
  const mobileNavVariants = {
    hidden: { left: "-100%" },
    visible: { left: 0 },
  };

  const toggleButtonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-50">
      <a href="/" className="logo text-2xl sm:text-5xl font-bold text-accent">
        Pranjal
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#internship">Experience</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7105853049700532224/"
              target="_blank"
              without
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/12SKUnxSkwmjgzv1B1nAYAhJLjPjp8Xqt/view?usp=sharing"
              target="_blank"
              without
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <motion.nav
        className="mobile-nav"
        initial="hidden"
        animate={toggle ? "visible" : "hidden"}
        variants={mobileNavVariants}
      >
        <AnimatePresence>
          {toggle && (
            <ul className="flex flex-col">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#blog">Blog</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#resume">Resume</a>
              </li>
            </ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Toggle button */}
      <motion.button
        onClick={handleToggle}
        className="block md:hidden"
        variants={toggleButtonVariants}
        initial="hidden"
        animate="visible"
      >
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </motion.button>
    </header>
  );
};

export default Header;


// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => setToggle(!toggle);

//   return (
//     <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-50">
//       <a href="/" className="logo text-2xl sm:text-5xl font-bold text-accent">
//         Pranjal
//       </a>

//       {/* Desktop Nav */}
//       <nav className="hidden md:block">
//         <ul className="flex">
//           <li>
//             <a href="/#about">About</a>
//           </li>
//           <li>
//             <a href="/#projects">Projects</a>
//           </li>
//           <li>
//             <a href="/#internship">Experience</a>
//           </li>
//           <li>
//             <a href="/#contact">Contact</a>
//           </li>
//           <li>
//             <a
//               href="https://www.linkedin.com/feed/update/urn:li:activity:7105853049700532224/"
//               target="_blank"
//               without
//               rel="noreferrer"
//             >
//               Blog
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://drive.google.com/file/d/12SKUnxSkwmjgzv1B1nAYAhJLjPjp8Xqt/view?usp=sharing"
//               target="_blank"
//               without
//               rel="noreferrer"
//             >
//               Resume
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Nav */}
//       <nav
//         className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
//       >
//         <ul className="flex flex-col">
//           <li>
//             <a href="/#about">About</a>
//           </li>
//           <li>
//             <a href="/#projects">Projects</a>
//           </li>
//           <li>
//             <a href="/#blog">Blog</a>
//           </li>
//           <li>
//             <a href="/#contact">Contact</a>
//           </li>
//           <li>
//             <a href="/#resume">Resume</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Toggle button */}
//       <button onClick={handleToggle} className="block md:hidden">
//         {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
//       </button>
//     </header>
//   );
// };

// export default Header;
