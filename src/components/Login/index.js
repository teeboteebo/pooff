import React, {useState } from "react";
import { Form, Row, Col, Input, Button, Label, Container } from "reactstrap";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `Email: ${name} \n Password: ${password}`
    
    )
}
return (
  <Container>
    <Form onSubmit={onSubmit}>
      <Row>
        <Col sm="12"  md={{ size: 6, offset: 3 }}>
        <h1 className="text-center">Login</h1>
        </Col>
      </Row>
      <Row className="input-field">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Label  className="floating-label" for="exampleEmail">Email</Label>
          <Input
          type="email"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control"
          placeholder="yourname@example.com" 
          ></Input>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Label className="floating-label" for="examplePassword">Lösenord</Label>
          <Input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-control" 
          placeholder="Lösenord"
         ></Input>
        </Col>
        <Col sm="3" md={{ size: 6, offset: 3 }} >
      <a  className="float-right" href="/">glömt lösenord?</a>
      </Col>
      </Row>

      <Row className="button-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
        <Button className="login" type="submit" value="Submit" >Logga in</Button>
        </Col>
      </Row>
    </Form>

    <Row className="link-field">
      <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
      <p  className="no-account" href="/">Har ej ett konto?</p>
      </Col>
      <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
      <a  className="register" href="/">Registrera</a>
      </Col>
      <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
      <a  className="" href="/">Frågor och svar</a>
      </Col>
    </Row>
    </Container>
  );
};

export default Login;
