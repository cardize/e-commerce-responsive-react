import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './productsStyles.scss'

function Laptops() {
  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json',
      )
      .then((response) => setLaptops(response.data))
      .catch((error) => console.log({ error }))
  }, [])

  return (
    <div className="productsContainer">
      {laptops.map((laptop) => (
        <div className="productContainer" key={laptop.id}>
          <img className="productImage" src={laptop.Img} alt="" />
          <h1 className="productName">
            {laptop.name} {laptop.capacity}GB
          </h1>
          <h2 className="price">${laptop.price}</h2>
          <div className="addToCartButtonContainer">
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Laptops
