import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Intro from "./Pages/Intro";
import CustomCursor from "./utils/Cursor";
import Card from "./Pages/Card";
import About from "./Pages/About";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false); // State to track visibility
  const aboutRef = useRef(null); // Reference to the About component

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use IntersectionObserver to detect when About hits the top
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        } else {
          setIsAboutVisible(false);
        }
      },
      {
        rootMargin: "0px 0px -100% 0px", // Trigger when the top of About hits the top of the viewport
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`bg-slate-900 min-h-screen w-full 2xl:px-16 box-border  selection:bg-sky-500 selection:text-black snap-container
        `}
      >
        <CustomCursor />
        <Header />
        <div className="snap-page">
          <Intro />
        </div>
        {!isMobile && isAboutVisible && <Card />}
        <div className="snap-page">
          <About ref={aboutRef} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
