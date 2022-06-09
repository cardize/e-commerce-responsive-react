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

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}

export const increaseQuantity = (id, quantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export const decreaseQuantity = (id, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export const totalPrice = (price) => {
  return {
    type: TOTAL_PRICE,
    payload: price,
  }
}
