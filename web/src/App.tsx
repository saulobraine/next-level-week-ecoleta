import React from 'react';
import logo from './logo.svg';
import logoBraine from './Logo-Braine.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoBraine} className="App-Braine" />
        <p>Agora vai!</p>
      </header>
    </div>
  );
}

export default App;
