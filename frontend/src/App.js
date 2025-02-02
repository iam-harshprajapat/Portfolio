import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Intro from "./Pages/Intro";
import CustomCursor from "./utils/Cursor";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import TechStack from "./Pages/TechStack";

const App = () => {
  // Fix: Convert stored value to a boolean
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // Apply theme on mount and when theme changes
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
        <CustomCursor />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro />
        <About />
        <Tools />
        <TechStack />
        <Footer />
      </div>
    </>
  );
};

export default App;
