import { WINNER_COMBOS } from "../constant"

// Revisando las combinaciones combinadoras
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c, d] = combo
    if (
      boardToCheck[a] && 
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

  // Funcion que recibe el Square con el valor que existe en los indices
export const checkEndGame = (newBoard) => {
    // Para cada posicion si tiene un valor quiere decir que no hubo ganador por lo tanto empate
    return newBoard.every((square) => square !== null)
}