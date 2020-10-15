import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContex'

function App() {
  return (
    <div className="App">
      <UserProvider value="Mahabubur">
        <ComponentC />
      </UserProvider>
    </div>
  )
}

export default App
