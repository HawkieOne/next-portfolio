import React from "react";
import { motion } from "framer-motion";
import { svgDownloadPath } from "../../utils/data";

interface MovingArrowProps {
  onArrowClicked: () => void;
  rotate?: string;
  children: React.ReactNode;
}

export default function MovingArrow({
  onArrowClicked,
  rotate = "",
  children,
}: MovingArrowProps) {
  return (
    <div
      className={`hidden md:flex space-x-4 items-end justify-end my-2 cursor-pointer`}
      onClick={onArrowClicked}
    >
      <p>{children}</p>
      <motion.div
        animate={{ y: [-5, 0] }}
        transition={{
          ease: "anticipate",
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          repeatDelay: 1,
        }}
      >
        <img src={svgDownloadPath} alt="Moving arrow" className={`${rotate}`} />
      </motion.div>
    </div>
  );
}
