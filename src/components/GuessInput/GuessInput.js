import React, { useState } from "react";

function GuessInput({ onGuessSubmit, gameEnd }) {
  const [guess, setGuess] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    onGuessSubmit(guess);
    setGuess("");
  }

  function onGuessInputChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={onSubmit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        minLength={5}
        maxLength={5}
        required={true}
        disabled={gameEnd}
        value={guess}
        onChange={onGuessInputChange}
      ></input>
    </form>
  );
}

export default GuessInput;
