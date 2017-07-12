import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import categories from '../categories'
import seedData from '../seedData'

class AccountContainer extends Component {

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector />
        <TransactionsList />
      </div>
    )
  }
}

export default AccountContainer
