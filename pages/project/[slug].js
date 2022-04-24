import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next//link";
import ReactMarkdown from "react-markdown";
import Scrollbar from "react-scrollbars-custom";

export default function PostPage({
  frontmatter: {
    title,
    date,
    cover_image,
    link,
    github,
    description,
    built,
    limitations,
    tested,
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
        <div className="w-4/6 space-y-6 m-8">
          <Link href="/projects">
            <a
              className="bg-secondary text-secondary-dark border-none px-4 py-2 rounded-lg cursor-pointer
                        text-xl self-start"
            >
              Go Back
            </a>
          </Link>

          <div
            className="flex flex-col space-y-8 px-4 py-5 rounded-b-xl shadow-lg
                          border-t-4 border-accent-dark"
          >
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="font-semibold bg-gray-600 py-2 px-4 text-primary">
              {date}
            </div>
            <img
              src={cover_image}
              alt=""
              className="h-96 self-center my-5 rounded-lg"
            />

            <div className="flex items-center space-x-6">
              <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
              <h1 className="text-4xl font-bold">Description</h1>
            </div>
            <p>{description}</p>

            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <button
                  className="bg-secondary px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110"
                >
                  GitHub
                </button>
              </a>
            )}

            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <button
                  className="bg-primary-dark px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110 dark:bg-primary dark:text-secondary"
                >
                  Link
                </button>
              </a>
            )}

            {built && (
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
                  <h1 className="text-4xl font-bold">Built with</h1>
                </div>
                <div class="mockup-code bg-zinc-700 dark:bg-[#1a1c23] shadow">
                  {built.map((item, index) => (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <pre
                        data-prefix=">"
                        className={`${getRandomColor()} hover:text-white`}
                      >
                        <code>{item.name}</code>
                      </pre>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {limitations && (
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
                  <h1 className="text-4xl font-bold">Limitations</h1>
                </div>
                <p>{limitations}</p>
              </div>
            )}

            {tested && (
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
                  <h1 className="text-4xl font-bold">Tested on</h1>
                </div>
                <div>
                  {tested.map((item, index) => (
                    <div className="flex items-center space-x-2">
                      <span className="rounded-md w-2 md:w-2 h-0.5 bg-accent"></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-6">
                <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
                <h1 className="text-4xl font-bold">Getting started</h1>
              </div>
              <p>
                Check out the{" "}
                <a
                  href={github}
                  className="text-highlight"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                if you want to try and run this project on your machine!
              </p>
            </div>
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
