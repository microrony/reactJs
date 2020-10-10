import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mahabubur',
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Mahabubur',
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
