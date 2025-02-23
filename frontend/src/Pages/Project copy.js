import React from "react";
import { FiExternalLink } from "react-icons/fi";
import bloodbank from "../Images/Bloodbank.png";
const Project = () => {
  return (
    <div className="2xl:px-24 md:px-20 px-4 pt-16 w-full min-h-screen h-auto  bg-gradient-to-br from-[#FFDFBD] via-[#D8A76D] to-[#F8DAC5]   dark:bg-none dark:bg-black">
      <h1 className="font-tommy md:text-7xl text-4xl md:text-left text-center dark:text-white text-darkbrown">
        Projects
      </h1>
      <div className="w-full flex flex-col gap-16 justify-center items-center mt-10">
        <div className="flex flex-col h-[400px] w-5/6 p-4 dark:border-zinc-400 border-darkbrown border-2 rounded-lg text-white ">
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="h-3/4"
          >
            <source
              src="https://res.cloudinary.com/driqu2cgm/video/upload/v1739728639/Campus_Link_b8kkla.3gp"
              type="video/mp4"
            />
          </video>
          <h1 className="font-tommy text-2xl mt-2 dark:text-white text-darkbrown">
            Campus Link
          </h1>
          <p className="font-para text-md dark:text-zinc-400 text-darkbrown tracking-widest">
            A university social networking platform
          </p>
        </div>
        <div className="w-full aspect-[16/10] dark:border-zinc-400 border-darkbrown border-2 rounded-lg flex flex-col p-4 text-white">
          <div
            style={{ backgroundImage: `url('${bloodbank}')` }}
            className="w-full h-full bg-contain bg-center bg-no-repeat"
          ></div>
          <h1 className="font-tommy text-2xl mt-2 dark:text-white text-darkbrown">
            Blood Bank
          </h1>
          <p className="font-para text-md tracking-widest dark:text-zinc-400 text-darkbrown">
            A blood bank management system
          </p>
          <a
            className="font-para flex gap-1 items-center text-md text-sky-600 hover:underline underline-offset-2 w-24"
            href="https://blood-bank-harsh-prajapat.vercel.app"
            rel="noreferrer noopener"
            target="_blank"
          >
            Visit the site <FiExternalLink />
          </a>
        </div>
        <div className="w-full aspect-[16/10] dark:border-zinc-400 border-darkbrown border-2 rounded-lg flex flex-col p-4 text-white">
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          >
            <source
              src="https://res.cloudinary.com/driqu2cgm/video/upload/v1739728700/generic_c_mrhoa1.3gp"
              type="video/mp4"
            />
          </video>
          <h1 className="font-tommy text-2xl mt-2 dark:text-white text-darkbrown ">
            Generic Sorting Library
          </h1>
          <p className="font-para text-md tracking-widest dark:text-zinc-400 text-darkbrown">
            Having over 17+ generic sorting algorithms
          </p>
          <a
            className="font-para flex gap-1 items-center text-md text-sky-600 underline-offset-2 w-34 hover:underline"
            href="https://github.com/iam-harshprajapat/Generic-Sorting-Algorithm-library-in-C-CPP"
            rel="noreferrer noopener"
            target="_blank"
          >
            View Source Code <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
