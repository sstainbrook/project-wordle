import React from "react";

function GuessResults({ guessHistory }) {
  return (
    <div className='guess-results'>
      {guessHistory.map((guess, index) => (
        <p key={index}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
