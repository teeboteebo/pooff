import React from 'react'

const PaymentReceived = props => {
  console.log("props", props.data) 
  let { sender, amount, message } = props.data
  return (
    <div className="payment-received-container"> {sender} skickade {amount}kr </div>
  )
} 

export default PaymentReceived;
