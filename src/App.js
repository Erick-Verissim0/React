import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  console.log(action);
  if (action === 'aumentar') {
    return state + 1;
  }
  if (action === 'diminuir') {
    return state - 1;
  }
  return new Error('Error, action não existe!');
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <h2> {state} </h2>
    </div>
  );
}

export default App;
