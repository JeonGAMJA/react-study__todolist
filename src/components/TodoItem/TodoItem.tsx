import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../../redux/todoSlice'

const TodoItem = ({ todoText, todoId }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <p>{todoText}</p>
      <button onClick={() => dispatch(editTodo())}>수정</button>
      <button onClick={() => dispatch(deleteTodo(todoId))}>삭제</button>
    </li>
  )
}

export default TodoItem
