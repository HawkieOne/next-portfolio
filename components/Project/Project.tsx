import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentProjectIndex } from "../../atoms/atoms";

export default function Project({ project, index, maxIndex }) {
  const swiper = useSwiper();
  const setInitialSlideIndex = useSetRecoilState(currentProjectIndex);
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-7 lg:grid-cols-10 lg:grid-rows-7 px-8 py-4 relative">

      <div
        className="flex flex-col items-center md:items-start space-y-8 md:space-y-6 
                      lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-10
                      row-start-1 row-end-2 col-start-1 col-end-4"
      >
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-accent">
          {project.frontmatter.title}
        </h1>
        <h3 className="w-5/6 md:w-2/3 self-start">
          {project.frontmatter.excerpt}
        </h3>

        <div className="flex space-x-3 md:space-x-6 self-start">
          <Link href={`/project/${project.slug}`} passHref>
            <button
              className="bg-accent px-6 py-2 text-secondary font-bold rounded-xl self-start
                          hover:scale-110"
              onClick={() => setInitialSlideIndex(index)}
            >
              Read more
            </button>
          </Link>
          {project.frontmatter.demo && (
            <a href={project.frontmatter.demo} target="_blank" rel="noreferrer">
              <button
                className="bg-highlight px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                Demo
              </button>
            </a>
          )}

          {project.frontmatter.github && (
            <a
              href={project.frontmatter.github}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="bg-secondary px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                GitHub
              </button>
            </a>
          )}

          {project.frontmatter.link && (
            <a href={project.frontmatter.link} target="_blank" rel="noreferrer">
              <button
                className="bg-primary-dark px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110 dark:bg-primary dark:text-secondary"
              >
                Link
              </button>
            </a>
          )}
        </div>

        <div className="hidden md:flex flex-col space-y-4 mt-4 self-center md:self-start">
          <span className="rounded-md w-24 md:w-48 h-1 bg-highlight"></span>
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-accent"></span>
          <span className="rounded-md w-24 md:w-48 h-1 bg-highlight"></span>
        </div>
      </div>

      <img
        className="rounded-lg lg:row-start-3 
        lg:row-end-7 lg:col-start-4 lg:col-end-10
        row-start-4 row-end-7 col-start-1 col-end-4"
        src={project.frontmatter.cover_image}
        alt="Project Image"
      />

      <div
        className="hidden md:flex flex-col space-y-8
                      lg:row-start-6 lg:row-end-6 lg:col-start-11 lg:col-end-11"
      >
        <div className="flex flex-col space-y-4 self-start">
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-highlight"></span>
          <span className="rounded-md w-24 md:w-48 h-1 bg-accent"></span>
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-highlight"></span>
        </div>
      </div>

      {index < maxIndex - 1 ? (
        <div
          className="hidden md:flex space-x-4 items-end my-2 
                          lg:row-start-7 lg:row-end-7 lg:col-start-1 lg:col-end-3"
        >
          <p>Scroll down</p>
          <motion.div
            animate={{ y: [-5, 0] }}
            transition={{
              ease: "anticipate",
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.5,
              repeatDelay: 0.5,
            }}
          >
            <img src="svg/download.svg" alt="" />
          </motion.div>
        </div>
      ) : null}

      {index === maxIndex - 1 ? (
        <div
          className="hidden md:flex justify-end space-x-4 items-end my-2 lg:self-start
                          lg:row-start-1 lg:row-end-1 lg:col-start-11 lg:col-end-11"
        >
          <p>Scroll up</p>
          <motion.div
            animate={{ y: [-5, 0] }}
            transition={{
              ease: "anticipate",
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.5,
              repeatDelay: 0.5,
            }}
          >
            <img src="svg/download.svg" alt="" className="rotate-180"/>
          </motion.div>
        </div>
      ) : null}

      <div
        className="flex justify-center md:justify-end items-end 
                      lg:row-start-7 lg:row-end-7 lg:col-start-11 lg:col-end-11
                      row-start-2 row-end-2 col-start-2 col-end-2"
      >
        <h2 className="font-bold text-4xl md:text-6xl lg:text-9xl text-accent">
          0{index + 1}
        </h2>
      </div>
    </div>
  );
}
