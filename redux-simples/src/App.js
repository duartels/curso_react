import React from 'react';
import './App.css';
import Interval from './components/Interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Draw from './components/Draw';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Interval ></Interval>
      </div>
      <div className="linha">
        <Average></Average>
        <Sum></Sum>
        <Draw></Draw>
      </div>
    </div>
  );
}

export default App;
