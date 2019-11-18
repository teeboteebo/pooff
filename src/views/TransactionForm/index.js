import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Phone, Heart, DollarSign, MessageCircle, Send } from 'react-feather'

const TransactionForm = () => {
  const [favorite, setFavorite] = useState(false)

  return (
    <Container className="transaction-form" fluid={true}>
      <h2 className="page-title">Ny överföring</h2>
      <Row className="no-gutters align-items-center mb-4">
        <Col>
          <div className="input-component">
            <Phone />
            <input type="telephone" placeholder="Telefonnummer" />
          </div>
        </Col>
        <Col xs="auto">
          <Heart className={favorite ? 'add-to-favorites ml-4 checked' : 'add-to-favorites ml-4'} onClick={() => setFavorite(!favorite)} />
        </Col>
      </Row>
      <div className="input-component mb-4">
        <DollarSign />
        <input type="number" placeholder="Belopp" />
      </div>
      <div className="input-component textarea mb-4">
        <MessageCircle />
        <textarea rows="4" placeholder="Meddelande..." />
      </div>
      <div className="button-div">
        <Button><Send /><span>Skicka</span></Button>
      </div>
    </Container>
  )
}

export default TransactionForm