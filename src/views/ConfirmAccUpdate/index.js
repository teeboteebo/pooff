import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { usePooff } from '../../context';

const ConfirmAccUpdate = () => {
  const state = usePooff()

  return (
    <Container fluid={true} className="no-gutters confirm-update">
      <h2 className="page-title">Kontot är uppdaterat</h2>
      <Row>
        <Col>
          <img
            className="check-mark"
            src={state.loggedIn.darkMode ? "/images/checkmarkDM.png" : "/images/checkmarkLM.png"}
            alt="checkmark"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/">
          <input className="primary-btn save-button mt-4" type="submit" value="Till huvudsidan" />
          </Link>
        </Col>
      </Row>
    </Container>
  )

}

export default ConfirmAccUpdate