import PaymentConfirmation from "../PaymentConfirmation"
import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Phone, DollarSign, MessageCircle, Send } from "react-feather"
import { Link } from 'react-router-dom'

import { usePooff } from '../../context'
import useMagic from '../../actions/useMagic'

const TransactionForm = props => {
  const state = usePooff()
  let { balance } = state.loggedIn
  balance = (balance.toFixed(2) + '').split('.')
  balance[0] = Number(balance[0]).toLocaleString('sv-SE')
  const [getLoggedIn] = useMagic()
  const [amount, setAmount] = useState('')
  const [formattedAmount, setFormattedAmount] = useState('')
  const [focus, setFocus] = useState(false)
  const [receiverName, setReceiverName] = useState("")
  const [validInputs, setValidInputs] = useState({
    receiver: true,
    amount: true,
  })
  const [paymentSent, setPaymentSent] = useState({ sent: false })
  const [statusMessage, setStatusMessage] = useState("")
  const [textLength, setTextLength] = useState(0)

  const receiver = useRef(/* props.location.state ? { current: { value: props.location.state.phone } } : null */)
  /* const amount = useRef() */
  const message = useRef()

  useEffect(() => {
    if (props.location.state) {
      /* setReceiverName(props.location.state.name) */
      let phoneField = document.querySelector('.phone-input')
      phoneField.target = phoneField
      phoneField.target.value = props.location.state.phone
      checkNumber(phoneField)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const countChars = e => setTextLength(e.target.value.length)

  const validate = () => {
    const valid = { ...validInputs }

    if (!receiver.current.value) {
      valid.receiver = false
    } else {
      valid.receiver = true
    }

    /* if (!amount.current.value || amount.current.value <= 0) {
      valid.amount = false
    } else {
      valid.amount = true
    } */
    if (!amount || amount <= 0) {
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

  const toCurrency = number => {
    if (!number) return

    const formatter = new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK'
    });

    return formatter.format(number);
  }

  const onAmountFocus = () => {
    setFocus(true)
  }

  const onAmountBlur = () => {
    if (!amount) {
      setFormattedAmount('')
      return
    }
    const format = amount.replace(',', '.')
    setFormattedAmount(toCurrency(format))
    setFocus(false)
  }

  const onAmountChange = e => {
    const val = e.target.value.replace('.', ',')
    const valid = /^\d*$|^\d+,\d{0,2}$/
    if (!valid.test(val) || val > 9999999999999) { return }
    setAmount(val)
  }

  const onSubmit = async () => {
    if (validate()) {
      const formatted = amount.replace('.', ',')
      await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: receiver.current.value,
          // amount: amount.current.value,
          amount: formatted,
          message: message.current.value,
        }),
      })

      getLoggedIn()

      //if (amount.current.value > state.loggedIn.balance) {
        //setStatusMessage("Ditt konto saknar täckning")
      //}
      if (formatted > state.loggedIn.balance) {
        setStatusMessage("Ditt konto saknar täckning")
      }
      else {
        const numberVal = receiver.current.value
        // const amountVal = amount.current.value
        const amountVal = formatted
        const messageVal = message.current.value
        const senderName = state.loggedIn.firstName + " " + state.loggedIn.lastName

        setPaymentSent({
          sent: true,
          name: receiverName,
          amount: amountVal.toLocaleString('sv-SE'),
          number: numberVal,
          message: messageVal
        })

        await fetch("/api/push-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: senderName,
            amount: amountVal,
            number: numberVal
          }),
        })
      }
      setAmount('')
      setFormattedAmount('')
    }
  }
  const setFavoriteAsReceiver = (phone) => {
    //sorry
    let phoneField = document.querySelector('.phone-input')
    phoneField.target = phoneField
    phoneField.target.value = phone
    checkNumber(phoneField)
  }

  console.log("hej", paymentSent.amount)
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
        <p style={{ opacity: '0.7', textAlign: 'center', marginTop: '-80px', fontSize: '16px' }}>Nuvarande saldo: <span style={{ fontWeight: 700 }}>{balance[0]},{balance[1]} kr</span></p>

        <Row className="no-gutters align-items-center" style={{ marginTop: '60px' }}>
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
              {state.loggedIn.favorites.map((favorite, i) => {
                return <button className="favorite-btn" onClick={() => setFavoriteAsReceiver(favorite.phone)} key={"fav-btn_" + i}>{favorite.nickname}</button>
              })}
              {state.loggedIn.favorites[0] ? '' : <p>Du har ännu inga favoriter, <Link to="/favoriter">klicka här</Link> för att lägga till.</p>}
            </div>
          </Col>
        </Row>
        {!validInputs.receiver ? <p className="error-text mt-1">Vänligen ange ett telefonnummer</p> : ''}
        <div className="input-component mt-4">
          <DollarSign />
          {/* <input type="number" ref={amount} min="0" placeholder="Belopp" className={!validInputs.amount ? 'error-input' : ''} /> */}
          <input
            type="text"
            inputMode="numeric"
            placeholder="Belopp i SEK"
            className={!validInputs.amount ? 'error-input' : ''}
            onFocus={onAmountFocus}
            onBlur={onAmountBlur}
            onChange={onAmountChange}
            value={focus ? amount : formattedAmount}
          />
        </div>
        {!validInputs.amount ? <p className="error-text mt-1">Vänligen ange belopp</p> : ''}
        <p className="mt-4 text-right">{textLength + '/200'}</p>
        <div className="input-component textarea">
          <MessageCircle />
          <textarea rows="4" ref={message} placeholder="Meddelande..." maxLength="200" onChange={countChars} />
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
