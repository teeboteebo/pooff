import React, { useState } from "react";
import { Form, Input, Button, Container, ModalHeader, ModalBody, Modal } from "reactstrap";
import { usePooff } from "../../context";
import useMagic from "../../actions/useMagic";



const NewFavorite = (props) => {
  const state = usePooff()
  const [setLoggedIn] = useMagic()


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
    setLoggedIn()
    }
  


  const toggle = () => setModal(!modal);

  return (
    <Container className="p-0" fluid={true} >
      <Button className="primary-btn" onClick={toggle}>Ny Favorit</Button>
      <Modal isOpen={modal} toggle={toggle} className={state.loggedIn && state.loggedIn.darkMode ? "add-favorite-container dark-mode" : "add-favorite-container"}>
        <ModalHeader toggle={toggle}>
          Skapa Favorit
         </ModalHeader>
        <ModalBody>
          <Form onSubmit={sendFavorite}>
                <Input
                  type="text"
                  value={nameFavorite}
                  onChange={e => setNameFavorite(e.target.value)}
                  className="input-field mt-3"
                  placeholder="Namn"
                ></Input>
                <Input
                  type="text"
                  pattern="[0-9]*"
                  value={phoneFavorite}
                  onChange={e => setPhoneFavorite(e.target.value)}
                  className="input-field mt-3"
                  placeholder="Telefonnr"
                ></Input>
          </Form>
          <Button className="primary-btn mt-4" onClick={sendFavorite}>Spara Favorit</Button>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default NewFavorite;
