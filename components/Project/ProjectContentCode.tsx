import React from "react";

export default function ProjectContentCode({ title, code} ) {
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
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-6">
        <span className="rounded-md w-6 md:w-12 h-1 bg-highlight"></span>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="mockup-code bg-zinc-700 dark:bg-[#1a1c23] shadow">
        {code.map((item, index) => (
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
  );
}
