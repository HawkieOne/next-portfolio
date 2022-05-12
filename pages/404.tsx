import React from "react";
import { imgDrawingPath } from "../utils/data";

export default function Custom404() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="bg-primary dark:bg-primary-dark shadow-lg 
                        flex items-center p-4 rounded-lg">
        <div className="hidden lg:block w-1/2 h-1/2">
          <img
            src={imgDrawingPath}
            alt="drawing of me"
            className="mix-blend-multiply dark:mix-blend-luminosity rotate-180"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-4xl lg:text-8xl font-bold
                         text-highlight">404</h1>
          <h2 className="text-2xl md:text-3xl lg:text-3xl">Ooops! Page not found</h2>
          <h3>The page you're looking for doesn't exist.</h3>
        </div>
      </div>
    </div>
  );
}
