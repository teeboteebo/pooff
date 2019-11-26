import React, { useState } from "react"
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

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
    <Container className="reset-password-container">
      <h2 className="page-title">E-mail skickat</h2>
    </Container>
  ) : (
    <Container className="reset-password-container">
      <h2 className="page-title">Återställ lösenord</h2>
      <label className="email-label">
        <p>Ange din e-postadress. Om ett konto finns kopplat till epostadressen kommer en återställningslänk att skickas till dig.</p>
      </label>
      <input type="text" className="input-field" placeholder="Ange din email"></input>
        <Link to="/registrera">
        <input className="primary-btn" onClick={sendMail} type="submit" value="Skicka" />
        </Link>

    </Container>
  )
}

export default ResetPassword
