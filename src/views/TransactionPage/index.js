import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather'
import { Link, useParams } from 'react-router-dom'
import { Col, Row, Container, Button, Spinner } from 'reactstrap';

const TransactionPage = () => {
  console.log(useParams('id'))
  const [transaction, setTransaction] = useState(null);
  const idToGet = useParams('id');
  useEffect(() => {
    const getOneTransaction = async () => {
      const t = await fetch(`/api/mytransactions/id/${idToGet.id}`)
      const transaction = await t.json()
      setTransaction(transaction);
    }
    getOneTransaction();
    //comment below removes varning to include or exclude idToGet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(transaction)


  // format date and remove punctuation
  if (transaction) {
    let date = new Date(transaction.date).toLocaleString('sv-SE', { timeZone: 'UTC'  })
    return (
      <Container className="transaction" fluid={true}>
        <h2 className="page-title">Transaktion</h2>
        <Row>
          <Col xs="12">
            <div className="card mx-auto">
              <div className="card-body mt-4">
                <p className="name mb-2">{transaction.amount > 0 ? `${transaction.sender.firstName} ${transaction.sender.lastName}` : `${transaction.receiver.firstName} ${transaction.receiver.lastName}`}</p>
                <p className="date mb-4">{date}</p>
                <p className="phone mb-4">{transaction.receiver.phone}</p>
                <p className={transaction.amount > 0 ? "mb-3 incoming" : "mb-3 outgoing"}>{transaction.amount}kr</p>
                <p className="message mb-4">{transaction.message}</p>
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
  } else {
    return (
      <Container fluid={true}>
        <h2 className="page-title">Transaktion</h2>
        <Spinner />
      </Container>
    )
  }
}

export default TransactionPage