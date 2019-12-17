import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { usePooff } from '../../context'

const ChildRegisterPage = () => {
  const state = usePooff()
  const [statusMessage, setStatusMessage] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [personIdValue, setPersonIdValue] = useState('')
  const [sent, setSent] = useState(false)
  const submitChild = async (e, firstName, email, personId) => {
    e.preventDefault()

    let responseRaw = await fetch('/api/godaddy', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        email,
        personId
      })
    })

    let response = await responseRaw.json()
    if(response.success) {
      await fetch("api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          type: "child",
          email: emailValue,
        }),
      })
      setSent(true)
    } else {
      setStatusMessage(JSON.stringify(response.error))
    }
  }
  return (
    sent ? <Container fluid={true} className="register-child-container">
      <h2 className="page-title">Ett mail har skickats till ditt barns e-postadress</h2>
      <Link to="/">
          <input className="primary-btn" type="submit" value="Till startsida" />
      </Link>
    </Container> :
    <Container fluid={true} className="register-child-container">
      <h2 className="page-title">Lägg till barnanvändare</h2>
      <p className="info-text">Ett email kommer att skickas till den angivna epostadressen där barnet sedan uppmanas till att komplettera med resterande nödvändig information</p>
      <form onSubmit={(e) => submitChild(e, firstNameValue, emailValue, personIdValue)}>
        <input className="input-field" type="text" placeholder="Förnamn" onChange={(e) => setFirstNameValue(e.target.value)} required={true} />
        <input className="input-field" type="email" placeholder="Epost" onChange={(e) => setEmailValue(e.target.value)} required={true} />
        <input className="input-field" type="number" placeholder="Personnummer ÅÅMMDDNNNN" onChange={(e) => setPersonIdValue(e.target.value)} value={personIdValue} required={true} />
        <p style={{fontStyle: 'italic', opacity: '0.7', color: 'var(--primary)'}}>{statusMessage}</p>
        <input className="primary-btn submit-btn mb-3" type="submit" value="Lägg till barn" />
      </form>
      {state.children[0] ? <Link to="/mina-barn"><button className="secondary-btn back-btn">Tillbaka till översikten</button></Link> : ''}
    </Container>
  )
}

export default ChildRegisterPage