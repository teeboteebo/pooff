import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'reactstrap'
import { User, Info, ChevronRight } from 'react-feather'

import { usePooff } from '../../context'

const KidsList = () => {
  const state = usePooff()

  const history = useHistory()

  if (state.children.length) {
    const transThisMonth = transactions => {
      let result = 0
      const year = new Date().getFullYear()
      const month = new Date().getMonth()
      let thisMonth = new Date(year, month)
      thisMonth = thisMonth.getTime()

      transactions.forEach(transaction => {
        let transDate = new Date(transaction.date)
        transDate = transDate.getTime()
        if (transDate >= thisMonth) result++
      })

      return result
    }

    state.children.forEach(child => child.transThisMonth = transThisMonth(child.transactions))

    return (
      <Container className="kids-list">
        <h2 className="page-title">Mina barn</h2>
        {state.children.map((child, i) => {
          let { firstName, lastName, balance, transThisMonth } = child

          balance = (balance.toFixed(2) + '').split('.')
          balance[0] = Number(balance[0]).toLocaleString('sv-SE')

          if (child.active) {
            return (
              <Row key={i} className="no-gutters align-items-center mb-4 p-3 child-box" onClick={() => history.push(`/mina-barn/${child._id}`)}>
                <Col>
                  <h6 className="mb-3">
                    <User />
                    <span className="ml-2">{firstName + ' ' + lastName}</span>
                  </h6>
                  <p className="mb-2"><span className="balance">{balance[0] + ',' + balance[1]}</span> SEK</p>
                  <p className="info-text">
                    <Info />
                    <span className="ml-2">
                      {firstName} har totalt <strong>{transThisMonth}</strong> {transThisMonth === 1 ? 'transaktion' : 'transaktioner'} den här månaden.
                    </span>
                  </p>
                </Col>
                <Col xs="auto"><ChevronRight /></Col>
              </Row>
            )
          }

          return (
            <Row key={i} className="no-gutters align-items-center mb-4 p-3 child-box inactive">
              <Col>
                <h6 className="mb-3">
                  <User />
                  <span className="ml-2">{firstName + ' ' + lastName}</span>
                </h6>
                <p className="mb-2">Kontot är inaktivt</p>
              </Col>
            </Row>
          )
        })}
      </Container>
    )
  }

  return (
    <div className="kids-list spinner">
      <Spinner />
    </div>
  )
}

export default KidsList