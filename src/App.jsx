import React, { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

import './style.scss';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    // null, 'X', 'O'
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMessage />
      {/* <h2>Next player is {nextPlayer}</h2> */}
      <div>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </div>
  );
}

export default App;
