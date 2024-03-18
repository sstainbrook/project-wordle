import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameEnding, setGameEnding] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState({});

  function onGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory];
    const nextGuessedLetters = { ...guessedLetters };
    const checkedLetters = checkGuess(nextGuess, answer);
    nextGuessHistory.push(nextGuess);
    setGuessHistory(nextGuessHistory);

    checkedLetters.forEach(({ letter, status }) => {
      if (
        nextGuessedLetters[letter] == "correct" ||
        (nextGuessedLetters[letter] == "misplaced" && status != "correct")
      ) {
        return;
      } else {
        nextGuessedLetters[letter] = status;
      }
    });
    console.log(nextGuessedLetters);
    setGuessedLetters(nextGuessedLetters);

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
      <Keyboard guessedLetters={guessedLetters} />
    </>
  );
}

export default Game;
