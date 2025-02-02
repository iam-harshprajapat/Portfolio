import React from "react";
import bootstrap from "../ICONS/Bootstrap.svg";
import canva from "../ICONS/Canva.svg";
import chatgpt from "../ICONS/ChatGPT.svg";
import figma from "../ICONS/Figma.svg";
import git from "../ICONS/Git.svg";
import framer from "../ICONS/Framer-Motion.svg";
import mongo from "../ICONS/MongoDB.svg";
import jira from "../ICONS/Jira.svg";
import postman from "../ICONS/Postman.svg";
import tailwind from "../ICONS/TailwindCSS.svg";
import vscode from "../ICONS/VS-Code.svg";
import wireshark from "../ICONS/Wireshark.png";
import lightroom from "../ICONS/lightroom.svg";
import { easeInOut, motion } from "framer-motion";

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
      img: tailwind,
      name: "Tailwind CSS",
    },
    {
      img: canva,
      name: "Canva",
    },
    {
      img: lightroom,
      name: "Lightroom",
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
    // {
    //   img: jira,
    //   name: "Jira",
    // },
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
    <div className="h-auto min-h-screen w-full pt-16">
      <div className="h-full w-full flex flex-col gap-8 items-center">
        <div className="w-full md:pl-28 pl-0">
          <p className="dark:text-white text-4xl md:text-7xl font-tommy w-full md:text-left text-center">
            Tools I've worked with
          </p>
        </div>
        <div className="h-[65%] md:w-[60%] w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center pl-8 md:pl-10 dark:md:shadow-[0px_0px_10px] dark:shadow-white gap-4">
          {toolsArray.map((tool, idx) => (
            <motion.div
              key={idx}
              style={{
                boxShadow:
                  "inset 0px 0px 20px  rgb(255,255,255,0.04), inset 0px 0px 20px  rgb(255,255,255,0.04)",
              }}
              className="h-32 w-28 rounded-md border-[1px] border-zinc-300 dark:border-zinc-900 hover:border-zinc-900 flex flex-col justify-center items-center gap-2 select-none"
              whileHover={{ y: -10 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.35, 1.35, 1, 1],
                  rotate: [0, 0, 20, -20, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: easeInOut,
                  repeatDelay: 1,
                  times: [0, 0.2, 0.5, 0.8, 1],
                }}
                className=" dark:bg-slate-600 bg-slate-300 size-16 dark:bg-opacity-20 border-[1px] dark:border-zinc-700 border-zinc-400 flex justify-center items-center p-2"
              >
                <img src={tool.img} alt={tool.name} className="h-5 md:h-7" />
              </motion.div>
              <p className="text-md text-zinc-800 dark:text-zinc-400">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
