import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Row, Container, Button, Spinner } from 'reactstrap';

import { usePooff } from '../../context'

const TransactionPage = () => {
  const state = usePooff()
  const history = useHistory()
  const [transaction, setTransaction] = useState(null);
  const idToGet = useParams('id');
  useEffect(() => {
    const getOneTransaction = () => {

      let transaction
      if (idToGet.childId) {
        transaction = state.children
          .find(child => child._id === idToGet.childId).transactions
          .find(transaction => transaction._id === idToGet.id)
      } else {
        transaction = state.loggedIn.transactions
          .find(transaction => transaction._id === idToGet.id)
      }
      setTransaction(transaction);
    }
    getOneTransaction();
    //comment below removes varning to include or exclude idToGet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // format date and remove punctuation
  if (transaction) {
    let date = new Date(transaction.date).toLocaleString('sv-SE', { timeZone: 'UTC' })
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
                <p className={transaction.amount > 0 ? "mb-3 incoming" : "mb-3 outgoing"}>{transaction.amount.toLocaleString('sv-SE')}kr</p>
                <div className="frame">
                  {transaction.message ?
                    <p className="message">{transaction.message}</p>
                    : ''}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
            <Button className="back-btn" onClick={() => history.goBack()}><ArrowLeft /></Button>
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