import React, {useState } from "react";
import { Form, Row, Col, Input, Button, Label, Container, ModalHeader,ModalBody,ModalFooter, Modal } from "reactstrap";



const NewFavorite = (props) => {

  //skapa values för namn och telefonnr när en användare skapas
  const [nameFavorite, setNameFavorite] = useState("");
  const [phoneFavorite, setPhoneFavorite] = useState("");

  const sendFavorite = (evt) => {
    evt.preventDefault();
    console.log({nameFavorite}, {phoneFavorite})
  }

  const {
    buttonLabel,
    className
  } = props;
 
 
  const [modal, setModal] = useState(false);
 
  const toggle = () => setModal(!modal);

return (
  <Container>
     <Button onClick={toggle}>{buttonLabel}Ny Favorit</Button>
     <Modal isOpen={modal} toggle={toggle} className={className}>
       <ModalHeader toggle={toggle}>
         Skapa Favorit
         </ModalHeader>
       <ModalBody>
       <Form onSubmit={sendFavorite}>
     <Row className="input-field">
       <Col sm="12" md={{ size: 6, offset: 3 }}>
       <Label  className="floating-label" for="exampleEmail">Användarnamn</Label>
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
   </ModalBody>
       <ModalFooter className="text-center">
       <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
       <Button color="primary" onClick={sendFavorite}>Skapa Favorit</Button>
       </Col>
       </ModalFooter>
     </Modal>
   </Container>
  );
};

export default NewFavorite;
