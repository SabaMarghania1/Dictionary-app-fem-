import iconSearch from '../assets/icon-search.svg';

export default function Input({state, dispatch}) {
  const searchData = async () => {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${state.query}`);
      if (res.status === 404) {
        const data = await res.json();
        return dispatch({type: 'ERROR', payload: {notFound: data}});
      } else {
        const data = await res.json();
        dispatch({type: 'SEARCH', payload: data});
      }
    } catch (error) {
      dispatch({type: 'ERROR', payload: error, arrived: false});
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!state.query) {
      return dispatch({type: 'ERROR', payload: {queryError: 'Cannot be empty'}});
    }
    e.preventDefault();
    searchData();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          className={state.error.queryError ? 'error-border' : ''}
          type="text"
          onChange={e => dispatch({type: 'SET_QUERY', payload: e.target.value})}
        />
        <button type="submit" className="search">
          <img src={iconSearch} alt="icon" />
        </button>
      </div>
    </form>
  );
}
