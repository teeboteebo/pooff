import React from "react"
import "./styles.scss"

const PaymentConfirmation = props => {
  return (
    <div className="payment-confirmation-container">
      <h1 className="title-field">Betalning skickad</h1>
      <img
        className="check-mark"
        src="/images/checkmarkLM.png"
        alt="checkmark"
      ></img>
      <h2 className="name-field">{props.name}</h2>
      <h3 className="number-field">{props.number}</h3>
      <h2 className="amount-field">{props.amount}</h2>
      <h3 className="message-field">{props.message}</h3>
      <button>Till transaktionshistorik</button>
      <button>Till startsida</button>
    </div>
  )
}

export default PaymentConfirmation
