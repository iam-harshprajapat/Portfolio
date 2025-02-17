import React from "react";
import harsh from "../Images/harsh.png";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Intro = () => {
  const pdfURL = "/Harsh_Prajapat_Resume.pdf";
  const openResume = (e) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,nonreferrer");
  };

  const baseText = "I'am Harsh Prajapat";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.7,
      ease: "easeInOut",
    });
    return controls.stop;
    // eslint-disable-next-line
  }, []);
  return (
    <div className="relative h-screen pt-16 w-full flex flex-col items-center dark:bg-black">
      <div className=" h-[92%] w-full flex md:flex-row flex-col justify-center gap-2">
        <motion.img
          onContextMenu={(e) => e.preventDefault()}
          className="IMAGE md:h-full h-[90%] dark:opacity-60 opacity-100 md:static absolute select-none "
          src={harsh}
          alt="bg"
          animate={{ opacity: [0, 0.6] }}
          transition={{ duration: 2 }}
        />
        <div className=" md:w-1/2 w-full flex flex-col md:justify-center pl-4 md:pl-0 z-[1]">
          <p className="dark:text-white text-darkbrown text-3xl md:text-7xl font-tommy w-1/3">
            Hello,
          </p>
          <span>
            <motion.p className="dark:text-white text-darkbrown text-3xl md:text-7xl font-tommy">
              {displayText}
            </motion.p>
          </span>
          <p className="PARAGRAPH dark:text-white font-sans text-darkbrown dark:opacity-90  md:text-base text-sm  w-3/4 mt-3 md:mt-6">
            Welcome to my portfolio! Explore my journey, skills, and projects
            that reflect my passion and dedication. Feel free to browse around
            and connect. Your feedback and interest mean a lot – thank you for
            visiting!
          </p>
          <button
            onClick={openResume}
            className="w-24 md:w-28 rounded-md h-8 md:h-10 font-semibold text-sm md:text-md dark:text-white text-darkbrown border-2 mt-2 md:mt-4 cursor-pointer dark:hover:bg-white hover:bg-darkbrown dark:hover:text-black hover:text-golden dark:border-white border-darkbrown"
          >
            View Resume
          </button>
        </div>
      </div>
      <motion.span
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <IoIosArrowDown className="text-2xl dark:text-white text-darkbrown font-bold" />
      </motion.span>
    </div>
  );
};

export default Intro;
