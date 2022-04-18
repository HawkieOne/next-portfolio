import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next//link";
import ReactMarkdown from "react-markdown";
import Scrollbar from "react-scrollbars-custom";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <Scrollbar className="h-full">
      <section className="flex justify-center h-full text-secondary dark:text-secondary-dark">
        <div className="w-4/6 space-y-6 m-8">
          <Link href="/projects">
            <a
              className="bg-highlight text-white border-none px-4 py-2 rounded-lg cursor-pointer
                        text-xl self-start"
            >
              Go Back
            </a>
          </Link>
          <div
            className="flex flex-col space-y-4 px-4 py-5 rounded-b-xl shadow-lg
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
            <div className="markdown">
              <ReactMarkdown children={content}></ReactMarkdown>
            </div>
          </div>
          <a
            className="bg-highlight text-white border-none px-4 py-2 rounded-lg cursor-pointer
                        text-xl self-end"
            onClick={scrollToTop}
          >
            Scroll to top
          </a>
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
