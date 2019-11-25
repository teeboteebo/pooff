import React, { useState } from "react"
import { Container, Form, Row, Col, Input, Button, Label } from "reactstrap"
import { Link } from "react-router-dom"

import { usePooff } from "../../context"

const LoginPage = () => {
  const state = usePooff()

  const checkIfActive = async username => {
    let user = await fetch(`/api/users/username/${username}`)
    user = await user.json()
    console.log(user)
    return user
  }

  const login = async (e, username, password) => {
    e.preventDefault()

    const user = await checkIfActive(username)

    if (user.active) {
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
        /* setStatusMessage(`Inloggad som ${message.username} - (${message.role})`)
        props.history.push("/") */
        const fetchedUser = await fetch("/api/myuser")
        const user = await fetchedUser.json()
        state.setLoggedIn(user)

        if (user.role === "parent") {
          const fetchedChildren = await fetch("api/mychildren")
          const children = await fetchedChildren.json()
          state.setChildren(children)
        }
      }
    } else {
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
          email: user.email,
        }),
      })
    }
  }
  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [statusMessage, setStatusMessage] = useState("")

  return (
    <Container fluid={true} className="login-container">
      <Form onSubmit={e => login(e, usernameValue, passwordValue)}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1 className="text-center">Logga in</h1>
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
            <Link className="float-right" to="/">
              glömt lösenord?
            </Link>
          </Col>
        </Row>
        <Row className="button-field">
          <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
            <Button
              className="login"
              name="submit"
              value="Logga in"
              type="submit"
            >
              Logga in
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="link-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <Link className="no-account" to="/">
            Har ej ett konto?
          </Link>
        </Col>
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <Link className="register" to="/registrera">
            Registrera
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
