import React, { useState } from "react"
import { Container, Form, Row, Col, Input, Button, Label } from "reactstrap"
import ReCAPTCHA from "react-google-recaptcha"
import sitekey from "../../settings.js"

const LoginPage = props => {
  const login = async (e, username, password) => {
    e.preventDefault()
    console.log(username, password)
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

    if (message.error) {
      setStatusMessage("Användarnamn eller lösenord är fel")
    } else {
      setStatusMessage(`Inloggad som ${message.username} - (${message.role})`)
      props.history.push("/")
    }
    props.loginHandler()
  }
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [captchaValue, setCaptchaValue] = useState(false)

  return (
    <Container fluid={true} className="login-container">
      <Form onSubmit={e => login(e, usernameValue, passwordValue)}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1 className="text-center">Login</h1>
          </Col>
        </Row>
        <Row className="input-field">
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
            <a className="float-right" href="/">
              glömt lösenord?
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col align="center">
            <ReCAPTCHA
              sitekey={sitekey}
              onChange={() => setCaptchaValue(true)}
            />
          </Col>
        </Row>
        <Row className="button-field">
          <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
            <Button
              className="login"
              name="submit"
              value="Logga in"
              type="submit"
              disabled={!captchaValue}
            >
              Logga in
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="link-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <p className="no-account" href="/">
            Har ej ett konto?
          </p>
        </Col>
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <a className="register" href="/registrera">
            Registrera
          </a>
        </Col>
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <a className="" href="/vanliga-fragor">
            Frågor och svar
          </a>
        </Col>
      </Row>
    </Container>
  )
}
export default LoginPage
