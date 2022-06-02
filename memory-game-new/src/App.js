import React from 'react';
import CardGrid from "./components/CardGrid";

import './App.css';

const App = () => {

    const handleClick = () => {
        window.location.reload();
    };

  return (
    <div className="App">
        <h2>Magic Match</h2>
        <button onClick={handleClick}>New Game</button>
        <CardGrid />
    </div>
  );
}

export default App;
