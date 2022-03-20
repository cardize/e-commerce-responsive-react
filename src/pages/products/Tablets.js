import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './productsStyles.scss'

function Tablets() {
  const [tablets, setTablets] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json',
      )
      .then((response) => setTablets(response.data))
      .catch((error) => console.log({ error }))
  }, [])

  return (
    <div className="productsContainer">
      {tablets.map((tablet) => (
        <div className="productContainer" key={tablet.id}>
          <img className="productImage" src={tablet.Img} alt="" />
          <h1 className="productName">
            {tablet.name} {tablet.capacity}GB
          </h1>
          <h2 className="price">${tablet.price}</h2>
          <div className="addToCartButtonContainer">
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Tablets
