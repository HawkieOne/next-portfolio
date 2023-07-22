import React from "react";
import { motion } from "framer-motion";
interface AnimateLetterProps {
  letter: string;
}

export default function AnimateLetter({ letter }: AnimateLetterProps) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 0.8, 0.7, 1],
        // rotate: [0, 0, 270, 270, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ times: [0, 0.2, 0.7, 1] }}
      className="hover:text-accent"
    >
      <h1>{letter}</h1>
    </motion.div>
  );
}
