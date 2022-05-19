import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_TOTAL,
  UPDATE_TOTAL,
} from '../actions/index'
import axios from 'axios'

const INITIAL_STATE = {
  phones: [],
  cart: [],
  cartTotal: 0,
}

export const reducer = (state = INITIAL_STATE, action) => {
  axios
    .get(
      'https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json',
    )
    .then((response) => (state.phones = response.data))
    .catch((error) => console.log({ error }))
  switch (action.type) {
    case ADD_TO_CART:
      let isAdded = state.cart.find((item) => item.id === action.payload.id)
      if (isAdded) {
        action.payload.quentity++
        isAdded = false
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

    case CART_TOTAL:
      return {
        ...state,
        cartTotal: state.cartTotal + action.payload,
      }

    case UPDATE_TOTAL:
      return {
        ...state,
        cartTotal: state.cartTotal - action.payload,
      }

    default:
      return state
  }
}
