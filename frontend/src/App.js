import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Intro from "./Pages/Intro";
import CustomCursor from "./utils/Cursor";
import About from "./Pages/About";
import Tools from "./Pages/Tools";

const App = () => {
  return (
    <>
      <div
        className={`bg-black min-h-screen w-full 2xl:px-24 box-border  selection:bg-white selection:text-black snap-container
        `}
      >
        <CustomCursor />
        <Header />
        <div className="snap-page">
          <Intro />
        </div>
        <div className="snap-page">
          <About />
        </div>
        <div className="snap-page">
          <Tools />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
