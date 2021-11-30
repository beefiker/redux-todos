import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { increase, decrease, signIn, changeInput, insert, check, remove } from './actions'

function App() {
  const { count } = useSelector((state) => state.counter)
  const { logged } = useSelector((state) => state.logged)
  const { input, todos } = useSelector((state) => state.todo, shallowEqual)
  const dispatch = useDispatch()

  const insertNewTodo = () => {
    dispatch(insert(input))
    dispatch(changeInput(''))
  }

  return (
    <div className='App'>
      <div>{`count:${count}`}</div>
      <br />
      <input type='button' value='+' onClick={() => dispatch(increase())} />
      <input type='button' value='-' onClick={() => dispatch(decrease())} />
      <br />
      <br />

      <div>{`logged:${logged}`}</div>
      <input type='button' value='login' onClick={() => dispatch(signIn())} />
      <br />
      <br />
      <div>{`input:${input}`}</div>
      <input
        type='text'
        value={input}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            insertNewTodo()
          }
        }}
        onChange={(e) => {
          dispatch(changeInput(e.currentTarget.value))
        }}
      />
      <input
        type='button'
        value='ADD'
        onClick={() => {
          insertNewTodo()
        }}
      />
      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '1rem' }}>
        <h3>Todos</h3>
        {todos &&
          todos.length > 0 &&
          todos.map((item, index) => {
            return (
              <li key={index}>
                <span style={{ textDecoration: item.done ? 'line-through' : '' }}>{item.text}</span>
                <button style={{ marginLeft: '1rem' }} onClick={() => dispatch(check(item.id))}>
                  {item.done ? 'Uncheck' : 'Check'}
                </button>
                <button onClick={() => dispatch(remove(item.id))}>Delete</button>
              </li>
            )
          })}
      </ul>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
