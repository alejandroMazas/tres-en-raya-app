import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            //Es una buena práctica hacer una copia del array mediante el spread operator para evitar mutaciones directas al actualizar el estado
            updatedBoard[rowIndex][colIndex] = 'X'; // Aquí se puede cambiar 'X' por el símbolo del jugador actual
            return updatedBoard;
        })
    }

    return (
        <ol id="game-board">

            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>))}

        </ol>
    );
}