// Story.js
import React from 'react';

function Story({ data, onRestart }) {
  const { noun, verb, adjective, adverb } = data;

  return (
    <div>
      <h2>Story</h2>
      <p>
        Once upon a time, there was a {adjective} {noun} who loved to {verb}{' '}
        {adverb}. The {noun} would {verb} {adverb} every day, making everyone
        around them {adverb} {adjective}.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Story;
