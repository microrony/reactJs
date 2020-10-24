import React from 'react';
import './App.css';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext();
export const UserNameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterOne.js />
    </div>
  );
}

export default App;
