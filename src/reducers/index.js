import counterReducer from './counter'
import loggedReducer from './logged'
import todosReducer from './todos'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counterReducer,
  loggedReducer,
  todosReducer,
})

export default rootReducer
