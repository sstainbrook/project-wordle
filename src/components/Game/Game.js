import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
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
    nextGuessHistory.push(nextGuess);
    setGuessHistory(nextGuessHistory);

    if (nextGuess === answer) {
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
      {gameEnding == "win" && <WonBanner numGuesses={guessHistory.length} />}
      {gameEnding == "lose" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
