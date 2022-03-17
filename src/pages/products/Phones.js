import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './productsStyles.scss'

function Phones() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json',
      )
      .then((response) => setPhones(response.data))
      .catch((error) => console.log({ error }))
  }, [])

  return (
    <div className="productsContainer">
      {phones.map((phone) => (
        <div className="productContainer" key={phone.id}>
          <img className="productImage" src={phone.Img} alt="" />
          <h1 className="productName">
            {phone.name} {phone.capacity}GB
          </h1>
          <h2 className="price">${phone.price}</h2>
          <div className="addToCartButtonContainer">
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Phones
