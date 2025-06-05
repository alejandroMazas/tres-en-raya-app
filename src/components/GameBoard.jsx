const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard({ onSelectSquare}) {

    /*const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            //Es una buena práctica hacer una copia del array mediante el spread operator para evitar mutaciones directas al actualizar el estado
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // Aquí se puede cambiar 'X' por el símbolo del jugador actualutilizando la posición del botón que haya sido pulsado en el tablero de juego.
            return updatedBoard;
        })

        onSelectSquare()
    }*/

    return (
        <ol id="game-board">

            {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={onSelectSquare}>{playerSymbol}</button></li>)}
                </ol>
            </li>))}

        </ol>
    );
}