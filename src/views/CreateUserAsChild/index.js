import React from 'react'
import { Link } from 'react-router-dom'
import UserRegister from '../../components/UserRegister'
import { Container } from 'reactstrap'

import { User, Mail, Phone, Lock } from 'react-feather'

const CreateUserAsChild = () => {
  let childInputData = [
    {
      name: 'Förnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Efternamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    { // We wait for createChild component to pre-write Id number
      name: 'Personnummer',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    { // We wait for createChild component to pre-write E-mail
      name: 'E-post',
      type: 'email',
      icon: <Mail className="main-icon" />
    },
    {
      name: 'Telefonnummer',
      type: 'text',
      class: 'phonenumber',
      icon: <Phone className="main-icon" />
    },
    {
      name: 'Lösenord',
      type: 'password',
      class: 'new-password',
      icon: <Lock className="main-icon" />
    },
    {
      name: 'Bekräfta lösenord',
      type: 'password',
      class: 'repeat-password',
      icon: <Lock className="main-icon" />
    }
  ]
  return (
    <Container>
      <h2 className="page-title">Registrera användare</h2>
      <p className="page-info">Ange personuppgifter</p>
      <UserRegister inputs={childInputData} />
      <div className="text-center">
        <button className="save-button">Registrera</button>
        <p>Har du redan ett konto?<Link className="login" to="/logga-in">Logga in</Link></p>
      </div>
    </Container>
  )
}
export default CreateUserAsChild