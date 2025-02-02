import React from "react";
import CProgramming from "../ICONS/C.png";
import CppProgramming from "../ICONS/CPP.png";
import reactIcon from "../ICONS/React.svg";
import dataStructure from "../ICONS/DS.png";
import js from "../ICONS/JS.svg";
import html from "../ICONS/HTML.svg";
import css from "../ICONS/CSS.svg";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint for md
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const technologies = [
    { img: CProgramming, name: "Programming" },
    { img: dataStructure, name: "Data Structures" },
    { img: CppProgramming, name: "Programming" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: reactIcon, name: "React" },
  ];

  return (
    <div className="pt-16 min-h-screen h-auto w-full">
      <div className="w-full h-full flex flex-col md:gap-6 gap-20">
        <p className="pl-10 dark:text-white text-black text-4xl md:text-7xl font-tommy">
          Technologies <br />I have worked on...
        </p>
        <div className="w-full md:h-64 h-auto px-10 grid items-center place-items-center grid-cols-2 md:grid-cols-7 gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              animate={
                isMobile
                  ? { rotate: [-5, 5] } // Mobile: Rotation effect
                  : { y: [-40, 0, -40] } // Desktop: Bounce effect
              }
              transition={
                isMobile
                  ? {
                      duration: 2,
                      delay: 0,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  : {
                      duration: 2,
                      delay: idx * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className={`size-28 border-[1px] border-slate-700 rounded-md flex flex-col gap-2 justify-center items-center bg-slate-900 bg-opacity-60
        ${
          idx === technologies.length - 1
            ? "md:col-span-1 col-span-2 md:justify-self-auto  justify-self-center"
            : ""
        }`}
            >
              <img src={tech.img} alt={tech.name} className="h-16" />
              <p className="dark:text-white text-sm text-center">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
