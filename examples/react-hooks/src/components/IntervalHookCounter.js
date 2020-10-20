import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    funtion doSomething() {
      console.log(someProp)
    }
    doSomething()
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [someProp]);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
