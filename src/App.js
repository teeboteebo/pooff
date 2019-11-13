import React, { useState } from "react"
import PaymentConfirm from "./views/PaymentConfirmation"

const App = () => {
  return (
    <PaymentConfirm
      name="Sture Stoppmur"
      number="+733404160"
      amount="100 kr"
      message="Du blocka ju mig!"
    />
  )
}

export default App
