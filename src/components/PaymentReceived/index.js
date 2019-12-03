import React from 'react'
import { Link } from 'react-router-dom'
import useMagic from '../../actions/useMagic'

const PaymentReceived = props => {
  const [getLoggedIn] = useMagic()
  console.log("props", props.data) 
  let { sender, amount, message, link } = props.data
  getLoggedIn()
  return (
    <Link to={`/mina-transaktioner/${link}`}>
      <div className="payment-received-container"> {sender} skickade {amount}kr </div>
      </Link>
  )
} 

export default PaymentReceived;
