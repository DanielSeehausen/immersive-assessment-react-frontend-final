import React from 'react'

const CategoryField = ({checked, category, handleChange}) => {
  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          name={ category }
          checked={ checked }
          onChange={ handleChange }
        />
        <label>{ category }</label>
      </div>
    </div>
  )
}

export default CategoryField
