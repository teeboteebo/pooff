import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Spinner } from 'reactstrap'
import { Plus } from 'react-feather'

import TransactionLister from '../../components/TransactionLister'

const Kid = () => {
  const [child, setChild] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getChild = async () => {
      const response = await fetch('/api/mychildren')
      const fetchedChildren = await response.json()
      const child = fetchedChildren.find(child => child._id === id)
      setChild(child)
    }

    getChild()
  }, [])

  if (child) {
    let { firstName, lastName, balance, transactions } = child

    balance = (balance.toFixed(2) + '').split('.')
    console.log(transactions)
    return (
      <Container className="kid">
        <div>
          <h2 className="page-title">{firstName + ' ' + lastName}</h2>
          <div className="balance">
            <span className="amount-integer">{balance[0]}</span>
            <span className="amount-decimal">,{balance[1]} kr</span>
          </div>
          <button><Plus size="22" /></button>
          <p>För över pengar</p>
        </div>
        <TransactionLister transactions={transactions} />
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