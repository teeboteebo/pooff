import React from "react"
import "./styles.scss"
import { Link } from "react-router-dom"

import { usePooff } from "../../context"

const PaymentConfirmation = props => {
  const { darkMode } = usePooff()
  return (
    <div className="payment-confirmation-container">
      <h2 className="page-title">Betalning skickad</h2>
      <img
        className="check-mark"
        src={darkMode ? "/images/checkmarkDM.png" : "/images/checkmarkLM.png"}
        alt="checkmark"
      ></img>
      <h4 className="name-field">{props.name}</h4>
      <h6 className="number-field">{props.number}</h6>
      <h4 className="amount-field">{props.amount.toLocaleString('sv-SE')}kr</h4>
      <h6 className="message-field">{props.message}</h6>
      <Link to="/mina-transaktioner" className="link-button">
        Till transaktionshistorik
      </Link>
      <Link to="/" className="link-button">
        Till startsida
      </Link>
    </div>
  )
}

export default PaymentConfirmation
