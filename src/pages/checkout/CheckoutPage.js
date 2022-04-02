import React from 'react'

import './CheckOutPageStyles.scss'

function CheckoutPage({ total }) {
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
          <span>Remove</span>
        </div>
      </div>
      <div className="total">
        <span>Total= ${total}</span>
      </div>
      <div className="test-warning">
        Please use any data for address and name and email, also use <br />
        card number: 3333 3333 3333 3333, expiry: 03/23, cvv: 333
      </div>
      <button price={total} />
    </div>
  )
}

export default CheckoutPage
