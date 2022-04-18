import Link from "next/link";
import React from "react";

export default function Project({ project }) {
  return (
    <Link href={`/project/${project.slug}`} passHref>
      <div className="flex flex-col max-w-sm max-h-sm overflow-hidden shadow-lg bg-primary dark:bg-primary-dark
                    text-secondary 
                      h-full cursor-pointer border-b-4 border-accent-dark">
        <img
          className="w-full"
          src={project.frontmatter.cover_image}
          alt="Project Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-teal-600">
            {project.frontmatter.title}
          </div>
          <p className="text-base dark:text-secondary-dark">{project.frontmatter.excerpt}</p>
        </div>
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
