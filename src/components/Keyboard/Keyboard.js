import React from "react";
import KeyboardKey from "../KeyboardKey/KeyboardKey";

function Keyboard({ guessedLetters }) {
  const rowOne = "QWERTYUIOP".split("");
  const rowTwo = "ASDFGHJKL".split("");
  const rowThree = "ZXCVBNM".split("");
  const rows = [rowOne, rowTwo, rowThree];
  return rows.map((row, index) => (
    <div
      key={index}
      className='keyboard'
    >
      {row.map((letter, index) => (
        <KeyboardKey
          key={index}
          status={
            Object.hasOwn(guessedLetters, letter) && guessedLetters[letter]
          }
        >
          {letter}
        </KeyboardKey>
      ))}
    </div>
  ));
}

export default Keyboard;
