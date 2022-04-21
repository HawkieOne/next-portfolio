import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useLocalStorage } from "../../utils/hooks";

export default function ModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const initStateIsDarkMode = currentTheme === "dark" ? true : false;
  const [isDarkMode, setDarkMode] = useLocalStorage(
    "darkMode",
    initStateIsDarkMode
  );

  const onButtonClick = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setDarkMode(false);
    } else {
      setTheme("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={onButtonClick}
        className="bg-primary border border-secondary p-3 rounded-lg shadow-lg
                  flex flex-col justify-center items-center spaxe-y-2
                  dark:bg-primary-dark dark:border-accent-dark
                  hover:scale-110 hover:border-accent-dark dark:hover:border-highlight"
        title="Press to change mode"
      >
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            key={"moon"}
            transition={{
              type: "spring",
              stiffness: 63,
              mass: 3,
            }}
          >
            <MoonIcon className="h-8 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            key={"sun"}
            transition={{
              type: "spring",
              stiffness: 63,
              mass: 3,
            }}
          >
            <SunIcon className="h-8 text-amber-400" />
          </motion.div>
        )}
        <p className="capitalize">{currentTheme}</p>
      </button>
    </div>
  );
}
