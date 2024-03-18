import React from "react";

function Banner({ gameEnding, numGuesses, answer }) {
  var className =
    gameEnding == "win"
      ? "happy banner"
      : gameEnding == "lose"
      ? "sad banner"
      : undefined;

  return (
    gameEnding != null && (
      <div className={className}>
        {gameEnding == "win" && (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numGuesses} guesses</strong>.
          </p>
        )}
        {gameEnding == "lose" && (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
    )
  );
}

export default Banner;
