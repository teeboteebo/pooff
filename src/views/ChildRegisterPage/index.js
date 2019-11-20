import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const ChildRegisterPage = () => {
  const [firstNameValue, setFirstNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [personIdValue, setPersonIdValue] = useState('')
  const submitChild = async (e, firstName, email, personId) => {
    e.preventDefault()
    console.log('firstName: ', firstName, 'email: ', email, 'personId: ', personId);

    // let responseRaw = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     email,
    //     personId
    //   })
    // })

    // let response = await responseRaw.json()
    // console.log(response)
  }
  return (
    <Container fluid={true} className="register-child-container">
      <h2 className="page-title">Lägg till barnanvändare</h2>
      <p className="info-text">Ett email kommer att skickas till den angivna epostadressen där barnet sedan uppmanas till att komplettera med resterande nödvändig information</p>
      <form onSubmit={(e) => submitChild(e, firstNameValue, emailValue, personIdValue)}>
        <input className="input-field" type="text" placeholder="Förnamn" onChange={(e) => setFirstNameValue(e.target.value)} required={true} />
        <input className="input-field" type="email" placeholder="Epost" onChange={(e) => setEmailValue(e.target.value)} required={true} />
        <input className="input-field" type="number" placeholder="Personnummer ÅÅMMDDNNNN" onChange={(e) => setPersonIdValue(e.target.value)} value={personIdValue} required={true} />
        <input className="submit-btn" type="submit" value="Lägg till barn" />
      </form>
      <Link to="mina-barn"><button className="back-btn">Tillbaka till översikten</button></Link>
    </Container>
  )
}

export default ChildRegisterPage