import Link from "next/link";
import React, { useState } from "react";

export default function Project({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={`/project/${project.slug}`} passHref>
      <div
        className="flex flex-col overflow-hidden shadow-lg bg-primary dark:bg-primary-dark
                    text-secondary relative
                      h-full cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative overflow-hidden m-w-full w-full group">
          <img
            className="m-w-full w-full group-hover:scale-125 group-hover:skew-x-12"
            src={project.frontmatter.cover_image}
            alt="Project Image"
          />
        </div>
        {hover ? (
          <div
            className="bg-overlay absolute top-1/2 right-1/2 flex 
                            flex-col items-center justify-center"
          >
            <p className="text-3xl font-bold text-accent bg-primary-dark p-4 rounded-xl">
              {project.frontmatter.title}
            </p>
          </div>
        ) : null}
        {/* <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-teal-600">
            {project.frontmatter.title}
          </div>
          <p className="text-base dark:text-secondary-dark">{project.frontmatter.excerpt}</p>
        </div> */}
        {/* <div className="px-6 py-4">
          <div className="font-bold text-md mb-2 text-red-300">
            Created {project.frontmatter.date}
          </div>
        </div> */}
        {/* <div className="px-6 pt-4 pb-2">
          <Link href={`/project/${project.slug}`} passHref>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
              Read more
            </span>
          </Link>
        </div> */}
      </div>
    </Link>
  );
}
