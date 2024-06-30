export const initialState = {
  theme: '',
  fontFamily: 'Sans-serif',
};

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'dark' ? '' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    case 'CHANGE_FONT_FAMILY':
      if (action.payload === 'mono') {
        return {...state, fontFamily: 'Space-Mono'};
      }
      return {
        ...state,
        fontFamily: action.payload,
      };
    default:
      return state;
  }
}
