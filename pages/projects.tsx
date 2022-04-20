import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { sortByDate } from "../utils/functions";
import Project from "../components/Project/Project";
import { motion } from "framer-motion";
import Scrollbar from "react-scrollbars-custom";
import AnimatedWord from "../components/shared/AnimatedWord";
import Slider from "react-slick";

export default function Projects({ projects }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // className: "center",
    // centerMode: true,
    centerPadding: "100px",
    lazyLoad: true,
    dots: true,
    infinite: true,
    // fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return (
        <img src={projects[i].frontmatter.cover_image} alt="Project Image" />
      );
    },
    nextArrow: (
      <img src={projects[0].frontmatter.cover_image} alt="Project Image" />
    ),
    prevArrow: (
      <img src={projects[0].frontmatter.cover_image} alt="Project Image" />
    ),
  };

  return (
    <Scrollbar className="h-screen">
      <motion.div className="h-full flex flex-col justify-center items-center my-8 space-y-8">
        <div className="text-center text-secondary dark:text-secondary-dark text-5xl">
          <h1 className="text-secondary dark:text-secondary-dark text-6xl font-bold flex">
            <AnimatedWord word="Projects" />
          </h1>
        </div>
        <p className="w-3/5 text-secondary dark:text-secondary-dark">
          Here are some of the projects that I have worked with. Some of them
          are personal projects and some of them are work related. To see more
          of what I have done take a look at my{" "}
          <a
            href="https://github.com/HawkieOne"
            className="text-highlight"
            target="_blank" rel="noreferrer"
          >
            Github
          </a>
        </p>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 justify-center items-baseline"
        >
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </motion.div>

        {/* <div className="w-3/4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Slider>
        </div> */}
      </motion.div>
    </Scrollbar>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("projects"));
  // Get slug and fronmatter from projects
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(/\.md$/, "");
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      // projects: projects.sort(sortByDate),
      projects: projects,
    },
  };
}
