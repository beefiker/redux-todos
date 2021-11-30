// ? counter
export const INCREASE = 'counter/INCREASE'
export const DECREASE = 'counter/DECREASE'

// ? logged
export const SIGN_IN = 'logged/SIGN_IN'

// ? todos
export const CHANGE_INPUT = 'todos/CHANGE_INPUT'
export const INSERT = 'todos/INSERT'
export const REMOVE = 'todos/REMOVE'
export const CHECK = 'todos/CHECK'

let id = 0

export const increase = () => ({
  type: INCREASE,
})

export const decrease = () => ({
  type: DECREASE,
})

export const signIn = () => ({
  type: SIGN_IN,
})

export const changeInput = (input) => {
  return { type: CHANGE_INPUT, payload: input }
}

export const insert = (id, text) => ({
  type: INSERT,
  payload: {
    id: ++id,
    text,
  },
})

export const remove = (id) => ({
  type: REMOVE,
  payload: id,
})

export const check = (id) => ({
  type: CHECK,
  payload: id,
})
