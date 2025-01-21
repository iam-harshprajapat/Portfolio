import React from 'react';
import signature from './Assets/images/signature.png';
import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from 'motion/react';
import Skills from './Pages/Skills';
const App = () => {
    const openResume = () => {
        window.open("http://surl.li/wkifed", "_blank");
    }
    return (
        <>
            <div className='bg-slate-900 min-h-screen w-full pb-10'>
                {/* Header */}
                <div className='flex items-center p-4 justify-between'>
                    <motion.img src={signature} className='invert h-9 md:h-11' alt="Harsh Prajapat" initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} />
                    <motion.div className='flex gap-3 md:gap-5' initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 1 }} >
                        <AiFillLinkedin className='invert text-3xl cursor-pointer' />
                        <FaGithub className='invert text-3xl cursor-pointer' />
                    </motion.div>
                </div>
                <div className='h-auto w-full'>
                    <div className='flex flex-col items-center mt-16 md:mt-20' >
                        <div className="bg-[url('./Assets/images/harsh.jpg')] size-36 lg:size-48 bg-cover bg-center rounded-full border-2 "></div>
                        <motion.p className=' text-white text-3xl md:text-5xl font-semibold font-roboto text-center mt-4' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                            Hii! I'm Harsh Prajapat
                        </motion.p>
                        <div className='mt-8 lg:w-2/4'>
                            <motion.p className='text-red-500 md:text-3xl text-xl font-mono font-bold text-center' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>Hello World!</motion.p>
                            <motion.p className='text-white font-redhat font-thin text-center mt-2 text-md md:text-lg' initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }}>
                                Welcome to my portfolio! Explore my journey, skills, and projects that reflect my passion and dedication. Feel free to browse around and connect. Your feedback and interest mean a lot – thank you for visiting!
                            </motion.p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-center mt-6 '>
                        <motion.button className='bg-red-500 h-10 w-28 rounded-md font-semibold font-redhat text-white select-none' onClick={() => { openResume() }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.25 }}>RESUME</motion.button>
                    </div>
                </div>
                <Skills />
            </div >
        </>
    );
};

export default App;
