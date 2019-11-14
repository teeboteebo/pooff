import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { ChevronDown, ChevronUp} from 'react-feather'

import TransactionLister from '../TransactionLister'

const TransactionHistoryPreview = () => {
  // const transactions = await fetch('/api/mytransactions') with limit of e.g. 5-8

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

  
  const [showPreview, setShowPreview] = useState(false)

  return (
    <Container
      fluid={true}
      className={showPreview ? "preview-container open" : "preview-container"}>
      <div className="preview-tab" onClick={() => setShowPreview(!showPreview)}>{showPreview ? <ChevronDown /> : <ChevronUp/> }</div>
      <div className="lister-container">
        <TransactionLister transactions={transactions} />
      </div>
    </Container>
  )
}

export default TransactionHistoryPreview