import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const DesktopPage = () => {
  return (
    <Container fluid={true} className="desktop-container">
      <Row className="h-100 no-gutters">
        <Col md="5" className="img-side">
          <img src="/images/phones.jpg" alt="images of ihpones displaying pooff app" />
        </Col>
        <Col md="1" className="triangle" />
        <Col md="6" className="text-side">
          <div className="text-content">
            <h2 className="page-title">Välkommen till Pooff</h2>
            <p>Pooff är en onlinebaserad betalningstjänst gjord för mobila enheter.</p>
            <p>Vänligen besök sidan på en mobil för att få åtkomst till applikationen.</p>
            {/* <p>Or press here to head over to our frequently asked questions section.</p> */}
            <p>/ Pooff team</p>
          </div>
          <img className="logo" src="/images/logos/pooff-dark.png" alt="pooff logo" />
        </Col>
      </Row>
    </Container>
  )
}

export default DesktopPage