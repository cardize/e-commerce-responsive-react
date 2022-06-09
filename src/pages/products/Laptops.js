import React from 'react'
import './productsStyles.scss'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/index'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Laptops = (props) => {
  const url =
    'https://raw.githubusercontent.com/cardize/testData/main/datadb.json'

  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPhones(response.data.laptops))
      .catch((error) => console.log({ error }))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="productsContainer">
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-banner">
            <h1>LOADING...</h1>
          </div>
        </div>
      ) : (
        phones.map((item) => (
          <div className="productContainer" key={item.id}>
            <img className="productImage" src={item.Img} alt="" />
            <h1 className="productName">
              {item.name} {item.capacity}GB
            </h1>
            <h2 className="price">${item.price}</h2>
            <div className="addToCartButtonContainer">
              <button
                className="addToCartButton"
                onClick={() => props.addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
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
})(Laptops)
