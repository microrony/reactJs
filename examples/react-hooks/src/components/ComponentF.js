import React, {useContext} from 'react'
import {CountContex} from '../App'

function ComponentF() {
  const countContex = useContext(CountContex)
  return (
    <div>
      Component F
      <button onClick={() => countContex.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContex.countDispatch('decrement')}>decrement</button>
      <button onClick={() => countContex.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentF
