import React, { useState } from 'react';
import signature from './Assets/images/signature.png';
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

const App = () => {

    return (
        <>
            <div className='bg-slate-900 h-screen w-full'>
                {/* Header */}
                <div className='flex items-center p-4 justify-between'>
                    <img src={signature} className='invert h-9 animate-in slide-in-from-left duration-1000' alt="Harsh Prajapat" />
                    <div className='flex gap-5 animate-in slide-in-from-right duration-1000'>
                        <AiFillLinkedin className='invert text-2xl cursor-pointer hover:scale-110 transition duration-400' />
                        <FaGithub className='invert text-2xl cursor-pointer hover:scale-110 transition duration-400' />
                    </div>
                </div>
                <div className='h-auto w-full'>
                    <div className='flex flex-col items-center mt-40'>
                        <p className='text-white text-3xl md:text-5xl font-mono font-extrabold text-center motion-preset-confetti duration-1000'>
                            Hii! This is Harsh Prajapat
                        </p>
                        <div className='mt-8 lg:w-2/4'>
                            <p className='text-blue-400 lg:text-xl font-mono font-bold text-center'>Hello World!</p>
                            <p className='text-white font-mono text-center mt-2 lg:text-lg'>
                                Welcome to my portfolio! Explore my journey, skills, and projects that reflect my passion and dedication. Feel free to browse around and connect. Your feedback and interest mean a lot – thank you for visiting!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
