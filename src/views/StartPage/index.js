import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Plus, DollarSign } from 'react-feather'

import TopUp from '../../components/TopUp'
import TransactionHistoryPreview from '../../components/TransactionHistoryPreview'

const StartPage = () => {
  
  let integer, decimal
  const getBalanceAndSplit = async () => {
    let balance = 522000.69 // axios get mytrans/balance
    balance = balance.toLocaleString('sv-SE').split(',')
    integer = balance[0]
    decimal = balance[1]
  }
  getBalanceAndSplit()
  const [topUpToggle, setTopUpToggle] = useState(false)
  return (
    <Container className="startpage">
      <div className="page-content">
        <h2 className="page-title">
          <span className="amount-integer">{integer}</span>
          <span className="amount-decimal">,{decimal} kr</span>
        </h2>
        <Row className="buttons">
          <Col xs={{ size: "5", offset: 1 }}>
            <button className="pay-btn"><DollarSign size="22" /></button>
            <p>Betala</p>
          </Col>
          <Col xs="5">
            <button onClick={() => setTopUpToggle(true)}className="top-up-btn"><Plus size="22" /></button>
            <p>Fyll på pengar</p>
          </Col>
        </Row>
      </div>
      <TransactionHistoryPreview />
      <TopUp toggle={topUpToggle} clickHandler={() => setTopUpToggle(false)}/>
    </Container>
  )
}

export default StartPage