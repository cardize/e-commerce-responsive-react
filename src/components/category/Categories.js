import React from 'react'
import categories from '../../categories'
import CategoryItem from '../categoryItem/CategoryItem'

import './CategoriesStyles.scss'

const Categories = () => {
  return (
    <div className="categoriesContainer">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}
export default Categories
