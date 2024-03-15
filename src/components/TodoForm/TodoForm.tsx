import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { addTodo } from '../../redux/todoSlice'
import { ChangeEvent, useState } from 'react'

/*
- 인풋에서 값을 받는다. 
*/
const TodoForm = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={inputValue} />
      <button type="submit">추가</button>
    </form>
  )
}

export default TodoForm
