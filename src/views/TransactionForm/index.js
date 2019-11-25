import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Phone, DollarSign, MessageCircle, Send } from 'react-feather'
import { Link } from 'react-router-dom'

const TransactionForm = () => {
  const [receiverName, setReceiverName] = useState('')
  const [validInputs, setValidInputs] = useState({
    receiver: true,
    amount: true
  })
  const [favorites, setFavorites] = useState([])

  const receiver = useRef()
  const amount = useRef()
  const message = useRef()

  useEffect(() => {
    const getFavorites = async () => {
      let allFavoritesRaw = await fetch('/api/myuser/favorites')
      let allFavorites = await allFavoritesRaw.json()
      setFavorites(allFavorites)
    }
    getFavorites()
  }, [])
  const validate = () => {
    const valid = { ...validInputs }

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
  const checkNumber = async (e) => {
    setReceiverName('')

    if (e.target.value.length > 9) {
      let response = await fetch(`/api/mytransactions/number/${e.target.value}`)
      let foundUser = await response.json()
      console.log(foundUser);
      if (foundUser !== null) {
        foundUser = `${foundUser.firstName} ${foundUser.lastName}`
        setReceiverName(foundUser)
      } else setReceiverName('')
    }
  }
  const onSubmit = async () => {
    if (validate()) {
      console.log('Valid!')
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          receiver: receiver.current.value,
          amount: amount.current.value,
          message: message.current.value
        })
      })
      console.log(await response.json())
    }
  }
  const setFavoriteAsReceiver = (phone) => {
    //sorry
    let phoneField = document.querySelector('.phone-input')
    phoneField.target = phoneField
    phoneField.target.value = phone
    checkNumber(phoneField)
  }

  return (
    <Container className="transaction-form" fluid={true}>
      <h2 className="page-title">Ny betalning</h2>
      <Row className="no-gutters align-items-center mt-4">
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
      </div>
      <div className="button-div mt-4">
        <Button className="primary-btn" onClick={onSubmit}><Send /><span>Skicka</span></Button>
      </div>
    </Container>
  )
}

export default TransactionForm