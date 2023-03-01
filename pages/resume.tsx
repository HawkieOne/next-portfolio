import { motion } from "framer-motion";
import { useEffect } from "react";
import Scrollbar from "react-scrollbars-custom";
import { useSetRecoilState } from "recoil";
import { currentProjectIndex } from "../atoms/atoms";
import AnimatedWord from "../components/shared/AnimatedWord";
import { resumeItems } from "../utils/data";
import { getYearsInArray } from "../utils/functions";

export default function Resume() {
  const setInitialSlideIndex = useSetRecoilState(currentProjectIndex);
  useEffect(() => {
    setInitialSlideIndex(0);
  }, []);

  const years = getYearsInArray(resumeItems);
  const resumeYearsArr = years.map((year) => {
    return {
      year: year,
      entries: resumeItems.filter((item) => item.year === year),
    };
  });

  const scaleProps = [1, 1.05, 1];

  return (
    <Scrollbar className="h-full">
      <div className="h-full overflow-auto space-y-8 flex flex-col items-center justify-center m-8">
        <div className="flex justify-center space-x-4 items-center">
          <span className="rounded-md w-12 md:w-24 h-1 bg-highlight"></span>
          <h1 className="text-secondary dark:text-secondary-dark text-2xl md:text-4xl lg:text-6xl font-bold flex">
            <AnimatedWord word="Experiences" />
          </h1>
          <span className="rounded-md w-12 md:w-24 h-1 bg-highlight"></span>
        </div>

        <div className="h-full">
          {resumeYearsArr.map((year, index) => {
            return (
              <div
                className="p-5 flex flex-col align-around relative group"
                key={index}
              >
                <div
                  className="absolute right-1/2 top-0 h-full w-0.5 z-0 
                              bg-accent dark:bg-secondary"
                ></div>
                <h1
                  className="self-center text-2xl md:text-3xl bg-primary dark:bg-primary-dark p-2 px-4 
                          text-accent dark:border-b-secondary
                            border-b-4 border-accent z-10 shadow-lg"
                  tabIndex={0}
                >
                  {year.year}
                </h1>
                <div className="flex flex-col">
                  {year.entries.map((entry, i) => {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="relative even:self-end odd:self-start w-full md:w-1/2 
                                flex odd:flex-row-reverse items-center
                                group-even:self-end group-even:only:flex-row 
                                group-even:even:self-start group-even:even:flex-row-reverse group-even:odd:flex-row"
                      >
                        <span
                          className="hidden md:block w-1/2 h-0.5 bg-accent dark:bg-secondary"
                          aria-hidden="true"
                        ></span>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1, scale: scaleProps }}
                          className="flex flex-col p-5
                          bg-gray-dark bg-primary dark:bg-primary-dark border-b-2 md:border-b-4 border-accent-dark
                          dark:border-b-secondary
                          text-secondary shadow-lg"
                        >
                          <h2
                            className="self-center text-xl md:text-2xl lg:text-3xl text-accent"
                            tabIndex={0}
                          >
                            {entry.title}
                          </h2>
                          <h3
                            className="self-center text-md md:text-xl lg:text-2xl text-highlight"
                            tabIndex={0}
                          >
                            {entry.location}
                          </h3>
                          <p
                            className="dark:text-secondary-dark text-s md:text-md lg:text-base"
                            tabIndex={0}
                          >
                            {entry.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Scrollbar>
  );
}
