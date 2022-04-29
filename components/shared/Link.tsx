import React from "react";

export default function Link({ link, children }) {
  return (
    <a href={link} className="text-highlight" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
