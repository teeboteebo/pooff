import React, { useState } from "react"
import { Container, Form, Row, Col, Input, Button, Label, Spinner } from "reactstrap"
import { Link } from "react-router-dom"

import useMagic from '../../actions/useMagic'

const LoginPage = () => {
  const [getLoggedIn] = useMagic()
  // Force login route to go through to / route when
  // you push the login button 
  const [loginPosted, setLoginPosted] = useState(false)

  const login = async (e, username, password) => {
    e.preventDefault()
    setLoginPosted(true)
    let jsonRaw = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    let message = await jsonRaw.json()

    if (message.error === "not found") {
      setStatusMessage("Användarnamn eller lösenord är fel")
    }

    else if (message.error === "not active") {
      setStatusMessage(
        "Ditt konto är inte aktiverat. Ett mail har skickats till dig ifall du vill aktivera det",
      )
      await fetch("api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          type: "activate",
          email: message.email,
        }),
      })
    }

    else {
      await getLoggedIn()
      return
    }
    setLoginPosted(false)
  }

  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [statusMessage, setStatusMessage] = useState("")

  return (
    <Container fluid={true} className="login-container no-gutters">
      <h2 className="page-title">Logga in</h2>
      <Form onSubmit={e => login(e, usernameValue, passwordValue)}>

        <Row className="input-field no-gutters">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Label className="floating-label" for="exampleUsername">
              Användarnamn
            </Label>
            <Input
              autoComplete="username"
              onChange={e => setUsernameValue(e.target.value)}
              name="username"
              placeholder="Användarnamn"
              type="username"
              required={true}
            ></Input>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Label className="floating-label" for="examplePassword">
              Lösenord
            </Label>
            <Input
              autoComplete="current-password"
              onChange={e => setPasswordValue(e.target.value)}
              name="password"
              placeholder="Lösenord"
              type="password"
              required={true}
            ></Input>
            <p> {statusMessage} </p>
          </Col>
          <Col sm="3" md={{ size: 6, offset: 3 }}>
            <Link className="float-right" to="/aterstall-losenord">
              Glömt lösenord?
            </Link>
          </Col>
        </Row>
        <Row className="button-field no-gutters">
          <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
            <Button
              className="login primary-btn"
              name="submit"
              value="Logga in"
              type="submit"
              disabled={loginPosted}
            >
              {!loginPosted ? 'Logga in' : <Spinner size="sm" />}
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="link-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <p>Har du ej ett konto?</p>
        </Col>
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <Link className="register" to="/registrera">
            Skapa konto
          </Link>
        </Col>
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <Link className="" to="/vanliga-fragor">
            Frågor och svar
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default LoginPage
