import React, { useRef, useState } from 'react';
import { Container } from 'reactstrap'
import { User, Mail, Phone } from "react-feather";
import UpdateAccount from '../../components/UpdateAccount';
import { usePooff } from '../../context';
import useMagic from '../../actions/useMagic';
import ConfirmAccUpdate from '../ConfirmAccUpdate';

const UpdateAccountPage = () => {
  const state = usePooff()
  const user = state.loggedIn
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const phone = useRef()
  const [update, setUpdate] = useState(false)
  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true
  })
  const [setLoggedIn] = useMagic()


  const updateUser = async (e) => {
    e.preventDefault()

    const validate = () => {
      const x = { ...validation }

      if (firstName.current.value.length && !(/^[A-ZÅÄÖa-zåäö]{2}[A-ZÅÄÖa-zåäö -]*$/.test(firstName.current.value))) {
        x.firstName = false
      }
      else {
        x.firstName = true
      }
      if (lastName.current.value.length && !(/^[A-ZÅÄÖa-zåäö]{2}[A-ZÅÄÖa-zåäö -]*$/.test(lastName.current.value))) {
        x.lastName = false
      }
      else {
        x.lastName = true
      }
      if (email.current.value.length && !(/\w\w+@\w\w+\.\w\w+/.test(email.current.value))) {
        x.email = false
      }
      else {
        x.email = true
      }
      if (phone.current.value.length && !(/^0[7][0-9]{8}$/.test(phone.current.value))) {
        x.phone = false
      }
      else {
        x.phone = true
      }
      setValidation(x)

      // Ändra till true när allt är klart
      return false
    }

    if (validate()) {
      await fetch('/api/myuser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          //check if value is falsy else use fetched user
          firstName: firstName.current.value || user.firstName,
          lastName: lastName.current.value || user.lastName,
          email: email.current.value || user.email,
          phone: phone.current.value || user.phone,
        })
      })
      setUpdate(true)
      setLoggedIn()
    }
  }
  let inputData = [
    {
      placeholder: user.firstName,
      type: 'text',
      ref: firstName,
      error: 'Ditt förnamn måste innehålla minst 2 bokstäver', // börja med vad som helst bokstav. Minst 2 bokstäver.
      id: "firstName",
      title: '',
      icon: <User className="main-icon" />
    },
    {
      placeholder: user.lastName,
      type: 'text',
      error: 'Ditt efternamn måste innehålla minst 2 bokstäver',
      id: "lastName",
      ref: lastName,
      icon: <User className="main-icon" />
    },
    {
      placeholder: user.email,
      type: 'email',
      ref: email,
      error: 'Förslag på epost "hej@mail.se"',
      id: "email",
      icon: <Mail className="main-icon" />
    },
    {
      placeholder: user.phone,
      type: 'text',
      class: 'phonenumber',
      error: 'Ogiltligt telefonnummer',
      id: 'phone',
      ref: phone,
      icon: <Phone className="main-icon" />
    },
  ]
  if (!update) {

    return (
      <Container fluid={true} className="no-gutters update-account">
        <h2 className="page-title">Uppdatera konto</h2>
        <form className="form-input" onSubmit={(e) => updateUser(e)}>
          <UpdateAccount inputs={inputData} validation={validation} />
          <input className="primary-btn save-button" type="submit" value="Uppdatera" />
        </form>
      </Container>
    )
  }
  return <ConfirmAccUpdate />

}

export default UpdateAccountPage