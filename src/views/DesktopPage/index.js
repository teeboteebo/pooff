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
            <h2 className="page-title">Welcome to Pooff</h2>
            <p>Pooff is an online payment service available for all mobile and handheld devices.</p>
            <p>Please continue on your phone in order to access the application.</p>
            <p>Or press here to head over to our frequently asked questions section.</p>
            <p>/ Pooff team</p>
          </div>
          <img className="logo" src="/images/logos/pooff-dark.png" alt="pooff logo" />
        </Col>
      </Row>

    </Container>
  )
}

export default DesktopPage