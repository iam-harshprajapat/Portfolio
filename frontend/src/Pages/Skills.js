import React from "react";
import reactIcon from "../Assets/images/REACTICON.png";
import CPP from "../Assets/images/CPP.png";
import C from "../Assets/images/C.png";
import JS from "../Assets/images/JS.png";
import DS from "../Assets/images/DS.png";
import { motion } from "motion/react";

const Skills = () => {
    return (
        <div className="flex flex-col gap-28 items-center mt-36 w-full">
            <p className="text-3xl font-redhat text-white font-semibold">
                Technical Skills
            </p>
            <div className="w-full flex gap-14 justify-center px-10 ">
                <motion.div
                    className="bg-white size-44 rounded-md bg-opacity-20 flex justify-center items-center"
                    animate={{ y: [0, -60, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <img src={C} alt="C Programming" className="h-44" />
                </motion.div>
                <motion.div
                    className="bg-white size-44 rounded-md bg-opacity-20 flex justify-center items-center"
                    animate={{ y: [0, -60, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.4
                    }}
                >
                    <img src={CPP} alt="CPP" className="h-36" />
                </motion.div>
                <motion.div
                    className="bg-white size-44 rounded-md bg-opacity-20 flex justify-center items-center"
                    animate={{ y: [0, -60, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.8
                    }}
                >
                    <img src={DS} alt="DS" className="h-40" />
                </motion.div>
                <motion.div
                    className="bg-white size-44 rounded-md bg-opacity-20 flex justify-center items-center"
                    animate={{ y: [0, -60, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 1.2
                    }}
                >
                    <img src={JS} alt="JS" className="h-32" />
                </motion.div>
                <motion.div
                    className="bg-white size-44 rounded-md bg-opacity-20 flex justify-center items-center"
                    animate={{ y: [0, -60, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 1.6
                    }}
                >
                    <img src={reactIcon} alt="REACT" className="h-40" />
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
