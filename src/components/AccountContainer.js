import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()
    this.seedData = [
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
    this.state = {
      transactions: this.seedData,
      activeCats: new Set(["All"]),
      totalCatCount: new Set(this.seedData.map(trans => trans.category)).size
    }
  }

  getUpdatedCats = (cat) => {
    var newCats = new Set(this.state.activeCats)
    newCats.add(cat)
    if ((cat === "All") || (newCats.length === this.state.totalCatCount))
      return new Set(["All"])
    return newCats
  }

  updateCats = (cat) => {
    const updatedCats = this.getUpdatedCats(cat)
    console.log(updatedCats)
    this.setState({ activeCats: updatedCats })
    console.log(this.state.activeCats)
  }

  handleChange = (e) => {
    this.updateCats(e.target.name)
    console.log(this.state)
  }

  getCatTransactions = (cat) => (this.state.transactions.filter(t => t.category === cat))

  getSelectTransactions = () => {
    if (this.state.activeCats.has("All"))
      return this.state.transactions
    let selectTrans = []
    this.state.activeCats.forEach(cat => {
      this.getCatTransactions(cat).forEach(t => selectTrans.push(t))
    })
    return selectTrans
  }

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector activeCategories={ this.state.activeCats } handleChange={ this.handleChange } />
        <TransactionsList transactions={ this.getSelectTransactions() }/>
      </div>
    )
  }
}

export default AccountContainer
