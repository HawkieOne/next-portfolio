import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WelcomeText from "../components/Home/WelcomeText";
// import CV from "../assets/CV.pdf";

const IndexPage = () => {

  const dirsX = [
    [-200, 0],
    // [0, 0],
  ];
  const dirsY = [
    [0, 0],
    // [100, 0],
  ];
  const skewX = [
    [0, 180, 360, 0],
    // [100, 0],
  ];
  const randomXDir = dirsX[Math.floor(Math.random() * dirsX.length)];
  const randomYDir = dirsY[Math.floor(Math.random() * dirsY.length)];
  const randomXSkew = skewX[Math.floor(Math.random() * skewX.length)];

  return (
    <motion.div className="h-full flex flex-col items-center justify-center relative">
      <div
        className="flex items-center justify-center absolute top-6 right-6 p-4 
                      space-x-2"
      >
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
          <img src={"/svg/send.svg"} />
        </motion.div>
        <a
          // href={CV}
          title=""
          download
          className="p-4 shadow-lg rounded-md cursor-pointer
                  border border-secondary dark:border-accent-dark"
        >
          Download CV
        </a>
      </div>

      <div className="h-screen relative flex items-end">
        {/* <Canvas draw={draw} options={{}} /> */}
        <motion.div
          animate={{ x: randomXDir, y: randomYDir }}
          transition={{
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            repeatDelay: 4,
          }}
          className="basis-1/2 h-3/4 bg-primary dark:bg-primary-dark"
        >
          <img
            src="images/drawing.png"
            alt="drawing of me"
            className="mix-blend-multiply dark:mix-blend-luminosity h-full
                      slidingImg"
          />        
        </motion.div>
        <div className="self-center">
          <WelcomeText />
        </div>
      </div>
    </motion.div>
  );
};

export default IndexPage;
