import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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

  return (
    <>
      {/* Custom cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "16px",
          height: "16px",
          backgroundColor: "rgb(14,165,233)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          transition:
            "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
