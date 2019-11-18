import React from "react";
import { Link } from 'react-router-dom'
import { Container } from "reactstrap";
import UserRegister from "../../components/UserRegister";
import { User, Mail, Phone, Lock } from "react-feather";

const CreateNewUserPage = () => {
  let inputData = [
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
    {
      name: 'Personnummer',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
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
      <UserRegister inputs={inputData} />
      <div className="text-center">
        <button className="save-button">Registrera</button>
        <p>Har du redan ett konto?<Link className="login" to="/logga-in">Logga in</Link></p>
      </div>
    </Container>
  )
}
export default CreateNewUserPage