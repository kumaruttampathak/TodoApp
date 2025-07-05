import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Learn about redux toodkit</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
