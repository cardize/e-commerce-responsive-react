export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CART_TOTAL = 'CART_TOTAL'
export const UPDATE_TOTAL = 'UPDATE_TOTAL'

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

export const cartTotal = (price) => {
  return {
    type: CART_TOTAL,
    payload: price,
  }
}

export const updateTotal = (item) => {
  return {
    type: UPDATE_TOTAL,
    payload: item.quentity * item.price,
  }
}
