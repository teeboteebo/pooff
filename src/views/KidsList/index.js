import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { User, Info, ChevronRight } from 'react-feather'

const KidsList = () => {
  const [children, setChildren] = useState([])

  useEffect(() => {
    const transactionsThisMonth = transactions => {
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

    const getChildren = async () => {
      const response = await fetch('api/mychildren')
      const fetchedChildren = await response.json()
      fetchedChildren.forEach(child => {
        child.transThisMonth = transactionsThisMonth(child.transactions)
      })
      setChildren(fetchedChildren)
    }

    getChildren()
  }, [])

  return (
    <Container className="kids-list">
      <h2 className="page-title">Mina barn</h2>
      {children.map((child, i) => {
        const { firstName, lastName, balance, transThisMonth } = child
        return (
          <Row key={i} className="no-gutters align-items-center mb-4 p-3 child-box">
            <Col>
              <h6 className="mb-3">
                <User />
                <span className="ml-2">{firstName + ' ' + lastName}</span>
              </h6>
              <p className="mb-2">Saldo: <span className="balance">{balance}</span> SEK</p>
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
      })}
    </Container>
  )
}

export default KidsList