import React from 'react'
import { NavLink } from 'react-router-dom'

import './CategoryItemStyles.scss'

const CategoryItem = ({ item }) => {
  return (
    <div>
      <NavLink className="imageContainer" to={`/${item.link}`}>
        <img className="categoryImage" src={item.img} alt="" />
        <button className="categoryButton">{item.title}</button>
      </NavLink>
    </div>
  )
}
export default CategoryItem
