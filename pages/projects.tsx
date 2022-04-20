import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Project from "../components/Project/Project";
import ReactFullpage from "@fullpage/react-fullpage";
import { sortByDate } from "../utils/functions";

export default function Projects({ projects }) {

  return (
    <div className="relative">
      <ReactFullpage
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000} /* Options here */
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {projects.map((project, index) => (
                <div className="section flex flex-col">
                  <Project key={index} project={project} index={index} state={state}/>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
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
      projects: projects.sort(sortByDate),
      // projects: projects,
    },
  };
}
