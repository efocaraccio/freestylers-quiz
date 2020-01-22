import React from 'react';
import logo from '../img/freelogo.png';
import './App.css';
import Button from '../components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Button dir={"#"} text={"Comenzar Quiz"}></Button>
        </div>
      </header>
    </div>
  );
}

export default App;
