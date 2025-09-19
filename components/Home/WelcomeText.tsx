import { motion } from "framer-motion";
import React from "react";
import AnimatedWord from "../shared/AnimatedWord";

export default function WelcomeText() {
  return (
    <div className="text-secondary dark:text-secondary-dark text-3xl lg:leading-relaxed basis-1/
                    md:text-4xl lg:text-6xl">
        
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
        <AnimatedWord word="Hi," />
      </motion.div>

      <div className="flex">
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 2 }}>
          <AnimatedWord word="My name is " />
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 2.5 }}>
          <span className="underline decoration-accent/50 underline-offset-4
                            hover:scale-105">
            <a
              href="https://www.linkedin.com/in/hakanlindahl/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-highlight name 
                          focus:text-highlight focus:outline-primary-dark"
              title="Håkan - LinkedIn"
            >
              Håkan
            </a>
          </span>
        </motion.div>
      </div>
      
      <div className="flex">
        <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 3.5 }}>
          <AnimatedWord word="I am a " />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 4 }}
        >
          <span className="underline decoration-highlight/80 underline-offset-4">system&nbsp;</span>
          <span className="underline decoration-highlight/80 underline-offset-4">developer</span>
        </motion.div>
      </div>

    </div>
  );
}
