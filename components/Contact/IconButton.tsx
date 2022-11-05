import React from "react";

export default function IconButton({ type, text, svgPath, click }) {
  return (
    <button
      type={type}
      onClick={click}
      className="self-end relative inline-flex items-center justify-center md:px-4 xl:px-8 md:py-1 xl:py-3 overflow-hidden 
               font-medium text-secondary transition duration-300 ease-out border-2 border-secondary 
              rounded shadow-md group text-lg focus:outline-accent"
    >
      <span
        className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 
                     -translate-x-full bg-secondary group-hover:translate-x-0 ease"
      >
        <img src={svgPath} alt={text}/>  
      </span>
      <span
        className="absolute flex items-center justify-center w-full h-full text-secondary dark:text-secondary-dark
                       transition-all duration-300 transform group-hover:translate-x-full ease"
      >
        {text}
      </span>
      <span className="relative invisible">Send</span>
    </button>
  );
}
