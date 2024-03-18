import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessHistory, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          guess={checkGuess(guessHistory[index], answer)}
        />
      ))}
    </div>
  );
}

export default GuessResults;
