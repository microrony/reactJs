import React from 'react';
import C from './components/components';

function App() {
  return (
    <div>
      <C name="Rony">
        <p>This is a children</p>
      </C>
      <C name="Sattar"/>
      <C name="Raju"/>
    </div>
  );
}

export default App;
