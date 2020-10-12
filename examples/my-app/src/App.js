import React from 'react'
import './App.css'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Super Man" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  )
}

export default App
