import React, { useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Intro from "./Pages/Intro";
import CustomCursor from "./utils/Cursor";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import TechStack from "./Pages/TechStack";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")
      ? true
      : false
  );
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={`bg-white min-h-screen w-full 2xl:px-24 box-border scroll-smooth dark:bg-black selection:bg-white selection:text-black `}
      >
        {!isMobile && <CustomCursor />}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro />
        <About />
        <Tools />
        <TechStack />
        <Project />
        <Contact />
        <Footer />
        <SnackbarProvider />
      </div>
      <Analytics />
    </>
  );
};

export default App;
