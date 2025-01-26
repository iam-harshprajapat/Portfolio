import React, { forwardRef, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = forwardRef((prop, ref) => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: false,
    margin: "0px 0px -20% 0px",
  });
  const textInView = useInView(textRef, {
    once: false,
    margin: "0px 0px -20% 0px",
  });

  const headingControl = useAnimation();
  const textControl = useAnimation();

  useEffect(() => {
    if (headingInView) {
      headingControl.start("visible");
    } else {
      headingControl.start("hidden");
    }
  }, [headingInView, headingControl]);

  useEffect(() => {
    if (textInView) {
      textControl.start("visible");
    } else {
      textControl.start("hidden");
    }
  }, [textInView, textControl]);

  return (
    <div ref={ref} className="h-screen w-full pt-16 md:pl-[27%]">
      <motion.div className="h-full w-full flex flex-col gap-20 md:pl-16 ">
        <motion.p
          ref={headingRef}
          className="text-sky-500 underline underline-offset-8 text-2xl md:text-3xl font-semibold mt-9 text-center"
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={headingControl}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.p>
        <div className="w-[85%] pl-10">
          <motion.p className="text-white md:text-lg text-md md:font-semibold">
            Enthusiastic software developer with expertise in C, C++, OOPS, and
            Data Structures, along with hands-on Linux experience. Skilled in
            HTML, CSS, JavaScript, and advancing in MERN stack technologies, I’m
            developing a university social networking platform to showcase my
            skills. Passionate about solving problems and collaborating
            effectively, I aim to contribute to team success while thriving in
            dynamic, challenging environments.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
});

export default About;
