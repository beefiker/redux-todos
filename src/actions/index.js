const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const SIGN_IN = 'SIGN_IN'

const CHANGE_INPUT = 'CHANGE_INPUT'
const INSERT = 'INSERT'
const REMOVE = 'REMOVE'
const CHECK = 'CHECK'

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

export const insert = (text) => ({
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
