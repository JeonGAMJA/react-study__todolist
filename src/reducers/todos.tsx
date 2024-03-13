enum ActionType {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
}

interface Action {
  type: ActionType
  index: number
  text: string
  newText: string
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text]
    case 'EDIT_TODO':
      return
    //   return state.todos.map((todo,i)=> i===index ? )
    case 'DELETE_TODO':
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}

export default todos
