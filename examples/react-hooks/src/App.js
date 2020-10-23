import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();
export const UserNameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Mahabubur'}>
        <UserNameContext.Provider value={'microrony'}>
          <ComponentC />
        </UserNameContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
