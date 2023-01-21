import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Scrollbar from "react-scrollbars-custom";
import ProjectContent from "../../components/Project/ProjectContent";
import ProjectContentList from "../../components/Project/ProjectContentList";
import ProjectContentCode from "../../components/Project/ProjectContentCode";
import ColorButton from "../../components/shared/ColorButton";
import Link from "../../components/shared/Link";
import LinkButtton from "../../components/shared/LinkButtton";

export default function PostPage({
  frontmatter: {
    title,
    date,
    cover_image,
    link,
    github,
    description,
    built,
    features,
    limitations,
    tested,
    kattis,
    when,
    kattisProblem1,
    kattisProblem2,
    kattisProblem3,
    kattisProblem4,
    kattisProblem5,
  },
  slug,
  content,
}) {
  const getRandomColor = () => {
    const colorArr = [
      "text-accent",
      "text-warning",
      "text-success",
      "text-info",
      "text-highlight",
    ];
    return colorArr[Math.floor(Math.random() * colorArr.length)];
  };

  return (
    <Scrollbar className="h-full">
      <section className="flex justify-center h-full text-secondary dark:text-secondary-dark">
        <div className="w-5/6 space-y-4 m-8 flex flex-col">
          <LinkButtton link="/projects" color="bg-secondary">
            Go Back
          </LinkButtton>

          <div
            className="flex flex-col space-y-6 px-0 md:px-4 py-5 rounded-b-xl shadow-lg
                          border-t-4 border-accent-dark"
          >
            <h1 className="text-4xl font-bold">{title}</h1>

            {/* Date banner */}
            <div className="font-semibold bg-gray-600 py-2 px-4 text-primary">
              {date}
            </div>

            <picture className="h-32 lg:h-96 self-center my-5 rounded-lg">
              <source srcSet={cover_image[1]} />
              <img
                className="h-32 lg:h-96 self-center my-5 rounded-lg"
                src={cover_image[0]}
                alt="Project image"
              />
            </picture>

            {description && (
              <ProjectContent title="Description" content={description} />
            )}

            <div className="flex space-x-4">
              {github && (
                <ColorButton link={github} color="bg-secondary">
                  Github
                </ColorButton>
              )}
              {link && (
                <ColorButton link={link} color="bg-primary">
                  Link
                </ColorButton>
              )}
            </div>

            {built && <ProjectContentCode title="Built with" code={built} />}

            {kattis && (
              <React.Fragment>
                <ProjectContent title="Top 5 problems" content={kattis} />
                <ProjectContent title="Problem 1" content={kattisProblem1} />
                <ProjectContent title="Problem 2" content={kattisProblem2} />
                <ProjectContent title="Problem 3" content={kattisProblem3} />
                <ProjectContent title="Problem 4" content={kattisProblem4} />
                <ProjectContent title="Problem 5" content={kattisProblem1} />
              </React.Fragment>
            )}

            {features && <ProjectContent title="Features" content={features} />}

            {limitations && (
              <ProjectContent title="Limitations" content={limitations} />
            )}

            {when && <ProjectContent title="When" content={when} />}

            {tested && <ProjectContentList title="Tested on" list={tested} />}

            {/* Getting started - GitHub link */}
            {github && (
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
                  <h1 className="text-4xl font-bold">Getting started</h1>
                </div>
                <p>
                  Check out the <Link link={github}>Github</Link> if you want to
                  try and run this project on your machine!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Scrollbar>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
