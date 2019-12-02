import React, { useState } from "react";
import { Form, Row, Col, Input, Button, Label, Container, ModalHeader, ModalBody, Modal } from "reactstrap";
import { usePooff } from "../../context"



const NewFavorite = (props) => {
  const state = usePooff()


  //skapa values för namn och telefonnr när en användare skapas
  const [nameFavorite, setNameFavorite] = useState("");
  const [phoneFavorite, setPhoneFavorite] = useState("");
  const [modal, setModal] = useState(false);

  const sendFavorite = async (evt) => {
    evt.preventDefault();
    const responseRaw = await fetch('/api/myuser/favorites', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: nameFavorite,
        phone: phoneFavorite
      })
    })
    await responseRaw.json()
    
    setModal(false)
    props.updateFavorites()
  }
  


  const toggle = () => setModal(!modal);

  return (
    <Container fluid={true} >
      <Button className="primary-btn" onClick={toggle}>Ny Favorit</Button>
      <Modal isOpen={modal} toggle={toggle} className={state.loggedIn && state.loggedIn.darkMode ? "add-favorite-container dark-mode" : "add-favorite-container"}>
        <ModalHeader toggle={toggle}>
          Skapa Favorit
         </ModalHeader>
        <ModalBody>
          <Form onSubmit={sendFavorite}>
            <Row className="input-field">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Label className="floating-label" for="exampleEmail">Användarnamn</Label>
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

          </Form>
          <Button className="primary-btn mt-4" onClick={sendFavorite}>Spara Favorit</Button>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default NewFavorite;
