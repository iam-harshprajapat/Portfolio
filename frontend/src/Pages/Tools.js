import React from "react";
import bootstrap from "../Assets/images/ICONS/Bootstrap.svg";
import canva from "../Assets/images/ICONS/Canva.svg";
import chatgpt from "../Assets/images/ICONS/ChatGPT.svg";
import figma from "../Assets/images/ICONS/Figma.svg";
import git from "../Assets/images/ICONS/Git.svg";
import framer from "../Assets/images/ICONS/Framer-Motion.svg";
import mongo from "../Assets/images/ICONS/MongoDB.svg";
import jira from "../Assets/images/ICONS/Jira.svg";
import postman from "../Assets/images/ICONS/Postman.svg";
import tailwind from "../Assets/images/ICONS/TailwindCSS.svg";
import vscode from "../Assets/images/ICONS/VS-Code.svg";
import wireshark from "../Assets/images/ICONS/Wireshark.png";
// import jmeter from "../Assets/images/ICONS/Jmeter.svg";
// import lightroom from "../Assets/images/ICONS/Lightroom.svg";
// import virtualbox from "../Assets/images/ICONS/VirtualBox.svg";
import { motion } from "framer-motion";

const Tools = () => {
  const toolsArray = [
    {
      img: postman,
      name: "Postman",
    },
    {
      img: bootstrap,
      name: "Bootstrap",
    },
    {
      img: canva,
      name: "Canva",
    },
    {
      img: git,
      name: "Git",
    },
    {
      img: chatgpt,
      name: "ChatGPT",
    },
    {
      img: figma,
      name: "Figma",
    },
    {
      img: framer,
      name: "Framer",
    },
    {
      img: mongo,
      name: "MongoDB",
    },
    {
      img: jira,
      name: "Jira",
    },
    {
      img: vscode,
      name: "VS Code",
    },
    {
      img: wireshark,
      name: "Wireshark",
    },
  ];

  return (
    <div className="h-screen w-full pt-16 md:pl-[27%]">
      <div className="h-full w-full flex flex-col gap-8 items-center">
        <p className="text-sky-500 underline underline-offset-8 text-2xl md:text-3xl font-semibold mt-9">
          Tools I've worked with
        </p>
        <div className="h-[65%] w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center md:pl-10 md:shadow-[0px_0px_10px] shadow-slate-800 gap-x-8">
          {toolsArray.map((tool, idx) => (
            <motion.div
              key={idx}
              className="CARD bg-white h-11 w-36 md:h-14 gap-3 md:gap-4 md:w-44 flex rounded-lg p-4 items-center"
              animate={{ x: [-20, 0], y: [300, 0] }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={tool.img} alt={tool.name} className="h-5 md:h-8" />
              <p className="text-md md:text-lg font-semibold">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
