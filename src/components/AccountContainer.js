import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import categories from '../categories'
import seedData from '../seedData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: seedData,
      activeCats: new Set(["All"]),
      totalCatCount: categories.length - 1
    }
  }

  shouldDisplayAll = (cats, cat) => {
    return (cat === "All" || cats.size === this.state.totalCatCount || cats.size === 0)
  }

  updateCats = (cat, val) => {
    var newCats = new Set([...this.state.activeCats])
    val === "on" && newCats.delete(cat) || newCats.add(cat) // jankINESss TO THE MAX!!
    newCats.delete("All")
    this.shouldDisplayAll(newCats, cat) && (newCats = new Set(["All"])) // jankmasterflex. 
    this.setState({ activeCats: newCats })
  }

  handleClick = (e) => {
    this.updateCats(e.target.name, e.target.value)
  }

  getCatTransactions = (cat) => (this.state.transactions.filter(t => t.category === cat))

  getSelectTransactions = () => {
    if (this.state.activeCats.has("All"))
      return this.state.transactions
    return this.state.transactions.filter(trans => this.state.activeCats.has(trans.category))
  }

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector activeCategories={ this.state.activeCats } handleClick={ this.handleClick } />
        <TransactionsList transactions={ this.getSelectTransactions() }/>
      </div>
    )
  }
}

export default AccountContainer
