import './checkoutPage.scss'
import { connect } from 'react-redux'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/actions/index'
import { useState, useCallback } from 'react'

const CheckoutPage = (props) => {
  const [requestedId, setRequestedId] = useState('')
  const [isPopup, setIsPopup] = useState(false)
  const [isPayment, setIsPayment] = useState(false)

  const popupModal = useCallback(() => {
    if (isPopup === true) {
      return (
        <div className="popup-back" onClick={() => setIsPopup(false)}>
          <div className="popup-container">
            <h3 className="popup-text">
              Are you sure you want to remove this item?
            </h3>
            <div className="popup-button-container">
              <button
                className="confirm-button"
                onClick={() => props.removeFromCart(requestedId)}
              >
                Yes
              </button>
              <button
                className="confirm-button"
                onClick={() => setIsPopup(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )
    }
  }, [isPopup])

  function refreshPage() {
    window.parent.location = window.parent.location.href
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Capacity</span>
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
        <div className="header-block">
          <span></span>
        </div>
      </div>

      {popupModal()}

      <div className="cart-items">
        {props.cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <p className="item-texts">{item.name}</p>
              <p className="item-texts">{item.capacity}GB</p>
              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() =>
                    item.quantity >= 2 ? props.decreaseQuantity(item) : null
                  }
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="quantity-button"
                  onClick={() => props.increaseQuantity(item)}
                >
                  +
                </button>
              </div>

              <p>${item.price}</p>

              <button
                className="confirm-button"
                onClick={() => (setIsPopup(true), setRequestedId(item))}
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>

      <div className="total">
        <h6>Total= ${props.totalPrice}</h6>
      </div>
      <div className="test-warning">
        Please use any data for address and name and email, also use <br />
        card number: 3333 3333 3333 3333, expiry: 03/23, cvv: 333
      </div>
      <button onClick={() => setIsPayment(true)} className="confirm-button">
        Confirm
      </button>
      {isPayment ? (
        <div className="payment-container">
          <div className="payment-inputs">
            <input className="credit-number" placeholder="Card Number"></input>
            <input className="expiry" placeholder="M"></input>
            <input className="expiry" placeholder="Y"></input>
            <input className="expiry" placeholder="CVV"></input>
          </div>
          <button className="confirm-button" onClick={() => refreshPage()}>
            Complete Payment
          </button>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice,
  }
}

export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(CheckoutPage)
