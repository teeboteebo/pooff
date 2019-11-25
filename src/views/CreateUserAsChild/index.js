import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import { User, Mail, Phone, Lock } from 'react-feather'
import {useState, useEffect} from "react"

import UserRegister from "../../components/UserRegister";

const CreateUserAsChild = () => {

  const [link, setLink] = useState("")
  const [fetched, setFetched] = useState(false) 
  const [user, setUser] = useState({}) 

  let childInputData = [
    {
      name: user[0] ? user[0].firstName : 'Förnamn',
      type: 'text',
      icon: <User className="main-icon" disabled/>
    },
    {
      name: 'Efternamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    { // We wait for createChild component to pre-write Id number
      name: user[0] ? user[0].personId : 'Personnummer',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    { // We wait for createChild component to pre-write E-mail
      name: user[0] ? user[0].email : 'E-post',
      type: 'email',
      icon: <Mail className="main-icon" disabled/>
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

  const run = async () => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      fetchedLink.link ? await setLink(fetchedLink) : await setLink("")
    }
    await fetchLink()
    await (link ? findUser() : null)
  }

  const findUser = async () => {
    let user = await fetch("/api/email/" + link.email)
    user = await user.json()
    setFetched(true)
    setUser(user)
    console.log(user)
  }

  if (!fetched) {
    run()
  }

  return (
    <Container fluid={true}>
      <h2 className="page-title">Komplettera din profil</h2>
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