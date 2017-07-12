import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'

const CategorySelector = (props) => {

  const categoryFields = categories.map((category, idx) => {
      return (
        <CategoryField
          key={ idx }
          checked={ }
          category={ }
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
