import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numGuesses, restartGame }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{`${numGuesses} guess${numGuesses == 1 ? "" : "es"}`}</strong>.
      </p>
      <button onClick={restartGame}>Play again?</button>
    </Banner>
  );
}

export default WonBanner;
