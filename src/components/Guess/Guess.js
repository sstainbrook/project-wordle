import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessArray = guess ? guess.split("") : Array.from(Array(5));
  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span
          key={index}
          className='cell'
        >
          {guess ? guess[index] : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
