import React, {useContext} from 'react'
import {CountContex} from '../App'

function ComponentA() {
  const {countState, countDispatch} = useContext(CountContex)
  return (
    <div>
      Component A - {countState}
      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA
