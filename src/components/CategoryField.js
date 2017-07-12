import React from 'react'

const CategoryField = ({checked, category}) => {
  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          name={  }
          checked={  }
        />
        <label>{ category }</label>
      </div>
    </div>
  )
}

export default CategoryField
