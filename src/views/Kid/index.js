import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Spinner } from 'reactstrap'
import { Plus } from 'react-feather'

import { usePooff } from '../../context'

import TransactionLister from '../../components/TransactionLister'

const Kid = () => {
  const state = usePooff()

  const [filter, setFilter] = useState('all')

  const { id } = useParams()

  if (state.children.length) {
    const child = state.children.find(child => child._id === id)

    let { firstName, lastName, balance, transactions, phone, _id } = child

    balance = (balance.toFixed(2) + '').split('.')
    balance[0] = Number(balance[0]).toLocaleString('sv-SE')

    let filteredTransactions
    switch (filter) {
      case 'received':
        filteredTransactions = transactions.filter(transaction => transaction.amount > 0)
        break
      case 'sent':
        filteredTransactions = transactions.filter(transaction => transaction.amount < 0)
        break
      default:
        filteredTransactions = transactions
    }

    return (
      <Container className="kid">
        <h2 className="page-title">{firstName + ' ' + lastName}</h2>
        <div className="balance">
          <span className="amount-integer">{balance[0]}</span>
          <span className="amount-decimal">,{balance[1]} kr</span>
        </div>
        <div className="transfer">
          <Link to={{
            pathname: '/ny-betalning',
            state: {
              name: firstName + ' ' + lastName,
              phone
            }
          }}>
            <button><Plus size="22" /></button>
          </Link>
          <p>För över pengar</p>
        </div>
        <div className="sort-section mb-4">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'left active' : 'left'}>Alla</button>
          <button onClick={() => setFilter('received')} className={filter === 'received' ? 'middle active' : 'middle'}>Mottagna</button>
          <button onClick={() => setFilter('sent')} className={filter === 'sent' ? 'right active' : 'right'}>Skickade</button>
        </div>
        <TransactionLister transactions={filteredTransactions} kid={_id} />
      </Container>
    )
  }

  return (
    <Container className="kid">
      <Spinner />
    </Container>
  )
}

export default Kid