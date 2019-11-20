import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

const LoginPage = (props) => {
  const login = async (e, username, password) => {
    e.preventDefault()
    console.log(
      username,
      password
    )
    let jsonRaw = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    
    let message = await jsonRaw.json()

    if (message.error) {
      setStatusMessage('Användarnamn eller lösenord är fel')
    } else {
      setStatusMessage(`Inloggad som ${message.username} - (${message.role})`)
      props.history.push('/')
    }
    props.loginHandler()
  }
  const inputStyle = {
    width: '100%',
    padding: '10px 20px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '2px solid black',
    backgroundColor: 'transparent'
  }
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <Container fluid={true} className="login-container">
      <form onSubmit={(e) => login(e, usernameValue, passwordValue)}>

        <Row>
          <Col>
            <input autoComplete="username" onChange={(e) => setUsernameValue(e.target.value)} style={inputStyle} name="username" placeholder="Användarnamn" type="username" required={true} />
          </Col>
        </Row>

        <Row>
          <Col>
            <input autoComplete="current-password" onChange={(e) => setPasswordValue(e.target.value)} style={inputStyle} name="password" placeholder="Lösenord" type="password" required={true} />
          </Col>
        </Row>

        <Row>
          <Col>
            <input className="btn btn-primary" name="submit" value="Logga in" type="submit" />
          </Col>
        </Row>
      </form>
      <p> {statusMessage} </p>
    </Container>
  )
}

export default LoginPage