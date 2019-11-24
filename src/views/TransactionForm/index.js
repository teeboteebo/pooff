import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Phone, Heart, DollarSign, MessageCircle, Send } from "react-feather"
import PaymentConfirmation from "../PaymentConfirmation"

const TransactionForm = props => {
  const [favorite, setFavorite] = useState(false)
  const [receiverName, setReceiverName] = useState("")
  const [validInputs, setValidInputs] = useState({
    receiver: true,
    amount: true,
  })
  const [paymentSent, setPaymentSent] = useState({ sent: false })

  useEffect(() => {
    if (props.location.state) {
      setReceiverName(props.location.state.name)
    }
  }, [])

  const receiver = useRef()
  const amount = useRef()
  const message = useRef()

  const validate = () => {
    const valid = { ...validInputs }

    if (!props.location.state && !receiver.current.value) {
      valid.receiver = false
    } else {
      valid.receiver = true
    }
    if (!amount.current.value) {
      valid.amount = false
    } else {
      valid.amount = true
    }

    setValidInputs(valid)
    return Object.keys(valid).every(key => valid[key])
  }
  const checkNumber = async e => {
    setReceiverName("")

    if (e.target.value.length > 9) {
      let response = await fetch(`/api/mytransactions/number/${e.target.value}`)
      let foundUser = await response.json()
      // console.log(foundUser)
      if (foundUser !== null) {
        foundUser = `${foundUser.firstName} ${foundUser.lastName}`
        setReceiverName(foundUser)
      } else setReceiverName("")
    }
  }
  const onSubmit = async () => {
    if (validate()) {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: props.location.state ? props.location.state.phone : receiver.current.value,
          amount: amount.current.value,
          message: message.current.value,
        }),
      })
      // console.log(await response.json())
      setPaymentSent({
        sent: true,
        name: receiverName,
        number: props.location.state ? props.location.state.phone : receiver.current.value,
        amount: amount.current.value,
        message: message.current.value,
      })
    }
  }

  return paymentSent.sent ? (
    <PaymentConfirmation
      name={paymentSent.name}
      number={paymentSent.number}
      amount={paymentSent.amount}
      message={paymentSent.message}
    />
  ) : (
      <Container className="transaction-form" fluid={true}>
        <h2 className="page-title">Ny överföring</h2>
        <Row className="no-gutters align-items-center mt-4">
          <Col>
            <p className="number-msg">{receiverName}</p>
            <div className="input-component">
              <Phone />
              {props.location.state ?
                <p>{props.location.state.phone}</p>
                :
                <input
                  type="telephone"
                  ref={receiver}
                  placeholder="Telefonnummer"
                  onChange={checkNumber}
                  className={!validInputs.receiver ? "error-input" : ""}
                />
              }
            </div>
          </Col>
          <Col xs="auto">
            <Heart
              className={
                favorite
                  ? "add-to-favorites ml-4 checked"
                  : "add-to-favorites ml-4"
              }
              onClick={() => setFavorite(!favorite)}
            />
          </Col>
        </Row>
        {!validInputs.receiver ? (
          <p className="error-text mt-1">Vänligen ange ett telefonnummer</p>
        ) : (
            ""
          )}
        <div className="input-component mt-4">
          <DollarSign />
          <input
            type="number"
            ref={amount}
            placeholder="Belopp"
            className={!validInputs.amount ? "error-input" : ""}
          />
        </div>
        {!validInputs.amount ? (
          <p className="error-text mt-1">Vänligen ange belopp</p>
        ) : (
            ""
          )}
        <div className="input-component textarea mt-4">
          <MessageCircle />
          <textarea rows="4" ref={message} placeholder="Meddelande..." />
        </div>
        <div className="button-div mt-4">
          <Button onClick={onSubmit}>
            <Send />
            <span>Skicka</span>
          </Button>
        </div>
      </Container>
    )
}

export default TransactionForm
