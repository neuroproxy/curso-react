// Funcion Square Padre que contiene como props 
export const Square = ({ children, isSelected, updateBoard, index }) => {

  // className
  const className = `square ${isSelected ? 'is-selected' : '' }`

  // Funcion que llama a updateBoard Padre -> Hijo y le pasamos el index del Square que sera capturado a partir del map
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}