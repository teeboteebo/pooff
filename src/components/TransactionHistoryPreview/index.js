import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { ChevronDown, ChevronUp } from 'react-feather'

import TransactionLister from '../TransactionLister'

const TransactionHistoryPreview = () => {
  const [showPreview, setShowPreview] = useState(false)
  
  const getLatestTransactions = async () => {
    const transactionsRaw = await fetch('/api/mytransactions')
    const transactions = await transactionsRaw.json()
    return transactions
  }

  return (
    <Container
      fluid={true}
      className={showPreview ? "preview-container open" : "preview-container"}>
      <div className="preview-tab" onClick={() => setShowPreview(!showPreview)}>{showPreview ? <ChevronDown /> : <ChevronUp />}</div>
      <div className="lister-container">
        {getLatestTransactions.length < 1 
        ? <p style={{textAlign: "center", color: 'var(--primary)', marginTop: '20px', fontStyle: 'italic'}}>Du har ännu inte gjort några transaktioner</p>
        : <TransactionLister transactions={getLatestTransactions} />
        }
      </div>
    </Container>
  )
}

export default TransactionHistoryPreview