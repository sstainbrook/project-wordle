import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameEnding, setGameEnding] = useState(null);

  function onGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory];
    const checkedGuess = checkGuess(nextGuess, answer);

    nextGuessHistory.push(nextGuess);
    setGuessHistory(nextGuessHistory);

    if (checkedGuess.every(({ status }) => status == "correct")) {
      setGameEnding("win");
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameEnding("lose");
    }
  }

  return (
    <>
      <GuessResults
        guessHistory={guessHistory}
        answer={answer}
      />
      <GuessInput
        onGuessSubmit={onGuessSubmit}
        gameEnd={!!gameEnding}
      />
      <Banner
        gameEnding={gameEnding}
        numGuesses={guessHistory.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
