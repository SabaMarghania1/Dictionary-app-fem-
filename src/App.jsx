import {useReducer} from 'react';
import {initialState, reducer} from './state/reducer';
import Header from './components/Header';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app" style={{fontFamily: state.fontFamily}}>
      <Header state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
