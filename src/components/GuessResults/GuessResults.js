import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessResults({ guessHistory }) {
  return (
    <div className='guess-results'>
      {range(6).map((index) => (
        <Guess
          key={index}
          guess={guessHistory[index]}
        />
      ))}
    </div>
  );
}

export default GuessResults;
