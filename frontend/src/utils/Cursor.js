import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Add event listeners for detecting text hover
  useEffect(() => {
    const handleMouseEnter = () => setIsTextHovered(true);
    const handleMouseLeave = () => setIsTextHovered(false);

    // Select all text elements (e.g., paragraphs, headings)
    const textElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span"
    );

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: isTextHovered ? "50px" : "20px", // Larger cursor on hover
          height: isTextHovered ? "50px" : "20px", // Larger cursor on hover
          backgroundColor: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease", // Smooth resizing
        }}
      />
    </>
  );
};

export default CustomCursor;
