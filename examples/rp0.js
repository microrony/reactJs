// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page 
import React from 'react'
import ReactDom from 'react-dom'

const element = <ul>
                    <li>list one</li>
                    <li>list two</li>
                    <li>list three</li>
                </ul>;

ReactDom.render(element, document.getElementById('root'));
