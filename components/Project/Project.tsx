import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { useSwiper } from "swiper/react";
import { currentProjectIndex } from "../../atoms/atoms";
import { IProject } from "../../interfaces";
import MovingArrow from "./MovingArrow";

interface ProjectProps {
  project: IProject;
  index: number;
  maxIndex: number;
}

export default function Project({ project, index, maxIndex }: ProjectProps) {
  const swiper = useSwiper();
  const setInitialSlideIndex = useSetRecoilState(currentProjectIndex);

  const onNextSlide = () => {
    swiper.slideNext();
  };

  const onPrevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className="h-screen grid grid-cols-3 grid-rows-7 lg:grid-cols-10 lg:grid-rows-7 px-8 py-4 relative">
      <div
        className="flex flex-col items-start space-y-4 md:space-y-6 
                      lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-10
                      row-start-1 row-end-2 col-start-1 col-end-4"
      >
        <h1
          className="font-bold text-xl md:text-2xl lg:text-6xl text-accent"
          tabIndex={0}
        >
          {project.frontmatter.title}
        </h1>
        <p className="w-5/6 xl:w-2/3 self-start" tabIndex={0}>
          {project.frontmatter.excerpt}
        </p>

        <div className="flex space-x-3 xl:space-x-6 self-start">
          <Link href={`/project/${project.slug}`} passHref>
            <button
              className="bg-accent px-3 xl:px-6 py-1 xl:py-2 text-primary-dark font-bold rounded-xl self-start
                          hover:scale-110"
              onClick={() => setInitialSlideIndex(index)}
            >
              Read more
            </button>
          </Link>
          {project.frontmatter.demo && (
            <a href={project.frontmatter.demo} target="_blank" rel="noreferrer">
              <button
                className="bg-highlight px-3 xl:px-6 py-1 xl:py-2 text-primary-dark font-bold rounded-xl self-start
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
                className="bg-secondary px-3 xl:px-6 py-1 xl:py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
              >
                GitHub
              </button>
            </a>
          )}

          {project.frontmatter.link && (
            <a href={project.frontmatter.link} target="_blank" rel="noreferrer">
              <button
                className="bg-primary-dark px-3 xl:px-6 py-1 xl:py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110 dark:bg-primary dark:text-secondary"
              >
                Link
              </button>
            </a>
          )}
        </div>

        <div className="hidden xl:flex flex-col space-y-4 mt-4 self-center xl:self-start">
          <span className="rounded-md w-24 md:w-48 h-1 bg-highlight"></span>
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-accent"></span>
          <span className="rounded-md w-24 md:w-48 h-1 bg-highlight"></span>
        </div>
      </div>

      <picture
        className="rounded-lg lg:row-start-3 
        lg:row-end-7 lg:col-start-4 lg:col-end-10
        row-start-4 row-end-7 col-start-1 col-end-4"
      >
        <source
          srcSet={'/' + project.frontmatter.cover_image[1]}
          media="(min-width: 600px)"
        />
        <img
          className="rounded-lg lg:row-start-3 
        lg:row-end-7 lg:col-start-4 lg:col-end-10
        row-start-4 row-end-7 col-start-1 col-end-4"
          src={'/' + project.frontmatter.cover_image[0]}
          alt="Project image"
        />
      </picture>

      <div
        className="hidden lg:flex flex-col space-y-8
                      lg:row-start-6 lg:row-end-6 lg:col-start-11 lg:col-end-11"
      >
        <div className="flex flex-col space-y-4 self-start">
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-highlight"></span>
          <span className="rounded-md w-24 md:w-48 h-1 bg-accent"></span>
          <span className="rounded-md w-24 md:w-48 h-1 md:ml-8 bg-highlight"></span>
        </div>
      </div>

      <div className="hidden lg:flex items-end lg:row-start-7 lg:row-end-7 lg:col-start-1 lg:col-end-3">
        {index < maxIndex - 1 ? (
          <MovingArrow onArrowClicked={onNextSlide}>Scroll down</MovingArrow>
        ) : null}
      </div>

      <div className="hidden lg:block lg:row-start-1 lg:row-end-1 lg:col-start-10 lg:col-end-12">
        {index === maxIndex - 1 ? (
          <MovingArrow onArrowClicked={onPrevSlide} rotate="rotate-180">
            Scroll Up
          </MovingArrow>
        ) : null}
      </div>

      <div
        className="flex justify-center xl:justify-end items-end 
                      lg:row-start-7 lg:row-end-7 lg:col-start-11 lg:col-end-11
                      row-start-2 row-end-2 col-start-2 col-end-2"
      >
        <h1 className="font-bold md:text-4xl lg:text-8xl xl:text-9xl text-accent">
          {index < 9 ? 0 : ""}
          {index + 1}
        </h1>
      </div>
    </div>
  );
}
