import React from 'react';
import logo from './logo.svg';
import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Star Wars API</p>
      </header>

      <People />
    </div>
  );
}

export default App;
