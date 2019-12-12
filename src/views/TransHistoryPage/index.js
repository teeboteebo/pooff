import React, { useState } from 'react';
import { Container } from 'reactstrap';

import { usePooff } from '../../context'

import TransactionLister from '../../components/TransactionLister'

const TransHistoryPage = () => {
  const state = usePooff()

  const [filter, setFilter] = useState('all')

  const { transactions } = state.loggedIn

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
    <Container className="trans-history">
      <h2 className="page-title">Transaktioner</h2>
      <div className="sort-section mb-4 w-100 d-flex">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'left active' : 'left'}>Alla</button>
        <button onClick={() => setFilter('received')} className={filter === 'received' ? 'middle active' : 'middle'}>Mottagna</button>
        <button onClick={() => setFilter('sent')} className={filter === 'sent' ? 'right active' : 'right'}>Skickade</button>
      </div>
      <TransactionLister transactions={filteredTransactions} />
    </Container>
  )
}

export default TransHistoryPage