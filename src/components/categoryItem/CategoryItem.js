import React from 'react'
import './CategoryItemStyles.scss'

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItemContainer">
      <img className="categoryImage" src={item.img} alt="" />
      <div className="catrgoryInfo">
        <span className="categoryTitle">{item.title}</span>
        <button className="button">SHOP NOW</button>
      </div>
    </div>
  )
}
export default CategoryItem
