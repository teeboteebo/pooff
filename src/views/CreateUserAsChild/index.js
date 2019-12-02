import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import { User, Mail, Phone, Lock } from 'react-feather'
import { useState, useRef } from "react"

import UserRegister from "../../components/UserRegister";

const CreateUserAsChild = () => {

  const lastName = useRef()
  const username = useRef()
  const phone = useRef()
  const password = useRef()

  const [link, setLink] = useState("")
  const [fetched, setFetched] = useState(false)
  const [user, setUser] = useState({})
  const [updated, setUpdated] = useState(false)

  let childInputData = [
    {
      name: user[0] ? user[0].firstName : 'Förnamn',
      type: 'text',
      icon: <User className="main-icon" disabled />
    },
    {
      name: 'Efternamn',
      type: 'text',
      ref: lastName,
      icon: <User className="main-icon" />
    },
    {
      name: user[0] ? user[0].personId : 'Personnummer',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      ref: username,
      icon: <User className="main-icon" />
    },
    {
      name: user[0] ? user[0].email : 'E-post',
      type: 'email',
      icon: <Mail className="main-icon" disabled />
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
  }

  if (!fetched) {
    run()
  }

  const updateChild = async () => {
    await fetch(`/api/child/${user[0]._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastName: lastName.current.value,
        username: username.current.value,
        phone: phone.current.value,
        password: password.current.value,
        active: true
      })
    })
    await setUpdated(true)
  }

  return (
    updated ?
      <Container fluid={true}>
        <h2 className="page-title">Din profil har updaterats</h2>
        <Link to="/logga-in">Klicka här för att logga in</Link>
      </Container> :
      <Container fluid={true}>
        <h2 className="page-title">Komplettera din profil</h2>
        <p className="page-info">Ange personuppgifter</p>
        <UserRegister inputs={childInputData} />
        <input className="primary-btn" onClick={updateChild} type="submit" value="Registrera" />
        <div className="text-center">
          {/* <button className="save-button" onClick={updateChild}>Registrera</button> */}
        <p className="mt-4">Har du redan ett konto?<Link className="login-link" to="/logga-in">Logga in</Link></p>
      </div>
      </Container>
  )
}
export default CreateUserAsChild