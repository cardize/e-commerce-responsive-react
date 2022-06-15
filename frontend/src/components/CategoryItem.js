import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const CategoryItem = ({ item }) => {
  return (
    <div className="category-container">
      <NavLink className="image-container" to={`/${item.link}`}>
        <img className="category-image" src={item.img} alt="" />
        <button className="category-button">{item.title}</button>
      </NavLink>
    </div>
  )
}
export default CategoryItem
