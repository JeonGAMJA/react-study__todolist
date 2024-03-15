import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  text: string
  id: string
}

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: Todo = { text: action.payload, id: uuid() }
      state.todos.push(todo)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
      console.log(action)
      const { id, newText } = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      )
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
