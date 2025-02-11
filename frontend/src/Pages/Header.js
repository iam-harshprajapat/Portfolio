import React, { useState } from "react";
import signature from "../Images/signature.png";
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";

const Header = ({ darkMode, setDarkMode }) => {
  const [circleVisible, setCircleVisible] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleThemeChange = (event) => {
    const rect = event.target.getBoundingClientRect();
    setCirclePosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setCircleVisible(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => {
        setCircleVisible(false);
      }, 500);
    }, 500);
  };

  return (
    <>
      {circleVisible && (
        <motion.div
          className="w-full fixed rounded-full bg-black dark:bg-white bg"
          style={{
            top: circlePosition.y,
            left: circlePosition.x,
            width: "50px",
            height: "50px",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
          }}
          animate={{
            scale: [0, 100],
            opacity: [1, 0],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      )}
      <div className="w-full h-16 flex items-center p-4 justify-between fixed bg-white dark:bg-black left-0 top-0 z-10">
        <motion.img
          src={signature}
          className="dark:invert h-9 md:h-11 select-none"
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
          <div className="relative">
            {darkMode ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                <IoSunny
                  onClick={handleThemeChange}
                  className="text-white text-3xl cursor-pointer relative z-10"
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{ rotate: [-10, 0, 10] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <IoMdMoon
                  onClick={handleThemeChange}
                  className="text-black text-3xl cursor-pointer relative z-10"
                />
              </motion.div>
            )}
          </div>

          <a
            href="https://www.linkedin.com/in/harsh-prajapat-in/"
            target="_blank"
            rel="noopener noreffer"
          >
            <AiFillLinkedin className="dark:invert text-3xl cursor-pointer" />
          </a>
          <a
            href="https://github.com/iam-harshprajapat"
            target="_blank"
            rel="noopener noreffer"
          >
            <FaGithub className="dark:invert text-3xl cursor-pointer" />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
