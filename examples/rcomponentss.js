import React from 'react'
import ReactDom from 'react-dom'

function MyApp() {
  return (
    <ul>
    <li>list one</li>
    <li>list two</li>
    <li>list tree</li>
    </ul>
  )
}

ReactDom.render(
  <MyApp />,
  document.getElementById('root')
