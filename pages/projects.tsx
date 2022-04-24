import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Project from "../components/Project/Project";
import ReactFullpage from "@fullpage/react-fullpage";
import { sortByDate } from "../utils/functions";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { EffectFade, Keyboard, Mousewheel, Pagination } from "swiper";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentProjectIndex } from "../atoms/atoms";

export default function Projects({ projects }) {
  const initialSlideIndex = useRecoilValue(currentProjectIndex);
  return (
    <div className="h-full w-full">
      <Swiper
        initialSlide={initialSlideIndex}
        direction={"vertical"}
        slidesPerView={1}
        keyboard={true}
        mousewheel={true}
        // effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Keyboard, EffectFade]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Project
              key={index}
              project={project}
              index={index}
              maxIndex={projects.length}
              // state={state}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("projects"));
  // Get slug and fronmatter from projects
  var projects = files.map((filename) => {
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

  console.log(projects);
  projects = projects.filter(
    (project) => project.frontmatter?.visible !== "false"
  );
  console.log(projects);

  return {
    props: {
      projects: projects.sort(sortByDate),
      // projects: projects,
    },
  };
}
