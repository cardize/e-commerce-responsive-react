import React from 'react'

import categories from '../categories'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}
export default Categories
