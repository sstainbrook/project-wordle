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
  const [guess, setGuess] = useState("");
  const [guessHistory, setGuessHistory] = useState([]);

  function onGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory];
    const nextGuessObject = {
      id: crypto.randomUUID(),
      guess: nextGuess,
    };
    nextGuessHistory.push(nextGuessObject);
    setGuessHistory(nextGuessHistory);
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        onGuessSubmit={onGuessSubmit}
      />
    </>
  );
}

export default Game;
