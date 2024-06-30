import React, {useState} from 'react';
import iconArrow from '../assets/icon-arrow-down.svg';
export default function FontChanger({state, dispatch}) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(prev => !prev);
  }

  const fonts = ['Sans-serif', 'Serif', 'Mono'];
  return (
    <div className="font-changer">
      <div className="custom__select" onClick={handleOpen}>
        {state.fontFamily} <img src={iconArrow} className="arrow" alt="arrow" />
      </div>
      {isOpen && (
        <div className="fonts__list">
          <ul className="fonts">
            {fonts.map(font => {
              return (
                <p
                  className="font"
                  key={font}
                  id={font}
                  onClick={e => dispatch({type: 'CHANGE_FONT_FAMILY', payload: e.target.id})}
                >
                  {font}
                </p>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
