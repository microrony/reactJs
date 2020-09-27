import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');

function MyApp() {
  return (
    <ul>
      <li>list one</li>
      <li>list two</li>
      <li>list three</li>
    </ul>
  );
}

ReactDom.render(<MyApp />, root);
