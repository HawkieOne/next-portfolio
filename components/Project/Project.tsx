import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Project({ project, index, state }) {
  return (
    <div className="flex flex-col px-8 space-y-2">
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-8xl text-accent">
          {project.frontmatter.title}
        </h1>
        <h3 className="w-2/3">{project.frontmatter.excerpt}</h3>
        <div className="flex space-x-6">
          <Link href={`/project/${project.slug}`} passHref>
            <button
              className="bg-accent px-6 py-2 text-secondary font-bold rounded-xl self-start
                          hover:scale-110"
            >
              Read more
            </button>
          </Link>
          {project.frontmatter.demo && (
            <a href={project.frontmatter.demo}  target="_blank" rel="noreferrer">
              <button
                className="bg-highlight px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                Demo
              </button>
            </a>
          )}
          {project.frontmatter.github && (
            <a href={project.frontmatter.github}  target="_blank" rel="noreferrer">
              <button
                className="bg-secondary px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                GitHub
              </button>
            </a>
          )}
          {project.frontmatter.link && (
            <a href={project.frontmatter.link}  target="_blank" rel="noreferrer">
              <button
                className="bg-primary-dark px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                Link
              </button>
            </a>
          )}
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <span className="rounded-md w-48 h-1 bg-highlight"></span>
          <span className="rounded-md w-48 h-1 ml-8 bg-accent"></span>
          <span className="rounded-md w-48 h-1 bg-highlight"></span>
        </div>
      </div>

      <img
        className="w-5/12 self-center rounded-lg"
        src={project.frontmatter.cover_image}
        alt="Project Image"
      />

      <div className="flex flex-col space-y-8 self-end">
        <div className="flex flex-col space-y-4 self-start">
          <span className="rounded-md w-48 h-1 ml-8 bg-highlight"></span>
          <span className="rounded-md w-48 h-1 bg-accent"></span>
          <span className="rounded-md w-48 h-1 ml-8 bg-highlight"></span>
        </div>
        <h2 className="font-bold text-9xl text-accent self-end">0{index}</h2>
      </div>

      {index < state.sectionCount - 1 ? (
        <div className="absolute bottom-2 right-1/2 flex space-x-4 items-center">
          <p>Scroll down</p>
          <motion.div
          animate={{ y: [-5, 0] }}
          transition={{
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.5,
            repeatDelay: 0.5,
          }}>
            <img src="svg/download.svg" alt="" />
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
