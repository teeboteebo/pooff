import React from 'react'

import { Row, Col } from 'reactstrap';

import { ChevronRight } from 'react-feather'
// import TransactionPage from '../../views/TransactionPage';


const TransactionLister = (props) => {
  const getTransaction = (id)=> {
    const transaction = props.transactions;
    let  test = transaction.find((item) =>{
      return item.id === id
    })
    console.log(test, 'rätt transaktion')
  }

  let transactions = props.transactions.map((transaction, i) => {
    // format date and remove punctuation
    let date = new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })
    date = date.substring(0, date.length - 1);
    return (
      <Row className={transaction.amount > 0 ? "mb-2 no-gutters transaction-card incoming" : "mb-2 no-gutters transaction-card outgoing"} key={'transaction_' + i}>
        <Col xs="7">
          <p className="trans-date">{date}</p>
          <p className="trans-name">{transaction.amount > 0 ? `${transaction.sender.firstName} ${transaction.sender.lastName}` : `${transaction.receiver.firstName} ${transaction.receiver.lastName}`}</p>
        </Col>
        <Col xs="4" className="trans-amount">{transaction.amount.toLocaleString('sv-SE')}</Col>
        <Col xs="1" className="trans-arrow" onClick={(e) => getTransaction(transaction.id, e)}><ChevronRight /></Col>
      </Row>
    )
  })
  return transactions
}

export default TransactionLister