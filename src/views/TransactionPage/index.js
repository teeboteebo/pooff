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
      console.log('idToGet', idToGet);

      const t = await fetch(`/api/mytransactions/id/${idToGet.id}`)
      const transaction = await t.json()
      setTransaction(transaction);
    }
    getOneTransaction();
    // now ask  REST for the transaction with id = idToGet
    // ...await result from REST, using fetch
    // then do
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(transaction)


  // format date and remove punctuation
  if (transaction) {
    let date = new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })
    date = date.substring(0, date.length - 1);
    return (
      <Container className="transaction" fluid={true}>
        <h2 className="page-title">Transaktion</h2>
        <Row className="no-gutters">
          <Col xs="12">
            <div className="card">
              <div className="card-body ">
                <p className="name"> {transaction.receiver.firstName + ' ' + transaction.receiver.lastName} </p>
                <p className="phone">{transaction.receiver.phone}</p>
                <p className="amount"> {transaction.amount}kr </p>
                <p className="message">" {transaction.message} "</p>
                <p className="message">"{date}"</p>
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