import React, { useState } from "react";

export default function Rating({ setRating }) {
  const [index, setIndex] = useState(2);

  const onChange = (e) => {
    setIndex(parseInt(e.target.value));
    setRating(parseInt(e.target.value) + 1);
  }

  return (
    <div className="flex flex-col space-y-2 items-center">
      <h3 className="">Rate my portfolio!</h3>
      <div className="rating rating-md gap-1">
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-red-400"
          checked={index === 0}
          onChange={onChange}
          value={0}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-orange-400"
          checked={index === 1}
          onChange={onChange}
          value={1}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-yellow-400"
          checked={index === 2}
          onChange={onChange}
          value={2}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-lime-400"
          checked={index === 3}
          onChange={onChange}
          value={3}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-green-400"
          checked={index === 4}
          onChange={onChange}
          value={4}
        />
      </div>
    </div>
  );
}
