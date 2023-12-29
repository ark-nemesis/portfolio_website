import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32 flex flex-col justify-center items-center lg:flex-row " id="contact" >
      <img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1689486616/Portfolio/tier-animation-transparent_i1hc07.gif" alt="contact" className=" w-72 h-72 lg:w-96 lg:h-96" />
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer & ML Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> pranjal1476772@gmail.com || pranjal.software.engineer@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 7895336610
        </p>
      </div>
    </section>
  );
};

export default Contact;
