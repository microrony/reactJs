import React from 'react';

// JSX
const C = () => {
  // return (
  //   <div id="hello" className="dummyClass">
  //     <h1>hello, mahabubur</h1>
  //   </div>
  // );
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'hello, mahabubur')
  );
};

export default C;
