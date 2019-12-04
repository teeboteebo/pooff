import React from 'react'
import { Link } from 'react-router-dom'
import useMagic from '../../actions/useMagic'
import Fade from 'react-reveal/Fade'

const PaymentReceived = props => {
  const [getLoggedIn] = useMagic()
  console.log("props", props.data) 
  let { sender, amount, message, link } = props.data

  //setTimeout(props.clickHandler, 5000)

  getLoggedIn()
  return (
    <div className="payment-received-container">
    <Fade className="payment-fade" right collapse opposite duration={1000}>
      <Link to={`/mina-transaktioner/${link}`}>
        <div className="payment-received-card" onClick={props.clickHandler}> {sender} skickade {amount}kr </div>
      </Link>
      </Fade>
      </div>
  )
} 

export default PaymentReceived;
