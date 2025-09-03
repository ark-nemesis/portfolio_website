import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BlogArchive = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=pranjal_ml")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error.message));
  });

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2 ">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((item) => {
          // console.log(item);

          return (
            <motion.div animate={{ x: [null, 100, 0] }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            transition={{ ease: "easeOut", duration: 2 }}
            layout style={{ borderRadius: 20 }}
            whileTap={{ scale: 0.9 }}
             key={item.id} >
              <a href={item.url}>
              <img src={item.cover_image} alt={item.title} className="w-64 h-64 md:w-[305px] md:h-[405px] rounded-xl" />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <div
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent w-64 hover:text-accent rounded-full"
              >
                Read More
              </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogArchive;
