import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ChevronDown, ChevronUp} from 'react-feather'

const TransactionHistoryPreview = () => {
  const transactions = [
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Lasse',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Bank',
        lastName: 'Skida'
      },
      amount: -10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    }
  ]
  let user = 'Lasse'
  let name
  let transactionLister = transactions.map((transaction, i) => {
    if (transaction.sender.firstName === user) {
      name = transaction.receiver.firstName
    } else {
      name = transaction.sender.firstName
    }
    return (
      <Row className="mb-2 no-gutters transaction-card" key={'transaction_' + i}>
        <Col xs="7">
          <p className="trans-date">{new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
          <p>{name}</p>
        </Col>
        <Col xs="4">{transaction.amount.toLocaleString('sv-SE')}</Col>
        <Col xs="1" style={{color: 'var(--primary)'}}>></Col>
      </Row>
    )
  })

  const [showPreview, setShowPreview] = useState(false)

  return (
    <Container
      fluid={true}
      className={showPreview ? "preview-container p-1 open" : "preview-container p-1"}>
      <div className="preview-tab" onClick={() => setShowPreview(!showPreview)}>{showPreview ? <ChevronDown /> : <ChevronUp/> }</div>
      <div className="lister-container">
        {transactionLister}
      </div>
    </Container>
  )
}

export default TransactionHistoryPreview