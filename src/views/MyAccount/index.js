import React, { useState } from 'react'
import { User, Mail, Phone, Gift } from "react-feather"
import { Link, useHistory } from 'react-router-dom'
import { usePooff } from '../../context';
import { Container, Row, Col, ModalBody, Modal, Button  } from 'reactstrap'

const MyAcccount = () => {
  const state = usePooff()
  const user = state.loggedIn
  const [modal, setModal] = useState(false);
  const history = useHistory();

  const deactivateAccount = async() => {
    await fetch("/api/myuser/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        active: false
      })
    })
    await fetch("/api/login", { method: "DELETE" });
    await state.setLoggedIn(false);
    await state.setChildren([]);
    state.setMenuOpen(false);
    history.push("/");
  }

  const toggle = () => setModal(!modal);

  return (
    <Container className="my-account" fluid={true}>
      <h2 className="page-title">Mitt konto</h2>
      <Modal isOpen={modal} toggle={toggle} className={state.loggedIn && state.loggedIn.darkMode ? "deactivate-container dark-mode" : "deactivate-container"}>
          <h2 className="deactivate-heading">Vill du inaktivera ditt konto?</h2>
        <ModalBody>
          <Button className="deactivate-confirm" onClick={deactivateAccount}>Bekräfta</Button>
          <Button className="deactivate-cancel" onClick={toggle}>Avbryt</Button>

        </ModalBody>       
      </Modal>
      <Row className="no-gutters">
        <Col xs="12" className="">
          <ul className="list-item">
            <li>
              <User className="icon"></User>
              <span className="header">Namn: <p className="info">{user.firstName + ' ' + user.lastName}</p></span>
            </li>
            <li>
              <Mail className="icon"></Mail>
              <span className="header">E-post: <p className="info">{user.email}</p></span>
            </li>
            <li>
              <Phone className="icon"></Phone>
              <span className="header">Telefon: <p className="info">{user.phone}</p></span>
            </li>
            <li>
              <Gift className="icon"></Gift>
              <span className="bottom-header">Personnummer: <p className="info">{user.personId}</p></span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4 no-gutters text-center">
        <Col xs="12">
          <div className="button-section">
            <Link to="/uppdatera-konto">
              <input className="primary-btn mt-4" type="submit" value="Uppdatera konto" />
            </Link>
            <Link to="/uppdatera-losenord">
              <input className="primary-btn mt-4" type="submit" value="Ändra lösenord" />
            </Link>
            <input className="primary-btn mt-4" onClick={toggle} type="submit" value="Inaktivera konto" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default MyAcccount