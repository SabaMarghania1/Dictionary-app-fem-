import React, {useEffect} from 'react';
import {useReducer} from 'react';
import {initialState, reducer} from './state/reducer';
import Header from './components/Header';
import Main from './components/Main';
import Input from './components/Input';
import NotFound from './components/NotFound';
import Information from './components/Information';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'SEARCH', payload: data});
      })
      .catch(error => {
        dispatch({type: 'ERROR', payload: {notFound: 'Data not found'}});
      });
  }, []);

  return (
    <div className="app" style={{fontFamily: state.fontFamily}}>
      <Header state={state} dispatch={dispatch} />
      <Main>
        <Input state={state} dispatch={dispatch} />

        {state.error.queryError?.length > 0 && (
          <p className="error">Whoops, query can't be empty...</p>
        )}

        {state.error.notFound ? (
          <NotFound error={state.error.notFound} />
        ) : (
          state.arrived && <Information data={state.data[0]} errors={state.error} />
        )}
      </Main>
    </div>
  );
};

export default App;
