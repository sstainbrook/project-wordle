import React from "react";

function Guess({ guess }) {
  const guessArray = guess ? guess.split("") : Array.from(Array(5));
  return (
    <p className='guess'>
      {guessArray.map((letter, index) => (
        <span
          key={index}
          className='cell'
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
