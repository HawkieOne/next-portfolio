import React from "react";

interface ProjectContentProps {
  title: string;
  content: string;
}

export default function ProjectContent({
  title,
  content,
}: ProjectContentProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-6">
        <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <p>{content}</p>
    </div>
  );
}
