import React from 'react'
import axios from 'axios'
import './productsStyles.scss'

export default class Phones extends React.Component {
  state = {
    phones: [],
  }

  componentDidMount() {
    axios
      .get(
        `https://raw.githubusercontent.com/cardize/testData/main/phonesdb.json`,
      )
      .then((res) => {
        const phones = res.data
        this.setState({ phones })
      })
  }

  render() {
    return (
      <div className="productsContainer">
        {this.state.phones.map((phone) => (
          <div className="productContainer">
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
}
