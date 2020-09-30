import React from 'react';

// JSX
const C = props => {
  // return (
  //   <div id="hello" className="dummyClass">
  //     <h1>hello, mahabubur</h1>
  //   </div>
  // );

  // return React.createElement(
  //   'div',
  //   { id: 'hello', className: 'dummyClass' },
  //   React.createElement('h1', null, 'hello, mahabubur')
  // );

  // return <h1>hello, mahabubur</h1>;
  return <h1>hello, {props.name}</h1>;
};

export default C;
