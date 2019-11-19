import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Phone, Heart, DollarSign, MessageCircle, Send } from 'react-feather'

const TransactionForm = () => {
  const [favorite, setFavorite] = useState(false)
  const [validInputs, setValidInputs] = useState({
    receiver: true,
    amount: true
  })

  const receiver = useRef()
  const amount = useRef()
  const message = useRef()

  const validate = () => {
    const valid = {...validInputs}

    if (!receiver.current.value) {
      valid.receiver = false
    }
    else {
      valid.receiver = true
    }
    if (!amount.current.value) {
      valid.amount = false
    }
    else {
      valid.amount = true
    }

    setValidInputs(valid)
    return Object.keys(valid).every(key => valid[key])
  }

  const onSubmit = async () => {
    if (validate()) {
      console.log('Valid!')
      /* await fetch('/api/transactions', {
        method: 'POST',
        body: {
          receiver: receiver.current.value,
          amount: amount.current.value,
          message: message.current.value
        }
      }) */
    }
  }

  return (
    <Container className="transaction-form" fluid={true}>
      <h2 className="page-title">Ny överföring</h2>
      <Row className="no-gutters align-items-center mt-4">
        <Col>
          <div className="input-component">
            <Phone />
            <input type="telephone" ref={receiver} placeholder="Telefonnummer" className={!validInputs.receiver ? 'error-input' : ''} />
          </div>
        </Col>
        <Col xs="auto">
          <Heart className={favorite ? 'add-to-favorites ml-4 checked' : 'add-to-favorites ml-4'} onClick={() => setFavorite(!favorite)} />
        </Col>
      </Row>
      {!validInputs.receiver ? <p className="error-text mt-1">Vänligen ange ett telefonnummer</p> : ''}
      <div className="input-component mt-4">
        <DollarSign />
        <input type="number" ref={amount} placeholder="Belopp" className={!validInputs.amount ? 'error-input' : ''} />
      </div>
      {!validInputs.amount ? <p className="error-text mt-1">Vänligen ange belopp</p> : ''}
      <div className="input-component textarea mt-4">
        <MessageCircle />
        <textarea rows="4" ref={message} placeholder="Meddelande..." />
      </div>
      <div className="button-div mt-4">
        <Button onClick={onSubmit}><Send /><span>Skicka</span></Button>
      </div>
    </Container>
  )
}

export default TransactionForm