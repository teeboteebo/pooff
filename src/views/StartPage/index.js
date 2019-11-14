import React from 'react'
import TransactionHistoryPreview from '../../components/TransactionHistoryPreview'

const StartPage = () => {
  let integer, decimal
  const getBalanceAndSplit = async () => {
    let balance = 5000.69 // axios get mytrans/balance
    balance = balance.toLocaleString('sv-SE').split(',')
    integer = balance[0]
    decimal = balance[1]
  }
  getBalanceAndSplit()
  return (
    <div className="startpage">
      <div className="page-content">
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>

        <button className="btn">+</button>
      </div>
      <TransactionHistoryPreview />
    </div>
  )
}

export default StartPage