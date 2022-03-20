import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './productsStyles.scss'

function Accessories() {
  const [accessories, setAccessories] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json',
      )
      .then((response) => setAccessories(response.data))
      .catch((error) => console.log({ error }))
  }, [])

  return (
    <div className="productsContainer">
      {accessories.map((accessorie) => (
        <div className="productContainer" key={accessorie.id}>
          <img className="productImage" src={accessorie.Img} alt="" />
          <h1 className="productName">
            {accessorie.name} {accessorie.capacity}GB
          </h1>
          <h2 className="price">${accessorie.price}</h2>
          <div className="addToCartButtonContainer">
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Accessories
