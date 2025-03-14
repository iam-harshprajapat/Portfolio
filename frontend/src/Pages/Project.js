import React from "react";
import { FiExternalLink } from "react-icons/fi";
import vercel from "../ICONS/Vercel.svg";
import render from "../ICONS/Render.svg";
import bloodBank from "../Images/Bloodbank.png";
const Project = () => {
  return (
    <div className="2xl:px-24 md:px-20 px-4 md:pt-0 pt-16 w-full min-h-screen h-auto bg-gradient-to-br from-[#FFDFBD] via-[#D8A76D] to-[#F8DAC5] dark:bg-none dark:bg-black">
      <h1 className="HEADING md:text-7xl text-4xl font-tommy md:text-left text-center dark:text-white text-darkbrown">
        Project
      </h1>

      <div className="h-full w-full mt-10 p-4 flex flex-col gap-16">
        <div className="PROJECT w-full h-auto md:p-4 p-0 flex md:flex-row flex-col md:items-center justify-center gap-3 md:border-0 border-b-2 border-zinc-700 md:pb-0 pb-10 ">
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="PROJECT_CARD md:w-[45%] h-full rounded-md border-[1px] border-zinc-600"
          >
            <source
              src="https://res.cloudinary.com/driqu2cgm/video/upload/v1739728639/Campus_Link_b8kkla.3gp"
              type="video/mp4"
            />
          </video>
          <div className="PROJECT_DETAIL md:w-[45%] h-full">
            <p className="font-tommy dark:text-white text-darkbrown md:text-3xl text-xl">
              Campus Link
            </p>
            <p className="flex items-center dark:text-zinc-500 font-para tracking-wider md:text-md text-sm">
              A University Social Neworking Platform
            </p>
            <a
              className="flex items-center gap-1 dark:text-zinc-500 underline underline-offset-2 font-para tracking-wider md:text-md text-sm"
              href="https://cl-campus-link.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
            >
              Visit the site <FiExternalLink />
            </a>
            <div className="flex gap-3 mt-6">
              <div className="w-20 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <img
                  src={vercel}
                  alt="Made with Vercel"
                  className="dark:invert h-4"
                />
                <p className="text-sm font-semibold dark:text-black text-white">
                  Vercel
                </p>
              </div>
              <div className="w-22 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <img
                  src={render}
                  alt="Made with Render"
                  className="dark:invert h-5"
                />
                <p className="text-sm font-semibold dark:text-black text-white">
                  Render
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="PROJECT w-full h-auto flex md:flex-row flex-col-reverse md:items-center justify-center gap-3 md:border-0 border-b-2 border-zinc-700 md:pb-0 pb-10">
          <div className="PROJECT_DETAIL md:w-[45%] h-full flex flex-col md:items-end items-start md:pr-10">
            <p className="font-tommy dark:text-white text-darkbrown md:text-3xl text-xl md:text-right">
              Generic Sorting Library
            </p>
            <p className="dark:text-zinc-500 font-para tracking-wider md:text-md text-sm">
              Having over 17+ sorting algorithms
            </p>
            <a
              className="flex items-center gap-1 dark:text-zinc-500 underline underline-offset-2 md:text-md text-sm font-para tracking-wider"
              href="https://github.com/iam-harshprajapat/Generic-Sorting-Algorithm-library-in-C-CPP"
              rel="noreferrer noopener"
              target="_blank"
            >
              View Source Code <FiExternalLink />
            </a>
            <div className="flex md:gap-3 gap-1 mt-6 md:flex-row flex-col">
              <div className="w-32 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <p className="text-sm font-semibold dark:text-black text-white">
                  C Programming
                </p>
              </div>
              <div className="w-32 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <p className="text-sm font-semibold dark:text-black text-white">
                  C++ Programming
                </p>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="PROJECT_CARD md:w-[45%] h-full rounded-md"
          >
            <source
              src="https://res.cloudinary.com/driqu2cgm/video/upload/v1739728700/generic_c_mrhoa1.3gp"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="PROJECT w-full h-auto md:p-4 flex md:flex-row flex-col md:items-center justify-center gap-3">
          <img
            src={bloodBank}
            alt="bloodbank"
            className="PROJECT_CARD md:w-[45%] md:pr-10 h-full rounded-md"
          />
          <div className="PROJECT_DETAIL md:w-[45%] h-full">
            <p className="font-tommy dark:text-white text-darkbrown md:text-3xl text-xl">
              Blood Bank
            </p>
            <p className="flex items-center dark:text-zinc-500 font-para tracking-wider md:text-md text-sm">
              A Blood Bank management website
            </p>
            <a
              className="flex items-center gap-1 dark:text-zinc-500 underline underline-offset-2 md:text-md text-sm font-para tracking-wider"
              href="https://blood-bank-harsh-prajapat.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
            >
              Visit the site <FiExternalLink />
            </a>
            <div className="flex gap-3 mt-6">
              <div className="w-20 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <img
                  src={vercel}
                  alt="Made with Vercel"
                  className="dark:invert h-4"
                />
                <p className="text-sm font-semibold dark:text-black text-white">
                  Vercel
                </p>
              </div>
              <div className="w-22 h-6 p-1 flex items-center justify-center gap-2 dark:bg-white bg-darkbrown rounded-md">
                <img
                  src={render}
                  alt="Made with Render"
                  className="dark:invert h-5"
                />
                <p className="text-sm font-semibold dark:text-black text-white">
                  Render
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
