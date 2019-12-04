import React from 'react'
import { Link } from 'react-router-dom'
import useMagic from '../../actions/useMagic'

const PaymentReceived = props => {
  const [getLoggedIn] = useMagic()
  console.log("props", props.data) 
  let { sender, amount, message, link } = props.data

  setTimeout(props.clickHandler, 5000)

  getLoggedIn()
  return (
    <Link to={`/mina-transaktioner/${link}`}>
      <div className="payment-received-container" onClick={props.clickHandler}> {sender} skickade {amount}kr </div>
      </Link>
  )
} 

export default PaymentReceived;
