import React from 'react'
import './App.css'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Super Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  )
}

export default App
