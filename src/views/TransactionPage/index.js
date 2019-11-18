import React from 'react';
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Button } from 'reactstrap';

const TransactionPage = () => {

  // const transactions = await fetch('/api/mytransactions')
  const transactions = [
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank',
        phone: '97884 83884',
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida',
        phone: '0700029929',
      },
      amount: 10000,
      message: "Mega festligt med sär skrivning och sånt",
      date: Date.now(),
    },
  ]

  let transaction = transactions.map((trans, i) => {
    // format date and remove punctuation
    let date = new Date(trans.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })
    date = date.substring(0, date.length - 1);
    return (
      <Container className="transaction" key={'trans' + i} fluid={true}>
        <h2 className="page-title">Transaktion</h2>
        <Row className="no-gutters">
          <Col xs="12">
            <div className="card">
              <div className="card-body ">
                <p className="name"> {trans.receiver.firstName + ' ' + trans.receiver.lastName} </p>
                <p className="phone">{trans.receiver.phone}</p>
                <p className="amount"> {trans.amount}kr </p>
                <p className="message">" {trans.message} "</p>
                <p className="message">" {date} "</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <Link to="/mina-transaktioner">
            <Button className="back-btn"><ArrowLeft /></Button>
          </Link>
        </div>
      </Container>
    )
  })
  return transaction

}

export default TransactionPage