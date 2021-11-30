import counterReducer from './counter'
import loggedReducer from './logged'
import todosReducer from './todos'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  todo: todosReducer,
})

export default rootReducer
