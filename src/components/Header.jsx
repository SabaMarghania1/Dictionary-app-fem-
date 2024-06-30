import React from 'react';

import logo from '../assets/logo.svg';

import FontChanger from './FontChanger';
import ThemeChanger from './ThemeChanger';
export default function Header({state, dispatch}) {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__right">
        <FontChanger state={state} />
        <ThemeChanger state={state} dispatch={dispatch} />
      </div>
    </header>
  );
}
