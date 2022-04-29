import React from "react";

export default function ColorButton({ link, color, children}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button
        className={`${color} px-6 py-2 text-secondary-dark font-bold rounded-xl self-start
                        hover:scale-110`}
      >
        {children}
      </button>
    </a>
  );
}
