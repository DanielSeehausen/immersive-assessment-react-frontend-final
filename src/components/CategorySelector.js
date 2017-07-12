import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = ({activeCategories, handleChange}) => {

  const categoryFields = categories.map((category, i) => {
      return (
        <CategoryField
          key={ i }
          checked={ activeCategories.has(category) }
          category={ category }
          handleChange={ handleChange }
        />
      )
    }
  )


  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          { categoryFields }
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
