import React from "react";
import signature from "../Assets/images/signature.png";
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center p-4 justify-between sticky top-0 shadow-[10px_10px_10px_rgba(15,23,42.0.8)] bg-slate-900">
      <motion.img
        src={signature}
        className="invert h-9 md:h-11 select-none"
        alt="Harsh Prajapat"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="flex gap-3 md:gap-5"
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <AiFillLinkedin className="invert text-3xl cursor-pointer" />
        <FaGithub className="invert text-3xl cursor-pointer" />
      </motion.div>
    </div>
  );
};

export default Header;
