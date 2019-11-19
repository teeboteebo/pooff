import React, { useState } from "react"

const ResetPassword = () => {
  const [sent, setSent] = useState(false)

  const sendMail = async () => {
    console.log(document.querySelector(".email-input").value)

    setSent(true)

    await fetch("api/send", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        type: "reset",
        email: document.querySelector(".email-input").value,
      }),
    })
  }

  return sent ? (
    <div className="reset-password-container">
      <h1 className="reset-password-heading">E-mail skickat</h1>
    </div>
  ) : (
    <div className="reset-password-container">
      <h1 className="reset-password-heading">Återställ lösenord</h1>
      <label className="email-label">
        Ange din e-postadress för att få en återställningslänk skickad till dig
      </label>
      <input type="text" className="email-input"></input>
      <button className="email-button" onClick={sendMail}>
        Skicka
      </button>
    </div>
  )
}

export default ResetPassword
