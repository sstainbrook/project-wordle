import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, restartGame }) {
  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restartGame}>Try again?</button>
    </Banner>
  );
}

export default LostBanner;
