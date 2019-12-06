import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useMagic from '../../actions/useMagic'
import Fade from 'react-reveal/Fade'

const PaymentReceived = props => {
  const [getLoggedIn] = useMagic()
  let { sender, amount, link } = props.data
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  },[])
  
  const setFade = () => {
    setShow(false)
    setTimeout(props.clickHandler, 1000)
  }
  
  setTimeout(setFade, 5000)
  
  getLoggedIn()
  return (
    <div className="payment-received-container">
      <Fade className="payment-fade" right collapse opposite when={show}>
      <Link to={`/mina-transaktioner/${link}`}>
        <div className="payment-received-card" onClick={props.clickHandler}> {sender} skickade {amount}kr </div>
      </Link>
      </Fade>
      </div>
  )
} 

export default PaymentReceived;
