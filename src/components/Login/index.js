import React, {useState } from "react";
import { Form, Row, Col, Input, Button, Label } from "reactstrap";
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
    <Form onSubmit={onSubmit}>
      <Row>
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
      </Row>

      <a href="/">glömt lösenord?</a>
      <Row>
      <Button type="submit" value="Submit" >Logga in</Button>
      </Row>
    </Form>
  );
};

export default Login;
