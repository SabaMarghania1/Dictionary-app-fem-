import React from 'react';
import '../slider.css'; // Make sure this path is correct based on your project structure
import IconMoon from '../assets/icon-moon.svg';

export default function ThemeChanger({state, dispatch}) {
  function toggleTheme() {
    dispatch({type: 'TOGGLE_THEME'});
  }

  return (
    <div className="theme-changer">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={state.theme === 'dark'} />
        <span className="slider round"></span>
      </label>
      <img src={IconMoon} alt="Moon Icon" />
    </div>
  );
}
