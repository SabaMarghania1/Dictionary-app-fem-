import React from 'react';
import audioIcon from '../assets/icon-play.svg';
import useSound from 'use-sound';

const AudioButton = ({audioUrl}) => {
  const [play] = useSound(audioUrl, {interrupt: true});

  const handlePlaySound = () => {
    if (audioUrl) {
      play();
    } else {
      console.error('No audio URL available');
    }
  };

  return (
    <button className="information__container-right" onClick={handlePlaySound} disabled={!audioUrl}>
      <img src={audioIcon} alt="Play sound" />
    </button>
  );
};

export default AudioButton;
