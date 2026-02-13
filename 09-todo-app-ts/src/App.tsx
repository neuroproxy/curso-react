import { useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoId } from './types'

const mockToDo = [
  {
    id: '1',
    title: 'Ser smart contract auditor',
    completed: false,
  },
  {
    id: '2',
    title: 'Ganar del trading',
    completed: true,
  },
  {
    id: '3',
    title: 'Ser Web developer/blockchain developer',
    completed: false,
  }
]


function App() { 

  const [todos, setTodos] = useState(mockToDo)

  const handleRemove = ({ id }: TodoId): void => {
    const newToDo = todos.filter(todo => todo.id !== id)
    setTodos(newToDo)
  }
 
  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove} 
        todos={todos} 
      />
    </div>
    
  )
}

export default App
