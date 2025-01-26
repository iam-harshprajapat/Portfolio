import { motion } from "framer-motion";
const Intro = () => {
  const openResume = () => {
    window.open("http://surl.li/wkifed", "_blank");
  };
  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="bg-[url('./Assets/images/harsh.jpg')] size-36 lg:size-48 bg-cover bg-center rounded-full border-2 border-sky-500"></div>
          <motion.p
            className=" text-white text-3xl md:text-5xl font-semibold font-roboto text-center mt-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hii! I'm <span className="text-sky-400">Harsh Prajapat</span>
          </motion.p>
          <div className="lg:w-2/4 mt-3">
            <motion.p
              className="text-sky-500 md:text-3xl text-xl font-mono font-bold text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Hello World!
            </motion.p>
            <motion.p
              className="text-white font-redhat font-thin text-center text-md md:text-lg mt-2"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Welcome to my portfolio! Explore my journey, skills, and projects
              that reflect my passion and dedication. Feel free to browse around
              and connect. Your feedback and interest mean a lot – thank you for
              visiting!
            </motion.p>
          </div>
          <div className=" w-full flex justify-center">
            <motion.button
              className="bg-sky-500 h-10 w-28 rounded-md font-semibold font-redhat text-white select-none mt-3"
              onClick={() => {
                openResume();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              RESUME
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
