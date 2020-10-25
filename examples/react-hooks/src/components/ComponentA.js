import React, {useContext} from 'react'
import {CountContex} from '../App'

function ComponentA() {
  const countContex = useContext(CountContex)
  return (
    <div>
      Component A
      <button onClick={() => countContex.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContex.countDispatch('decrement')}>decrement</button>
      <button onClick={() => countContex.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA
