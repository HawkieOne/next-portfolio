import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { useRecoilValue } from "recoil";
import { EffectFade, Keyboard, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { currentProjectIndex } from "../atoms/atoms";
import Project from "../components/Project/Project";
import { IProject } from "../interfaces";
import { sortByDate } from "../utils/functions";

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  projects.sort(a => (a.frontmatter.demo ? -1 : 1));
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
        {projects.map((project, index: number) => (
          <SwiperSlide key={index}>
            <Project
              key={index}
              project={project}
              index={index}
              maxIndex={projects.length}
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

  projects = projects.filter(
    (project) => project.frontmatter?.visible !== "false"
  );

  return {
    props: {
      projects: projects.sort(sortByDate),
      // projects: projects,
    },
  };
}
