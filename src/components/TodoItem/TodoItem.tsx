import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../../redux/todoSlice'
import { ChangeEvent, useState } from 'react'

interface TodoProps {
  todoText: string
  todoId: string
}

const TodoItem = ({ todoText, todoId }: TodoProps) => {
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState(todoText)

  const handleEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }

  const handleEdit = (e: React.MouseEvent) => {
    dispatch(editTodo({ id: todoId, newText: editValue }))
    setEdit(false)
  }

  return (
    <li>
      {edit ? (
        <>
          <input type="text" value={editValue} onChange={handleEditInput} />
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <p>{todoText}</p>
          <button onClick={() => setEdit(true)}>수정</button>
          <button onClick={() => dispatch(deleteTodo(todoId))}>삭제</button>
        </>
      )}
    </li>
  )
}

export default TodoItem
