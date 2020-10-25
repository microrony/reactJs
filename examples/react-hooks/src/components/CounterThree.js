import React, { useReducer } from 'react';

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>
      <h2>count - {countTwo}</h2>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
