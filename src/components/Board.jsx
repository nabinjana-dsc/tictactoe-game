import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);
  // The value of the nextMove will alternate between X and O. When it is X's turn (nextMove === "X")
  // console.log(Squares);

  const handleSquareClick = clickedPosition => {
    // null, 'X', 'O'
    if (Squares[clickedPosition]) {
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

  const renderSquare = position => {
    return (
      <Square
        value={Squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {/* <Square value={Squares[0]} onClick={() => handleSquareClick(0)} />
        <Square value={Squares[1]} onClick={() => handleSquareClick(1)} />
        <Square value={Squares[2]} onClick={() => handleSquareClick(2)} /> */}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
