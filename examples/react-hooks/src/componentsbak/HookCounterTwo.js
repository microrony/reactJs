import React, { useState } from 'react';

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevState => prevState - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
