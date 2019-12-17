import React from 'react'
import { Row, Col } from 'reactstrap';
import { ChevronRight } from 'react-feather';
import { useHistory } from 'react-router-dom';


const TransactionLister = (props) => {
  const history = useHistory()

  let transactions = props.transactions.map((transaction, i) => {
    // format date and remove punctuation
    let date = new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })
    date = date.substring(0, date.length - 1);
    return (
      <Row
        className={transaction.amount > 0 ?
          "mb-2 no-gutters transaction-card incoming align-items-center"
          :
          "mb-2 no-gutters transaction-card outgoing align-items-center"
        }
        key={'transaction_' + i}
        onClick={() => history.push(props.kid
          ? '/mina-barn/' + props.kid + '/transaktioner/' + transaction._id
          : '/mina-transaktioner/' + transaction._id)}
      >
        <Col xs="7">
          <p className="trans-date">{date}</p>
          <p className="trans-name">{transaction.amount > 0 ? `${transaction.sender.firstName} ${transaction.sender.lastName}` : `${transaction.receiver.firstName} ${transaction.receiver.lastName}`}</p>
        </Col>
        <Col xs="4" className="trans-amount">{transaction.amount.toLocaleString('sv-SE')}</Col>
        <ChevronRight className="trans-arrow col-1" />
      </Row>
    )
  })
  if (!props.transactions[0]) {
    return (
      <Row className="mb-2 no-gutters transaction-card align-items-center"      >
        <Col xs="12">
          <p className="trans-date text-center m-0">Inga transaktioner finns att visa här</p>
        </Col>
      </Row>
    )
  } else return transactions
}

export default TransactionLister