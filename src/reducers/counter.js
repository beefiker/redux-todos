import { INCREASE, DECREASE } from '../actions'

const initialState = {
  count: 11,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }

    default:
      return { ...state }
  }
}

export default counterReducer
