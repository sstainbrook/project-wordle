import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numGuesses }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{`${numGuesses} guess${numGuesses == 1 ? "" : "es"}`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
