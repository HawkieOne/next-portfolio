import React from "react";
import { motion } from "framer-motion";
import { svgDownloadPath } from "../../utils/data";

export default function MovingArrow({ onArrowClicked, xPos, yPos, animationPos, animation, rotate = "", children}) {
  return (
    <div
      className={`hidden md:flex space-x-4 items-end my-2 cursor-pointer
                          lg:row-start-[${yPos.start}] lg:row-end-[${yPos.end}] 
                          lg:col-start-[${xPos.start}] lg:col-end-[${xPos.end}]`}
      onClick={onArrowClicked}
    >
      <p>{children}</p>
      <motion.div animate={{ y: [animation.x, animation.y] }} transition={{
    ease: "anticipate",
    repeat: Infinity,
    repeatType: "mirror",
    duration: 0.5,
    repeatDelay: 1,
  }}>
        <img src={svgDownloadPath} alt="Moving arrow" className={`${rotate}`}/>
      </motion.div>
    </div>
  );
}
