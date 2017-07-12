import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import categories from '../categories'
const seedData = [
  {
  id: 1,
  posted_at: "2017-02-28 11:00:00",
  description: "Leather Pants, Gap co.",
  category: "Fashion",
  amount: -20000
  },
  {
  id: 2,
  posted_at: "2017-02-29 10:30:00",
  description: "Paycheck from Bob's Burgers",
  category: "Income",
  amount: 100000
  },
  {
  id: 3,
  posted_at: "2017-05-24 10:53:00",
  description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
  category: "Entertainment",
  amount: -1498
  },
  {
  id: 4,
  posted_at: "2017-05-24 08:52:00",
  description: "Medium Iced Cold Brew, Gregory's Coffee",
  category: "Food",
  amount: -365
  }
]

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
    this.shouldDisplayAll() && newCats = new Set(["All"]) // jankmasterflex
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
