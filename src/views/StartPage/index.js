import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import { Plus, DollarSign } from "react-feather"

import { usePooff } from '../../context'

import TopUp from "../../components/TopUp"
import TransactionHistoryPreview from "../../components/TransactionHistoryPreview"

const StartPage = () => {
  const state = usePooff()
  let { balance } = state.loggedIn
  balance = (balance.toFixed(2) + '').split('.')
  balance[0] = Number(balance[0]).toLocaleString('sv-SE')
  /* const [integer, setInteger] = useState("0")
  const [decimal, setDecimal] = useState("00") */
  const [topUpToggle, setTopUpToggle] = useState(false)

  /* const getBalanceAndSplit = async () => {
    let balanceRaw = await fetch("/api/mytransactions/balance") // axios get mytrans/balance
    let balance = (await balanceRaw.json()).balance
    balance = balance.toLocaleString("sv-SE").split(",")
    setInteger(balance[0])
    if (balance[1]) setDecimal(balance[1])
  }
  getBalanceAndSplit() */
  return (
    <Container className="startpage">
      <div className="page-content">
        <h2 className="page-title">
          <span className="amount-integer">{balance[0]}</span>
          <span className="amount-decimal">,{balance[1]} kr</span>
        </h2>
        <Row className="buttons">
          <Col xs={{ size: "5", offset: 1 }}>
            <Link to="/ny-betalning">
              <button className="pay-btn">
                <DollarSign size="22" />
              </button>
            </Link>
            <p>Betala</p>
          </Col>
          <Col xs="5">
            <button onClick={() => setTopUpToggle(true)} className="top-up-btn">
              <Plus size="22" />
            </button>
            <p>Fyll på pengar</p>
          </Col>
        </Row>
      </div>
      <TransactionHistoryPreview transactions={[...state.loggedIn.transactions].slice(0,10)}/>
      <TopUp toggle={topUpToggle} clickHandler={() => setTopUpToggle(false)} />
    </Container>
  )
}

export default StartPage
