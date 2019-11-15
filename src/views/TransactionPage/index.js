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

  // let allSent = []
  // let allReceived = []

  //  let val = transactions.find((trans, i) => {
  //    return 
  //  })
  //   return (
  // <Container className="transaction" fluid={true}>
  //   <h2 className="page-title">Transaktion</h2>
  //   <Row>
  //     <Col xs="12">
  //       <div className="card">
  //         <div className="card-body mx-auto">
  //           <p className="name"> {val.firstName} </p>
  //           <p className="phone">Phone</p>
  //           <p className="amount">Amount</p>
  //           <p className="message">"Message"</p>
  //         </div>
  //       </div>
  //     </Col>
  //   </Row>
  // </Container>
  //   )

  let transaction = transactions.map((trans, i) => {
    // format date and remove punctuation
    // let date = new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })
    // date = date.substring(0, date.length - 1);
    return (
      <Container className="transaction" key={'trans' + i} fluid={true}>
        <h2 className="page-title">Transaktion</h2>
        <Row className="no-gutters">
          <Col xs="12">
            <div className="card">
              <div className="card-body mx-auto d-flex flex-column">
                <p className="name"> {trans.receiver.firstName + ' ' + trans.receiver.lastName} </p>
                <p className="phone">{trans.receiver.phone}</p>
                <p className="amount"> {trans.amount} </p>
                <p className="message">" {trans.message} "</p>

              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="mt-auto"> */}
          <Link to="/mina-transaktioner">
            <Button className="back-btn"><ArrowLeft /></Button>
          </Link>
        {/* </div> */}
      </Container>
    )

  })
  return transaction

}

export default TransactionPage