import { useState } from 'react'

const useAddTodo = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return { inputValue, handleInputChange }
}

export default useAddTodo
