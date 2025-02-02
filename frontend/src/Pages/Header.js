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

  // Function to toggle dark mode with animation effect
  const handleThemeChange = (event) => {
    // Get the button position
    const rect = event.target.getBoundingClientRect();
    setCirclePosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setCircleVisible(true); // Show expanding circle
    setTimeout(() => {
      setDarkMode(!darkMode); // Toggle theme after animation
      setTimeout(() => {
        setCircleVisible(false); // Hide circle after transition
      }, 500);
    }, 500);
  };

  return (
    <>
      {/* Expanding Circle (Covers Full Screen) */}
      {circleVisible && (
        <motion.div
          className="fixed rounded-full bg-black dark:bg-white"
          style={{
            top: circlePosition.y,
            left: circlePosition.x,
            width: "50px",
            height: "50px",
            transform: "translate(-50%, -50%)",
            zIndex: 50, // Ensures it appears above content
          }}
          animate={{
            scale: [0, 100], // Expands to cover the screen
            opacity: [1, 0],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      )}

      <div className="w-full h-16 flex items-center p-4 justify-between fixed bg-white dark:bg-black top-0 z-10">
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
            {/* Dark Mode Toggle Button */}
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

          <a href="https://www.linkedin.com/in/harsh-prajapat-in/">
            <AiFillLinkedin className="dark:invert text-3xl cursor-pointer" />
          </a>
          <FaGithub className="dark:invert text-3xl cursor-pointer" />
        </motion.div>
      </div>
    </>
  );
};

export default Header;
