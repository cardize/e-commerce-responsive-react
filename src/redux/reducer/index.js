import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../actions/index'

const INITIAL_STATE = {
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

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity + 1,
            }
          } else {
            return item
          }
        }),
      }

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id && item.quantity > 1) {
            return {
              ...item,
              quantity: action.payload.quantity - 1,
            }
          } else {
            return item
          }
        }),
      }

    default:
      return state
  }
}
