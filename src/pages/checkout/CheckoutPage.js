import React from 'react'
import './CheckOutPageStyles.scss'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/actions/index'

const CheckoutPage = (props) => {
  console.log(props.cart)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span></span>
        </div>
      </div>

      <div className="cart-items">
        {props.cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <p>{item.name}</p>
                <p>{item.capacity}GB</p>
                <p> {props.cart.length}</p>
                <p>${item.price}</p>
                <button className="confirm-button">Remove</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="total">
        <h6>Total= ${props.cart.length * 100}</h6>
      </div>
      <div className="test-warning">
        Please use any data for address and name and email, also use <br />
        card number: 3333 3333 3333 3333, expiry: 03/23, cvv: 333
      </div>
      <button className="confirm-button" price={props.cart.length}>
        Confirm
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, { removeFromCart })(CheckoutPage)
