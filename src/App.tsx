import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [turn, setTurn] = useState<"X" | "O" | null>(null);
  const [board, setBoard] = useState([
    [
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
    ],
    [
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
    ],
    [
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
      { value: "", clickedBefore: false },
    ],
  ]);
  function clickCell(rowIndex: number, cellIndex: number) {
    let boardCopy = structuredClone(board);
    if(turn === "X") {
      boardCopy[rowIndex][cellIndex].value = "X"
      setTurn("O")
    } 
    if(turn === "O") {
      boardCopy[rowIndex][cellIndex].value = "O"
      setTurn("X")
    }
  
    setBoard(boardCopy);
  }
  function goesFirst() {
    let newValue = Math.random() > 0.5;
    if (newValue) setTurn("X");
    else setTurn("O");
  }

  return (
    <div className="App">
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              className="cell"
              onClick={() => {
                clickCell(rowIndex, cellIndex);
              }}
            >
              {cell.value}
            </div>
          ))
        )}
      </div>
      {turn ? <p> It's {turn} s turn</p> : null}
      <div className="buttons">
        <button
          onClick={() => {
            goesFirst();
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
