import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="2xl:px-24 md:px-20 px-4 md:h-[80vh] h-screen w-full pt-10 bg-gradient-to-bl from-[#F8DAC5] via-[#D8A76D] to-[#FFDFBD]  dark:bg-none dark:bg-black">
      <h1
        className="md:text-7xl text-4xl dark:text-white text-darkbrown font-tommy"
        data-aos="fade-right"
      >
        A Bit About me
      </h1>
      <div className="pt-5 md:pt-10 flex flex-col gap-2 justify-center w-11/12">
        <p
          className="dark:text-white text-darkbrown font-sans text-md md:text-lg font-bold"
          data-aos="slide-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          🚀 Software Engineer | Tech Explorer
        </p>
        <p
          className="dark:text-white text-darkbrown font-sans text-md"
          data-aos="slide-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-opacity="0"
        >
          Hey! I’m a Software Engineer who loves exploring new tech and
          occasionally winning battles against C & C++ memory leaks. 💥 If
          debugging is like being a detective, then I’ve solved enough
          “mysteries” to qualify for my own TV show. 🕵️‍♂️
        </p>
        <p
          className="dark:text-white text-darkbrown font-sans text-md"
          data-aos="slide-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          To mix things up, I also learned the MERN stack (MongoDB, Express,
          React, Node.js), where JavaScript keeps me on my toes. Some say it’s
          unpredictable—I call it “fun.” 🎭
        </p>
        <p
          className="dark:text-white font-sans text-darkbrown text-md"
          data-aos="slide-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          I break things (intentionally), fix them (eventually), and dream of
          writing bug-free code (one day 🤞). Let’s build something awesome—and
          hope it compiles on the first try! 🚀😂
        </p>
      </div>
    </div>
  );
};

export default About;
