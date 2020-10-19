import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.clickHandler}>Increase</button>
      </div>
    );
  }
}

export default ClassCounter;
