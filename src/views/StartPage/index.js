import React from "react"
import PaymentConfirm from "../PaymentConfirmation"

const StartPage = () => {
  return (
    <div className="startpage">
      <h1>This is the startpage!</h1>
      <p>This is some bread crumbs....</p>
      <PaymentConfirm
        name="Sture Stoppmur"
        number="+733404160"
        amount="100 kr"
        message="Du blocka ju mig!"
      />
    </div>
  )
}

export default StartPage
