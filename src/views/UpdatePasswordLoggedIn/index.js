import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { usePooff } from '../../context';

const UpdatePasswordLoggedIn = () => {
  const [sent, setSent] = useState(false)

  const state = usePooff()
  const mail = state.loggedIn.email

  const sendMail = async () => {
    setSent(true)

    await fetch("api/send", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        type: "reset",
        email: mail,
      }),
    })
  }

  return (
    !sent ?
    <Container>
      <h2 className="page-title">Uppdatera lösenord</h2>
      <label className="email-label">
        <p>Klicka på knappen så kommer en återställningslänk att skickas till dig.</p>
      </label>
      <input className="primary-btn" onClick={sendMail} type="submit" value="Skicka" />
    </Container> 
    :
    <Container>
       <h2 className="page-title">Återställningslänk skickad</h2>
       <Link to="/mitt-konto">
       <input className="primary-btn" type="submit" value="Tillbaka" />
       </Link>
    </Container>
  )
}
export default UpdatePasswordLoggedIn