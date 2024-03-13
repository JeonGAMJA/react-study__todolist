import useAddTodo from '../../hooks/useAddTodo'

const TodoForm = () => {
  const { inputValue, handleInput } = useAddTodo()

  const handleInput = (e: any) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="할 일을 입력해주세요."
        ></input>
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default TodoForm
