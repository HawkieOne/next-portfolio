import React from "react";

interface LinkProps {
  link: string;
  children: React.ReactNode;
}

export default function Link({ link, children }: LinkProps) {
  return (
    <a href={link} className="text-highlight" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
