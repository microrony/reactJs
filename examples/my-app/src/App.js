import React from 'react';
import './App.css';
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className = 'App'>
      <h2 className= 'error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
    </div>
  );
}

export default App;
