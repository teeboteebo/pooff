import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const TransactionPage = () => {

  // const transactions = await fetch('/api/mytransactions')
  // const transactions = [
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 100000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Lasse',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Bank',
  //       lastName: 'Skida'
  //     },
  //     amount: -10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   },
  //   {
  //     sender: {
  //       firstName: 'Don',
  //       lastName: 'Bank'
  //     },
  //     receiver: {
  //       firstName: 'Lasse',
  //       lastName: 'Skida'
  //     },
  //     amount: 10000,
  //     message: "Top up",
  //     date: Date.now(),
  //   }
  // ]

  // let allSent = []
  // let allReceived = []

  // transactions.forEach(trans => {
  //   if (trans.amount > 0) {
  //     allReceived.push(trans)
  //   } else if (trans.amount < 0) {
  //     allSent.push(trans)
  //   }
  // })
  return (
    <Container className="transaction" fluid={true}>
      <h2 className="page-title">Transaktion</h2>
      <Row>
        <Col xs="12">
          <div className="card">
            <div className="card-body mx-auto">
              <p className="name"> Fullname </p>
              <p className="phone">Phone</p>
              <p className="amount">Amount</p>
              <p className="message">Message</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TransactionPage