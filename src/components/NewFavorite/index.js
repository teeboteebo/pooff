import React, {useState } from "react";
import { Form, Row, Col, Input, Button, Label, Container } from "reactstrap";

const NewFavorite = () => {

  //skapa values för namn och telefonnr när en användare skapas
  const [nameFavorite, setNameFavorite] = useState("");
  const [phoneFavorite, setPhoneFavorite] = useState("");


//skapa en column där både namn och telefon nr skrivs ut
  const [createFavorite, setCreateFavorite] = useState (
    <Row>
    <Col className="text-center" sm="12"  md={{ size: 6, offset: 3 }}>
        <Button className="Favorite-user">
  <h3>{nameFavorite}</h3>
  <p>+{phoneFavorite}</p>
        </Button>
    </Col>
    </Row>
  );
  
  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `Name: ${nameFavorite} \nPhone: ${phoneFavorite}`
    )
}
return (
  <Container>
    <Form onSubmit={onSubmit}>
      <Row className="input-field">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Label  className="floating-label" for="exampleEmail">Email</Label>
          <Input
          type="text"
          value={nameFavorite}
          onChange={e => setNameFavorite(e.target.value)}
          className="form-control"
          placeholder="Namn" 
          ></Input>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Label className="floating-label" for="examplePassword">Lösenord</Label>
          <Input 
          type="text" 
          pattern="[0-9]*"
          value={phoneFavorite}
          onChange={e => setPhoneFavorite(e.target.value)}
          className="form-control" 
          placeholder="Telefonnr"
         ></Input>
        </Col>
      </Row>

      <Row className="button-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
        <Button onClick={() => setCreateFavorite(!createFavorite)} className="login" type="submit" value="Submit" >Skapa Favorit</Button>
        {<div>test</div> && createFavorite }
 
       </Col>
      </Row>
    </Form>
    </Container>
  );
};

export default NewFavorite;
