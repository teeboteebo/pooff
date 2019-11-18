import React from "react"
import "./styles.scss"
import { Link } from "react-router-dom"

const PaymentConfirmation = props => {
  return (
    <div className="payment-confirmation-container">
      <h3 className="title-field">Betalning skickad</h3>
      <img
        className="check-mark"
        src="/images/checkmarkLM.png"
        alt="checkmark"
      ></img>
      <h4 className="name-field">{props.name}</h4>
      <h6 className="number-field">{props.number}</h6>
      <h4 className="amount-field">{props.amount}</h4>
      <h6 className="message-field">{props.message}</h6>
      <Link className="link-button">Till transaktionshistorik</Link>
      <Link to="/" className="link-button">
        Till startsida
      </Link>
    </div>
  )
}

export default PaymentConfirmation
