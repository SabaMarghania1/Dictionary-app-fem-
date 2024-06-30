import React from 'react';
import iconArrow from '../assets/icon-arrow-down.svg';
export default function FontChanger({state}) {
  return (
    <div className="font-changer">
      {state.fontFamily} <img src={iconArrow} className="arrow" alt="arrow" />
    </div>
  );
}
