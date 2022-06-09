import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/index'

const INITIAL_STATE = {
  phones: [],
  cart: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isAdded = state.cart.find((item) => item.id === action.payload.id)
      if (isAdded) {
        isAdded = false
        return state
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
