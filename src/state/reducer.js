export const initialState = {
  theme: '',
  fontFamily: 'Sans-serif',
  query: '',
  data: {},
  arrived: false,
  submitted: false,
  error: {},
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
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
        submitted: false,
        error: {querryError: '', notFound: state.error.notFound},
      };
    case 'SEARCH':
      return {...state, data: action.payload, submitted: true, error: {}};
    case 'ERROR':
      return {...state, error: action.payload, data: {}};
    default:
      return state;
  }
}
