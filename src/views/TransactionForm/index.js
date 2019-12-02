import PaymentConfirmation from "../PaymentConfirmation"
import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Phone, DollarSign, MessageCircle, Send } from "react-feather"
import { Link } from 'react-router-dom'

import { usePooff } from '../../context'
import useMagic from '../../actions/useMagic'

const TransactionForm = props => {
  const state = usePooff()
  const [getLoggedIn] = useMagic()

  const [receiverName, setReceiverName] = useState("")
  const [validInputs, setValidInputs] = useState({
    receiver: true,
    amount: true,
  })
  const [paymentSent, setPaymentSent] = useState({ sent: false })
  const [favorites, setFavorites] = useState([])
  const [statusMessage, setStatusMessage] = useState("")

  const receiver = useRef(/* props.location.state ? { current: { value: props.location.state.phone } } : null */)
  const amount = useRef()
  const message = useRef()

  useEffect(() => {
    if (props.location.state) {
      /* setReceiverName(props.location.state.name) */
      let phoneField = document.querySelector('.phone-input')
      phoneField.target = phoneField
      phoneField.target.value = props.location.state.phone
      checkNumber(phoneField)
    }

    const getFavorites = async () => {
      let allFavoritesRaw = await fetch('/api/myuser/favorites')
      let allFavorites = await allFavoritesRaw.json()
      setFavorites(allFavorites)
    }
    getFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const validate = () => {
    const valid = { ...validInputs }

    if (!receiver.current.value) {
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
      if (receiver.current.value === state.loggedIn.phone) {
        setReceiverName("Du kan ej skicka pengar till dig själv")
      } else if (foundUser !== null) {
        foundUser = `${foundUser.firstName} ${foundUser.lastName}`
        setReceiverName(foundUser)
      } else setReceiverName("Ingen mottagare med detta nummer finns")
    }
  }
  const onSubmit = async () => {
    if (validate()) {
      await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: receiver.current.value,
          amount: amount.current.value,
          message: message.current.value,
        }),
      })

      getLoggedIn()

      if (amount.current.value > state.loggedIn.balance) {
        setStatusMessage("Ditt konto saknar täckning för att utföra överföringen")

      }
      else {
        setPaymentSent({
          sent: true,
          name: receiverName,
          number: receiver.current.value,
          amount: amount.current.value,
          message: message.current.value,
        })
      }
    }
  }
  const setFavoriteAsReceiver = (phone) => {
    //sorry
    let phoneField = document.querySelector('.phone-input')
    phoneField.target = phoneField
    phoneField.target.value = phone
    checkNumber(phoneField)
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
        <h2 className="page-title">Ny betalning</h2>
        <p style={{opacity: '0.7', textAlign: 'center', marginTop:'-80px', fontSize: '16px'}}>Nuvarande saldo: <span style={{fontWeight: 700}}>{state.loggedIn.balance.toLocaleString('sv-SE')} kr</span></p>

        <Row className="no-gutters align-items-center" style={{marginTop: '60px'}}>
          <Col>
            <p className="number-msg">{receiverName}</p>
            <div className="input-component">
              <Phone />
              <input type="telephone" ref={receiver} placeholder="Telefonnummer" onChange={checkNumber} className={!validInputs.receiver ? 'error-input phone-input' : 'phone-input'} />
            </div>

          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <div className="favorites">
              {favorites.map((favorite, i) => {
                return <button className="favorite-btn" onClick={() => setFavoriteAsReceiver(favorite.phone)} key={"fav-btn_" + i}>{favorite.nickname}</button>
              })}
              {favorites[0] ? '' : <p>Du har ännu inga favoriter, <Link to="/favoriter">klicka här</Link> för att lägga till.</p>}
            </div>
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
          <p className="no-funds">{statusMessage}</p>
        </div>
        <div className="button-div mt-4">
          <Button
            className="primary-btn"
            disabled={
              receiverName === 'Ingen mottagare med detta nummer finns' ||
                receiverName === 'Du kan ej skicka pengar till dig själv' ||
                !receiverName ? true : false}
            onClick={onSubmit}
          >
            <Send /><span>Skicka</span>
          </Button>
        </div>
      </Container>
    )
}

export default TransactionForm
