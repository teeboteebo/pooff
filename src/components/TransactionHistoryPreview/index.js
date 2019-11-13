import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { } from 'react-feather'

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
    }
  ]
  let transactionLister = transactions.map((transaction, i) => {
    return (
      <Row className="mb-2 no-gutters transaction-card" key={'transaction_' + i}>
        <Col xs="7">
          <p className="trans-date">{new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
          <p>{transaction.sender.firstName}</p>
        </Col>
        <Col xs="4">{transaction.amount}</Col>
        <Col xs="1">></Col>
      </Row>
    )
  })

  const [showPreview, setShowPreview] = useState(false)


  return (
    <Container
      fluid={true}
      className={showPreview ? "preview-container p-1 open" : "preview-container p-1"}>
      <div className="preview-tab" onClick={() => setShowPreview(!showPreview)} />
      <div className="lister-container">
        {transactionLister}
      </div>
    </Container>
  )
}

export default TransactionHistoryPreview