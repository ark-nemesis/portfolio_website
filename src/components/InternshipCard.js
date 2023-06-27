import React from "react";

const InternshipCard = () => {
  const experience = [
    {
      name: "Psytech",
      logo:
        "https://psytech.ai/assets/images/image01.png?v=c4e0f564",
      role: "Product Engineering Intern",
      desc:
        "As a Product Engineering Intern at PsyTech, I contributed to several projects, including the development of a news aggregator app. During my time there, I worked on full-stack development of the app as a native application and conducted a sensitivity analysis on various machine learning models.",
    },
    {
      name: "Apes AI",
      logo: "https://apesai.in/wp-content/uploads/2021/02/cropped-11.png",
      role: "ML Intern",
      desc:
        "Worked on building Numbers of Data Sets, & done preprocessing and data wrangling on it. Using Pandas & Numpy for data preprocessing & wrangling, Clean it & make it ready to use on different ML models. Worked on Traffic Violation Detection using the YOLO algorithm, which detects traffic violations such as Red light jumping, Seat belt & Helmet worn or not, etc.",
    },
    {
      name: "TATA Groups",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tDbX0MUpi6mlppE_QhH1fCNiaSznEt1j1GYNOq__Bw&s",
      role: "SDE Intern",
      desc:
        "Developed the Reward & Recognition System(R&R).For the employees using React, HTML, CSS, and JavaScript. Created the complete UI/UX for the R&R system, used the Real-Time Database of Firebase as Database, also used the Firebase authentication system for user authentication, and also host it using Firebase Hosting services.",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="Internship">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-4 border-indigo-600 pb-2">
            Internship & Experience
          </h2>

          <p className="pb-5">These are my Experiences:</p>

          {/* Render internship cards */}
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg px-6 py-4 mb-6"
            >
              <div className="flex items-center mb-3">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src={item.logo}
                  alt={item.name}
                />
                <div>
                  <h3 className=" text-black text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-img"><img
            src={"https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif"}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          /> </div>
      </div>
    </section>
  );
};

export default InternshipCard;
