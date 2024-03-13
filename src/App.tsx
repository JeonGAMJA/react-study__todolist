import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state)

  return (
    <>
      <TodoForm />
      <TodoList></TodoList>
    </>
  )
}

export default App
