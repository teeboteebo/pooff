import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const MissingPage = () => {
  return (
    <Container fluid={true} className="missing-page-container">
      <h2 className="page-title">Sidan finns inte<br />Felkod: 404</h2>
      <Row className="no-gutters">
        <Col xs="12">
          <p>Sidan du har försökt att nå finns inte:</p>
          <p className="url-link">{window.location.href}</p>
          <p>Klicka <Link to="/">här</Link> för att komma tillbaka till startsidan.</p>
        </Col>
      </Row>

    </Container>
  )
}

export default MissingPage