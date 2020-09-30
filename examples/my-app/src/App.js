import React from 'react';
import C from './components/components';

function App() {
  return (
    <div className="App">
      <C name="Rony" heroName="Goku">
        <p>This is clildren props</p>
      </C>
      <C name="Sattar" heroName="China">
        <button>Action</button>
      </C>
      <C name="Raju" heroName="Manna" />
    </div>
  );
}

export default App;
