import '../slider.css';
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
