import React, { useRef } from "react";
import { Link } from 'react-router-dom'
import { Container } from "reactstrap";
import UserRegister from "../../components/UserRegister";
import { User, Mail, Phone, Lock } from "react-feather";

const CreateNewUserPage = () => {
  const firstName = useRef()
  const lastName = useRef()
  const personId = useRef()
  const username = useRef()
  const email = useRef()
  const phone = useRef()
  const password = useRef()

  let inputData = [
    {
      name: 'Förnamn',
      type: 'text',
      ref: firstName,
      icon: <User className="main-icon" />
    },
    {
      name: 'Efternamn',
      type: 'text',
      ref: lastName,
      icon: <User className="main-icon" />
    },
    {
      name: 'Personnummer',
      type: 'text',
      ref: personId,
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      ref: username,
      icon: <User className="main-icon" />
    },
    {
      name: 'E-post',
      type: 'email',
      ref: email,
      icon: <Mail className="main-icon" />
    },
    {
      name: 'Telefonnummer',
      type: 'text',
      class: 'phonenumber',
      ref: phone,
      icon: <Phone className="main-icon" />
    },
    {
      name: 'Lösenord',
      type: 'password',
      class: 'new-password',
      ref: password,
      icon: <Lock className="main-icon" />
    },
    {
      name: 'Bekräfta lösenord',
      type: 'password',
      class: 'repeat-password',
      ref: password,
      icon: <Lock className="main-icon" />
    }
  ]

  const submitNewUser = async (e) => {
    e.preventDefault()
    let responseRaw = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        personId: personId.current.value,
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
        phone: phone.current.value
      })
    })
    let response = await responseRaw.json()
    console.log(response);
  }

  return (
    <Container fluid={true}>
      <h2 className="page-title">Registrera användare</h2>
      <p className="page-info">Ange personuppgifter</p>
      <form onSubmit={(e) => submitNewUser(e)}>
        <UserRegister inputs={inputData} />
      </form>
      <div className="text-center">
        <input className="save-button mt-4" type="submit" value="Registrera" />
        <p className="mt-4">Har du redan ett konto?<Link className="login-link" to="/logga-in">Logga in</Link></p>
      </div>
    </Container>
  )
}
export default CreateNewUserPage