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
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameEnding, setGameEnding] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState({});

  function onGuessSubmit(nextGuess) {
    const nextGuessHistory = [...guessHistory];
    nextGuessHistory.push(nextGuess);
    setGuessHistory(nextGuessHistory);
    checkGuessedLetters(nextGuess);

    if (nextGuess === answer) {
      setGameEnding("win");
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameEnding("lose");
    }
  }

  function checkGuessedLetters(nextGuess) {
    const checkedLetters = checkGuess(nextGuess, answer);
    const nextGuessedLetters = { ...guessedLetters };

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
    setGuessedLetters(nextGuessedLetters);
  }

  function restartGame() {
    setGuessHistory([]);
    setGuessedLetters({});
    setGameEnding(null);
    setAnswer(sample(WORDS));
  }

  console.info({ answer });
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
      {gameEnding == "win" && (
        <WonBanner
          numGuesses={guessHistory.length}
          restartGame={restartGame}
        />
      )}
      {gameEnding == "lose" && (
        <LostBanner
          answer={answer}
          restartGame={restartGame}
        />
      )}
      <Keyboard guessedLetters={guessedLetters} />
    </>
  );
}

export default Game;
