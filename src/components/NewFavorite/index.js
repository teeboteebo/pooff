import React, { useState } from "react";
import { Form, Input, Button, Container, ModalHeader, ModalBody, Modal } from "reactstrap";

import useMagic from '../../actions/useMagic'

const NewFavorite = (props) => {
  const [getLoggedIn] = useMagic()
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
    getLoggedIn()
  }



  const toggle = () => setModal(!modal);

  return (
    <Container className="p-0" fluid={true} >
      <Button className="primary-btn" onClick={toggle}>Ny Favorit</Button>
      <Modal isOpen={modal} toggle={toggle} className="add-favorite-container">
        <ModalHeader toggle={toggle}>
          Skapa Favorit
         </ModalHeader>
        <ModalBody>
          <Form onSubmit={sendFavorite}>
            <Input
              type="text"
              value={nameFavorite}
              onChange={e => setNameFavorite(e.target.value)}
              className="form-control mb-3"
              placeholder="Smeknamn"
            />
            <Input
              type="text"
              pattern="[0-9]*"
              value={phoneFavorite}
              onChange={e => setPhoneFavorite(e.target.value)}
              className="form-control mb-4"
              placeholder="Telefonnummer"
            />

          </Form>
          <Button className="primary-btn mt-0" onClick={sendFavorite}>Spara Favorit</Button>

        </ModalBody>

      </Modal>
    </Container>
  );
};

export default NewFavorite;
