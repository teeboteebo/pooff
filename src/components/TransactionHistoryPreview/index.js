import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { ChevronDown, ChevronUp } from 'react-feather'

import TransactionLister from '../TransactionLister'

const TransactionHistoryPreview = (props) => {
  const [showPreview, setShowPreview] = useState(false)
  const { transactions } = props

  return (
    <Container
      fluid={true}
      className={showPreview ? "preview-container open" : "preview-container"}>
      <div className="preview-tab" onClick={() => setShowPreview(!showPreview)}>{showPreview ? <ChevronDown /> : <ChevronUp />}</div>
      <div className="lister-container">
        {transactions.length < 1
          ? <p style={{ textAlign: "center", color: 'var(--primary)', marginTop: '20px', fontStyle: 'italic' }}>Du har ännu inte gjort några transaktioner</p>
          : <TransactionLister transactions={transactions} />
        }
      </div>
    </Container>
  )
}

export default TransactionHistoryPreview