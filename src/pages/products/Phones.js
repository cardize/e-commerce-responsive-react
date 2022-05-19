import React from 'react'
import './productsStyles.scss'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, cartTotal } from '../../redux/actions/index'

function Phones(props) {
  return (
    <div className="productsContainer">
      {props.phones.map((phone) => (
        <div className="productContainer" key={phone.id}>
          <img className="productImage" src={phone.Img} alt="" />
          <h1 className="productName">
            {phone.name} {phone.capacity}GB
          </h1>
          <h2 className="price">${phone.price}</h2>
          <div className="addToCartButtonContainer">
            <button
              className="addToCartButton"
              onClick={() => (
                props.addToCart(phone), props.cartTotal(phone.price)
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
