import { useEffect, useState } from "react"
import { Square } from "./components/Square"
import { WINNER_COMBOS, TURNS } from "./constant"
import { checkWinner } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { checkEndGame } from "./logic/board"
import { Board } from "./components/Board"

function App() {
  // Actualizando estados
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(42).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  // Reseteando el juego utilizando el seteo de cada estado
  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const encontrarPosicion = (index, board) => {
    let columna = index % 7 // -> columna del index clickeado
    console.log(`Click en índice: ${index}, Columna: ${columna}`)

    let indiceActual = 35 + columna // -> empezar desde el fondo de esa columna
    console.log(`Empezando desde índice: ${indiceActual}`)

    while (indiceActual >= 0) {   // -> recorremos el tablero
      console.log(`Verificando índice: ${indiceActual}, Valor: ${board[indiceActual]}`)

      if(board[indiceActual] === null) { //  -> verificamos si el indice ya tiene una ficha
        return indiceActual       // -> retornamos el indice actual
      }
      
      console.log(`Columna ${columna} llena, retornando null`)
      indiceActual -= 7 // -> restamos 7 para subir una fila
    }
    return null
  }
  
  // Colocamos la funcion dentro ya que debemos actualizar los estados de forma constante vigilando turnos y secciones del tablero
  const updateBoard = (index) => {

    console.log(`=== Click recibido en índice: ${index} ===`)
    const targetIndex = encontrarPosicion(index, board)
    console.log(`Target index calculado: ${targetIndex}`)

    if (targetIndex === null){
      return
    }
    
    // Para no volver a reescribir en el mismo indice
    if (board[targetIndex] || winner ) return 

    const newBoard = [...board] // Renderizamos los estados copiandolos en otro array ya que el estado originial es inmutable
    newBoard[targetIndex] = turn      // Asignamos el indice mapeado previamente del Square donde se introdujo una X u O almacenado en turn
    setBoard(newBoard)          // Actualizamos la tabla tres en raya con los nuevos indices

    // newTurn contiene X u O
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)            // Actualizamos el turno

    // Guardando partida -> guarda un string
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    // Guardamos el nuevo turno
    window.localStorage.setItem('turn', newTurn)
    
    const newWinner = checkWinner(newBoard) // Pasando los estados del Square clonados para verificar si existe un ganador
    if (newWinner) {
      alert(`El ganador es ${newWinner}`)
      setWinner(newWinner) // Actualizacion asincrona!!!
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Verificando empate
    }
  }
  useEffect(() => {
    console.log("useEffect ejecutandose")
  }, [winner])
  
  return (
    <main className="board">
      <h1>Cuatro en raya</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        <Board 
          board={board}
          updateBoard={updateBoard}
        />
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal 
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}

export default App
