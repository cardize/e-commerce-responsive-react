import './CheckOutPageStyles.scss'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/actions/index'
import { useState, useCallback } from 'react'

const CheckoutPage = (props) => {
  const [requestedId, setRequestedId] = useState('')
  const [isPopup, setIsPopup] = useState(false)

  const popupModal = useCallback(() => {
    if (isPopup === true) {
      return (
        <div className="popup-back" onClick={() => setIsPopup(false)}>
          <div className="popup-container">
            <button
              className="confirm-button"
              onClick={() => props.removeFromCart(requestedId)}
            >
              <h2>Yes</h2>
            </button>
            <button
              className="confirm-button"
              onClick={() => setIsPopup(false)}
            >
              <h2>No</h2>
            </button>
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
      </div>

      {popupModal()}

      <div className="cart-items">
        {props.cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <p className="item-texts">{item.name}</p>
                <p className="item-texts">{item.capacity}GB</p>
                <div className="buttons">
                  <button className="quantity-button">-</button>
                </div>
                <p>{item.quantity}</p>
                <div className="buttons">
                  <button className="quantity-button">+</button>
                </div>
                <p>${item.price}</p>

                <button
                  className="confirm-button"
                  onClick={() => (setIsPopup(true), setRequestedId(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="total">
        <h6>Total= $</h6>
      </div>
      <div className="test-warning">
        Please use any data for address and name and email, also use <br />
        card number: 3333 3333 3333 3333, expiry: 03/23, cvv: 333
      </div>
      <button onClick={() => refreshPage()} className="confirm-button">
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

export default connect(mapStateToProps, {
  removeFromCart,
})(CheckoutPage)
