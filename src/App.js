import React, { useState } from "react"
import PaymentConfirm from "./views/PaymentConfirmation"

const App = () => {
  return (
    <div className="App">
      <PaymentConfirm
        name="Sture Stoppmur"
        number="+733404160"
        amount="100 kr"
        message="Du blocka ju mig!"
      />
    </div>
  )
}

export default App
