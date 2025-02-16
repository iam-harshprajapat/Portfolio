import React from "react";
import { FiExternalLink } from "react-icons/fi";
import bloodbank from "../Images/Bloodbank.png";
const Project = () => {
  return (
    <div className="pt-16 w-full min-h-screen h-auto px-4">
      <h1 className="font-tommy text-7xl dark:text-white">Projects</h1>
      <div className="mt-10 min-h-[50vh] h-auto w-full display flex justify-center">
        <div className="w-full max-w-5xl p-4 scrollbar-hidden grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full aspect-[16/10] border-zinc-400 border-2 rounded-lg flex flex-col p-4 text-white">
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              <source
                src="https://res.cloudinary.com/driqu2cgm/video/upload/v1739728639/Campus_Link_b8kkla.3gp"
                type="video/mp4"
              />
            </video>
            <h1 className="font-tommy text-2xl mt-2">Campus Link</h1>
            <p className="font-para text-md tracking-widest">
              A university social networking platform
            </p>
            <a
              className="font-para flex gap-1 items-center text-md text-sky-600 underline-offset-2 w-24 hover:underline"
              href="https://cl-campus-link.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
            >
              Visit the site <FiExternalLink />
            </a>
          </div>
          <div className="w-full aspect-[16/10] border-zinc-400 border-2 rounded-lg flex flex-col p-4 text-white">
            <div
              style={{ backgroundImage: `url('${bloodbank}')` }}
              className="w-full h-full bg-contain bg-center bg-no-repeat"
            ></div>
            <h1 className="font-tommy text-2xl mt-2">Blood Bank</h1>
            <p className="font-para text-md tracking-widest">
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
          <div className="w-full aspect-[16/10] border-zinc-400 border-2 rounded-lg flex flex-col p-4 text-white">
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
            <h1 className="font-tommy text-2xl mt-2">
              Generic Sorting Library
            </h1>
            <p className="font-para text-md tracking-widest">
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
    </div>
  );
};

export default Project;
