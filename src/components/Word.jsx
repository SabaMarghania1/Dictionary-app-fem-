import React from 'react';

export default function Word({word, phonetic}) {
  return (
    <div className="information__container-left">
      <h1 className="word">{word}</h1>
      <p className="phonetic">{phonetic}</p>
    </div>
  );
}
