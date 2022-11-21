import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }],
  ]);
  function clickCell (rowIndex: number, cellIndex: number) {
    let boardCopy = structuredClone(board)
    boardCopy[rowIndex][cellIndex].value = "X"
    
    console.log(boardCopy)

  }

  return (
    <div className="App">
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => <div className="cell">{cell.value}</div>)
        )}
      </div>
    </div>
  );
}

export default App;
