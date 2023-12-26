// import Square from './components/Square';
import './style.scss';
import { useState } from 'react';
// import Board from './components/Board';


function App() {
  const [counter, setCounter] = useState(1);

  console.log("Hello");

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };
  
  return (
    <div className='app'>
    <div>
    <button onClick={onBtnClick}>Click Here</button>
    <div>{ counter }</div>
      {/* <Board /> */}
    </div> 
    </div>
  );
}

export default App;
