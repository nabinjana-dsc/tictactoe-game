import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner ? `Winner is ${winner}` : `Next Player is ${nextPlayer}`;

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
    <div className='app'>
    <h2>{statusMessage}</h2>
    {/* <h2>Next player is {nextPlayer}</h2> */}
    <div>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div> 
    </div>
  );
}

export default App;
