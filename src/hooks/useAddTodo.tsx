import { useState } from 'react'

const useAddTodo = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e: any) => {
    setInputValue(e.target.value)
  }

  return { inputValue, handleInput }
}

export default useAddTodo
