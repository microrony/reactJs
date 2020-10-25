import React, {useContext} from 'react'
import {CountContex} from '../App'

function ComponentD() {
  const countContex = useContext(CountContex)
  return (
    <div>
      Component D
      <button onClick={() => countContex.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContex.countDispatch('decrement')}>decrement</button>
      <button onClick={() => countContex.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentD
