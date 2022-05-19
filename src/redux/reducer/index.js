import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/index'
import axios from 'axios'

const INITIAL_STATE = {
  phones: [],
  cart: [],
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
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [state.cart.filter((id) => id !== action.payload)],
      }
    default:
      return state
  }
}
