import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todoText={todo.text} todoId={todo.id} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
