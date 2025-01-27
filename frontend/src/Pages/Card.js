import React from "react";
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = () => {
  const pdfURL = "../../PDF/Harsh_Prajapat_Resume.pdf";
  const openResume = (e) => {
    e.preventDefault();
    window.open(pdfURL, "_blank", "noopener,nonreferrer");
  };
  return (
    <motion.div
      className="h-[70%] absolute bg-[rgb(177_194_158)] w-[22%] rounded-md translate-y-[-50%] top-[50%] translate-x-[8%] flex flex-col justify-center items-center shadow-md"
      animate={{ x: [-80, 20], y: [-200] }}
      transition={{ delay: 0 }}
    >
      <motion.div
        className="bg-[url('./Assets/images/harsh.jpg')] lg:size-36 bg-cover bg-center rounded-full border-4 border-sky-500 "
        initial={{ x: 500, y: -500, scale: 1.6 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        exit={{ x: 500, y: -500 }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <motion.p
        className=" text-sky-500 text-3xl font-bold font-redhat text-center mt-3"
        initial={{ x: 500, y: -500 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Harsh Prajapat
      </motion.p>
      <p className="mt-1 font-semibold text-md">
        Software Engineer Intern
        <a
          href="https://www.digivalet.com/"
          className="font-bold pl-1 text-slate-800"
        >
          @DigiValet
        </a>
      </p>
      <div className=" w-full flex justify-center">
        <motion.button
          className="bg-sky-500 h-10 w-28 rounded-md font-semibold font-redhat text-white select-none mt-3"
          onClick={openResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 500, y: -500 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          RESUME
        </motion.button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <FaGithub className="text-3xl cursor-pointer text-sky-500" />
        <AiFillLinkedin className="text-3xl cursor-pointer text-sky-500" />
        <FaInstagramSquare className="text-3xl cursor-pointer  text-sky-500" />
      </div>
    </motion.div>
  );
};

export default Card;
