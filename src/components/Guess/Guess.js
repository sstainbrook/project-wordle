import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span
          key={index}
          className={guess ? `cell ${guess[index].status}` : "cell"}
        >
          {guess && guess[index].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
