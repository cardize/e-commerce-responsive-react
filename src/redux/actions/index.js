export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const TOTAL_PRICE = 'TOTAL_PRICE'

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  }
}

export const increaseQuantity = (item) => {
  return {
    type: INCREASE_QUANTITY,
    payload: item,
  }
}

export const decreaseQuantity = (item) => {
  return {
    type: DECREASE_QUANTITY,
    payload: item,
  }
}

export const totalPrice = (price) => {
  return {
    type: TOTAL_PRICE,
    payload: price,
  }
}
