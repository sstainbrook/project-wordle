import React, { useState } from "react";

function GuessInput() {
  const [guessInput, setGuessInput] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(guessInput);
    setGuessInput("");
  }

  function onGuessInputChange(e) {
    setGuessInput(e.target.value.toUpperCase());
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
        value={guessInput}
        onChange={onGuessInputChange}
      ></input>
    </form>
  );
}

export default GuessInput;
