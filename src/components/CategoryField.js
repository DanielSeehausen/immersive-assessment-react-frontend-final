import React from 'react'

const CategoryField = ({checked, category, handleClick}) => {
  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          name={ category }
          checked={ checked }
          onClick={ handleClick }
          readOnly={ true }
        />
        <label>{ category }</label>
      </div>
    </div>
  )
}

export default CategoryField
