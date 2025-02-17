import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsTextHovered(true);
    const handleMouseLeave = () => setIsTextHovered(false);

    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span"
    );

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="md:block hidden dark:bg-white bg-white mix-blend-difference"
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: isTextHovered ? "50px" : "20px",
          height: isTextHovered ? "50px" : "20px",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
