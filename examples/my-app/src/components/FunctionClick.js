import React from 'react';

const FunctionClick = () => {
  const clickHandler = () => {
    console.log('button clicked')
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;