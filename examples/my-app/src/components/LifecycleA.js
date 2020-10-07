import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mahabubur',
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('componenetDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
