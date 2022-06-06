import React from 'react'
import './productsStyles.scss'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, cartTotal } from '../../redux/actions/index'

const Phones = (props) => {
  return (
    <div className="productsContainer">
      {props.phones.map((item) => (
        <div className="productContainer" key={item.id}>
          <img className="productImage" src={item.Img} alt="" />
          <h1 className="productName">
            {item.name} {item.capacity}GB
          </h1>
          <h2 className="price">${item.price}</h2>
          <div className="addToCartButtonContainer">
            <button
              className="addToCartButton"
              onClick={() => (
                props.addToCart(item), props.cartTotal(item.price)
              )}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    phones: state.phones,
  }
}

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  cartTotal,
})(Phones)
