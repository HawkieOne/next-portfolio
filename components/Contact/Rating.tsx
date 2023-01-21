import React, { useState } from "react";

export default function Rating({ setRating }) {
  const [index, setIndex] = useState(2);

  const onChange = (e) => {
    setIndex(parseInt(e.target.value));
    setRating(parseInt(e.target.value) + 1);
  }

  return (
    <div className="flex flex-col space-y-2 items-center">
      <h2 className="xl:text-md" tabIndex={0}>Rate my portfolio!</h2>
      <div className="rating rating-md gap-1">
        <input
          type="radio"
          name="heart1"
          className="mask mask-heart bg-red-400 focus:bg-red-600"
          checked={index === 0}
          onChange={onChange}
          value={0}
          aria-label="1 heart"
        />
        <input
          type="radio"
          name="heart2"
          className="mask mask-heart bg-red-400 focus:bg-red-600"
          checked={index === 1}
          onChange={onChange}
          value={1}
          id="heart2"
          aria-label="2 hearts"
        />
        <input
          type="radio"
          name="heart3"
          className="mask mask-heart bg-red-400 focus:bg-red-600"
          checked={index === 2}
          onChange={onChange}
          value={2}
          id="heart3" 
          aria-label="3 hearts"         
        />
        <input
          type="radio"
          name="heart4"
          className="mask mask-heart bg-red-400 focus:bg-red-600"
          checked={index === 3}
          onChange={onChange}
          value={3}
          id="heart4"
          aria-label="4 hearts"
        />
        <input
          type="radio"
          name="heart5"
          className="mask mask-heart bg-red-400 focus:bg-red-600"
          checked={index === 4}
          onChange={onChange}
          value={4}
          id="heart5"
          aria-label="5 hearts"
        />
        <label htmlFor="heart5" className="hidden">5 hearts</label>
      </div>
    </div>
  );
}
