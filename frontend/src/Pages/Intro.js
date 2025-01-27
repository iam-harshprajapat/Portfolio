import React from "react";
import harsh from "../Assets/images/Harsh.png";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const pdfURL = "../../PDF/Harsh_Prajapat_Resume.pdf";
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
  }, []);
  return (
    <div className="relative h-screen w-full flex pt-20">
      <img
        className="IMAGE absolute md:h-screen top-64 left-20 md:top-12 opacity-60 md:left-2 transform -scale-x-100 md:scale-x-100"
        src={harsh}
        alt="bg"
      />
      <div className="h-full md:w-1/3 w-0"></div>
      <div className="h-full flex-1 z-10 flex flex-col md:justify-start justify-center md:pl-0 pl-3">
        <p className="text-white text-4xl md:text-7xl font-tommy w-44">
          Hello,
        </p>
        <span>
          <motion.p className="text-white text-4xl md:text-7xl font-tommy md:w-3/4">
            {displayText}
          </motion.p>
        </span>
        <p className="PARAGRAPH text-white w-1/2 mt-6">
          Welcome to my portfolio! Explore my journey, skills, and projects that
          reflect my passion and dedication. Feel free to browse around and
          connect. Your feedback and interest mean a lot – thank you for
          visiting!
        </p>
        <button
          onClick={openResume}
          className="w-28 rounded-md h-10 font-semibold text-white border-2 mt-4 cursor-pointer hover:bg-white hover:text-black"
        >
          View Resume
        </button>
        <motion.div
          className="self-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IoIosArrowDown className="text-white text-2xl " />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
