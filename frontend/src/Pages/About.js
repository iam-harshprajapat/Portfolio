import React from "react";
const About = () => {
  return (
    <div className="h-screen w-full pt-16">
      <h1 className="md:ml-16 ml-4 md:mt-16 md:text-7xl text-4xl dark:text-white font-tommy ">
        A Bit About me
      </h1>
      <div className="md:pl-16 pl-4 pt-5 md:pt-10 flex flex-col gap-2 justify-center w-11/12">
        <p className="dark:text-white font-sans text-md md:text-lg font-bold">
          🚀 Software Engineer | Tech Explorer
        </p>
        <p className="dark:text-white font-sans text-md">
          Hey! I’m a Software Engineer who loves exploring new tech and
          occasionally winning battles against C & C++ memory leaks. 💥 If
          debugging is like being a detective, then I’ve solved enough
          “mysteries” to qualify for my own TV show. 🕵️‍♂️
        </p>
        <p className="dark:text-white font-sans text-md">
          To mix things up, I also learned the MERN stack (MongoDB, Express,
          React, Node.js), where JavaScript keeps me on my toes. Some say it’s
          unpredictable—I call it “fun.” 🎭
        </p>
        <p className="dark:text-white font-sans text-md">
          I break things (intentionally), fix them (eventually), and dream of
          writing bug-free code (one day 🤞). Let’s build something awesome—and
          hope it compiles on the first try! 🚀😂
        </p>
      </div>
    </div>
  );
};

export default About;
