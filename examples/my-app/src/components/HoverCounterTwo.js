import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state
    return <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2>
  }
}

export default ClickCounterTwo
