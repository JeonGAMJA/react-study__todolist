import React from 'react'

const todoItem = () => {
  return (
    <li>
      {}
      <button onClick={() => modifyTodo(index)}>수정</button>
      <button onClick={() => deleteTodo(index)}>삭제</button>
    </li>
  )
}

export default todoItem
