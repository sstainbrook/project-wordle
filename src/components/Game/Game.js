import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);

  function onGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(nextGuess);
    setGuessHistory(nextGuessHistory);
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput onGuessSubmit={onGuessSubmit} />
    </>
  );
}

export default Game;
