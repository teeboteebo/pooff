import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Spinner } from 'reactstrap'
import { Plus } from 'react-feather'

import TransactionLister from '../../components/TransactionLister'

const Kid = () => {
  const [child, setChild] = useState()
  const [filter, setFilter] = useState('all')
  const { id } = useParams()

  useEffect(() => {
    const getChild = async () => {
      const response = await fetch('/api/mychildren')
      const fetchedChildren = await response.json()
      const child = fetchedChildren.find(child => child._id === id)
      child.filteredTransactions = child.transactions
      setChild(child)
    }

    getChild()
  }, [])

  const filterTransactions = (filter) => {
    const { transactions } = child
    if (filter === 'received') {
      setChild({
        ...child,
        filteredTransactions: transactions.filter(transaction => transaction.amount > 0)
      })
      setFilter('received')
      return
    }
    if (filter === 'sent') {
      setChild({
        ...child,
        filteredTransactions: transactions.filter(transaction => transaction.amount < 0)
      })
      setFilter('sent')
      return
    }
    setChild({
      ...child,
      filteredTransactions: transactions
    })
    setFilter('all')
    return
  }

  if (child) {
    let { firstName, lastName, balance, filteredTransactions } = child

    balance = (balance.toFixed(2) + '').split('.')
    
    return (
      <Container className="kid">
        <h2 className="page-title">{firstName + ' ' + lastName}</h2>
        <div className="balance">
          <span className="amount-integer">{balance[0]}</span>
          <span className="amount-decimal">,{balance[1]} kr</span>
        </div>
        <div className="transfer">
          <button><Plus size="22" /></button>
          <p>För över pengar</p>
        </div>
        <div className="sort-section mb-4">
          <button onClick={() => filterTransactions('all')} className={filter === 'all' ? 'left active' : 'left'}>Alla</button>
          <button onClick={() => filterTransactions('received')} className={filter === 'received' ? 'middle active' : 'middle'}>Mottagna</button>
          <button onClick={() => filterTransactions('sent')} className={filter === 'sent' ? 'right active' : 'right'}>Skickade</button>
        </div>
        <TransactionLister transactions={filteredTransactions} />
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