import React from "react";
import AnimateLetter from "../Contact/AnimateLetter";

export default function AnimatedWord({ word }) {
  return (
    <div className="flex">
      {[...word].map((letter, index) =>
        letter === ' ' ? (
          <AnimateLetter key={index} letter="&nbsp;" />
        ) : (
          <AnimateLetter  key={index} letter={letter} />
        )
      )}
    </div>
  );
}
