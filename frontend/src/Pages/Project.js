import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Campus_Link from "../Videos/Campus_Link.mp4";
const Project = () => {
  return (
    <div className="pt-16 w-full min-h-screen h-auto px-4">
      <h1 className="font-tommy text-7xl dark:text-white">Projects</h1>
      <div className="mt-10 min-h-[50vh] h-auto w-full display flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-5xl p-4 scrollbar-hidden">
          <div className="w-full aspect-[16/10] border-zinc-400 border-2 rounded-lg flex flex-col p-4 text-white">
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={Campus_Link} type="video/mp4" />
            </video>
            <h1 className="font-tommy text-2xl mt-2">Campus Link</h1>
            <p className="font-para text-md tracking-widest">
              A university social networking platform
            </p>
            <a
              className="font-para flex gap-1 items-center text-md text-sky-600 underline underline-offset-2 w-24"
              href="https://cl-campus-link.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
            >
              Visit the site <FiExternalLink />
            </a>
          </div>
          <div className="w-full aspect-[16/10] border-zinc-400 border-2 rounded-lg flex flex-col p-4 text-white">
            <video
              controls
              autoPlay
              loop
              muted
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="text-white"
            >
              <source src="df.mp4" type="video/mp4" />
              Video Loading Soon...
            </video>
            <h1 className="font-tommy text-2xl mt-2">Blood Bank</h1>
            <p className="font-para text-md tracking-widest">
              A blood bank management system
            </p>
            <a
              className="font-para flex gap-1 items-center text-md text-sky-600 underline underline-offset-2 w-24"
              href="https://blood-bank-harsh-prajapat.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
            >
              Visit the site <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
