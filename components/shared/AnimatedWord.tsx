import React from "react";
import AnimateLetter from "../Contact/AnimateLetter";

interface AnimatedWordProps {
  word: string;
}

export default function AnimatedWord({ word } : AnimatedWordProps) {
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
