import React, { Component } from 'react';

// JSX
// const C = props => {
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
// return (
//   <div>
//     <h1>
//       hello, {props.name} a.k.a {props.heroName}
//     </h1>
//     {props.children}
//   </div>
// );
// };

class C extends Component {
  render() {
    return (
      <div>
      <h1>
        hello, {this.props.name} a.k.a {this.props.heroName}
      </h1>
      {this.props.children}
      </div>
    );
  }
}

export default C;
