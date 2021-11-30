import { CHANGE_INPUT, CHECK, INSERT, REMOVE } from '../actions'

const initialState = {
  todos: [],
  input: '',
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      }
    case INSERT:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, done: false }],
      }
    case CHECK:
      return {
        ...state,
        todos: state.todos.map((item) => (item.id === action.payload ? { ...item, done: !item.done } : item)),
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

export default todosReducer
