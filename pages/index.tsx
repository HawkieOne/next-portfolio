import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WelcomeText from "../components/Home/WelcomeText";
import { currentProjectIndex } from "../atoms/atoms";
import { useSetRecoilState } from "recoil";
import { mirrorAnimation } from "../utils/animation";
import { imgDrawingPath, pdfCVpath, svgSendPath } from "../utils/data";

const IndexPage = () => {
  
  const setInitialSlideIndex = useSetRecoilState(currentProjectIndex);
  useEffect(() => {
    setInitialSlideIndex(0);
  }, [])


  return (
    <motion.div className="h-full flex flex-col items-center justify-center relative">
      <div
        className="flex items-center justify-center absolute top-6 right-6 p-4 
                      space-x-2"
      >
        {/* Download CV */}
        <motion.div
          animate={{ x: [-30, 0] }}
          transition={{
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.5,
            repeatDelay: 1,
          }}
          className="relative"
        >
          <img src={svgSendPath} alt="Dowload CV" />
        </motion.div>
        <a
          href={pdfCVpath}
          title=""
          download
          className="p-4 shadow-lg rounded-md cursor-pointer
                  border border-secondary dark:border-accent-dark
                  hover:scale-105 hover:border-accent-dark dark:hover:border-highlight 
                  focus:scale-105 focus:outline-accent
                  dark:focus:scale-105 dark:focus:outline-accent active:outline-accent"
        >
          Download CV
        </a>
      </div>

      <div className="h-screen relative flex flex-col-reverse lg:flex-row items-end">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{
            ease: "anticipate",
            duration: 2,
          }}
          className="basis-1/2 h-3/4 bg-primary dark:bg-primary-dark"
        >
          <img
            src={imgDrawingPath}
            alt="drawing of me"
            className="mix-blend-multiply dark:mix-blend-luminosity h-full
                      slidingImg pl-4"
          />
        </motion.div>
        <div className="self-center space-y-8">
          <WelcomeText />
        </div>
      </div>
    </motion.div>
  );
};

export default IndexPage;
