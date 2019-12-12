import React, { useState } from "react";
import { Form, Button, Container, ModalHeader, ModalBody, Modal } from "reactstrap";
import { usePooff } from "../../context";
import useMagic from "../../actions/useMagic";



const NewFavorite = () => {
  const state = usePooff()
  const [setLoggedIn] = useMagic()


  //skapa values för namn och telefonnr när en användare skapas
  const [nameFavorite, setNameFavorite] = useState("");
  const [phoneFavorite, setPhoneFavorite] = useState("");
  const [modal, setModal] = useState(false);
  const [validation, setvalidation] = useState({
    nameFavorite: true,
    phoneFavorite: true
  })
  const toggle = () => setModal(!modal);

  
  let nameError = "Ange minst 3 bokstäver"
  let phoneError = "Ange giltig telefonnummer"

  const sendFavorite = async (evt) => {
    evt.preventDefault();

    const validate = () =>{
      let x = {...validation}
      if(nameFavorite === "" || nameFavorite.length < 3 || !(/^[A-ZÅÄÖa-zåäö]{2}[A-ZÅÄÖa-zåäö -]*$/.test(nameFavorite))){
        x.nameFavorite = false
      }
      else{
        x.nameFavorite = true
      }
      if(phoneFavorite === "" || phoneFavorite.length < 10 || !(/^0[7][0-9]{8}$/.test(phoneFavorite))){
        x.phoneFavorite = false
      }
      else{
        x.phoneFavorite = true
      }
      setvalidation(x)
      if(x.nameFavorite && x.phoneFavorite) return true
      else return false
    }
    
    if(validate()){
      await fetch('/api/myuser/favorites', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nickname: nameFavorite,
          phone: phoneFavorite
        })
      })
      setModal(false)
    }
    
    setLoggedIn()
  }


  return (
    <Container className="p-0" fluid={true} >
      <Button className="primary-btn" onClick={toggle}>Ny Favorit</Button>
      <Modal isOpen={modal} toggle={toggle} className={state.loggedIn && state.loggedIn.darkMode ? "add-favorite-container dark-mode" : "add-favorite-container"}>
        <ModalHeader toggle={toggle}>
          Skapa Favorit
         </ModalHeader>
        <ModalBody>
          <Form onSubmit={sendFavorite}>
                <input
                  type="text"
                  value={nameFavorite}
                  onChange={e => setNameFavorite(e.target.value)}
                  className="input-field mt-3"
                  placeholder="Namn"
                ></input>
                  {nameFavorite.length < 1 ? "" : <p className="error-text">{nameError}</p> 
                  && nameFavorite.length > 2 ? "" : <p className="error-text">{nameError}</p>  }

                <input
                  type="text"
                  pattern="[0-9]*"
                  value={phoneFavorite}
                  onChange={e => setPhoneFavorite(e.target.value)}
                  className="input-field mt-3"
                  placeholder="Telefonnr"
                ></input>
                  {phoneFavorite.length < 1 ? "" : <p className="error-text">{phoneError}</p>
                   && phoneFavorite.length > 9 ? "" : <p className="error-text">{phoneError}</p>   
                  }
                  {phoneFavorite.length < 11 ? "" : <p className="error-text">{phoneError}</p>  }
                  
          </Form>

          
          <Button className="primary-btn mt-4" onClick={sendFavorite}>Spara Favorit</Button>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default NewFavorite;
