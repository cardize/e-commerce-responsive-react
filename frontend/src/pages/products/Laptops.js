import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/index'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const Laptops = (props) => {
  const url =
    'https://raw.githubusercontent.com/cardize/testData/main/datadb.json'

  const [laptops, setLaptops] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdded, setIsAdded] = useState(false)

  const popupModal = useCallback(() => {
    if (isAdded)
      return (
        <div className="natification" onClick={() => setIsAdded(false)}>
          <span className="natification-text">Added to cart</span>
          <button className="natification-button">X</button>
        </div>
      )
  }, [isAdded])

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setLaptops(response.data.laptops))
      .catch((error) => console.log({ error }))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="productsContainer">
      {popupModal()}
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-banner">
            <h1>LOADING...</h1>
          </div>
        </div>
      ) : (
        laptops.map((item) => (
          <div className="productContainer" key={item.id}>
            <img className="productImage" src={item.Img} alt="" />
            <h1 className="productName">
              {item.name} {item.capacity}GB
            </h1>
            <h2 className="price">${item.price}</h2>
            <div className="addToCartButtonContainer">
              <button
                className="addToCartButton"
                onClick={() => (props.addToCart(item), setIsAdded(true))}
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
