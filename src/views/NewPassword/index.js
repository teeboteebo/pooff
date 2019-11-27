import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import { X, Check } from "react-feather";

const NewPassword = () => {
  const [link, setLink] = useState("")
  const [updated, setUpdated] = useState(false)
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      fetchedLink.link ? setLink(fetchedLink) : setLink("")
    }
    fetchLink()
  }, [])

  const checkIfMatch = () => {
    let inputValues = document.querySelectorAll(".input-field")
    if (inputValues[0].value === inputValues[1].value) {
      setMatch(true)
    }
    else { setMatch(false) }
  }

  const findUserAndChangePassword = async () => {
    if (match) {
      const user = await findUser()
      await updatePassword(user)
      setUpdated(true)
    }
  }

  const findUser = async () => {
    let user = await fetch("/api/email/" + link.email)
    user = user.json()
    return user
  }

  const updatePassword = async user => {
    await fetch(`/api/password/${user[0]._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: document.querySelector(".input-field").value,
      }), // We send data in JSON format
    })
  }

  return (
    <Container>
      {link ? (
        link && !updated ? (
          <div className="new-password-container">
            <h2 className="page-title">Välj nytt lösenord</h2>
            <input type="password" className="input-field" placeholder="Nytt lösenord" onChange={checkIfMatch}></input>
            <input type="password" className="input-field" placeholder="Upprepa lösenord" onChange={checkIfMatch}></input>
            {match ? <Check className="checked green" /> : <X className="checked" /> }
            <input className="primary-btn" onClick={findUserAndChangePassword} type="submit" value="Bekräfta" />
          </div>
        ) : (
            <div className="new-password-container">
              <h2>Lösenord uppdaterat</h2>
              <Link className="password-button" to="/logga-in">Till inlogg</Link>
            </div>
        )
      ) : (
          <div className="new-password-container">
            <h2>Vi kunde inte hitta länken</h2>
            <Link className="password-button" to="/">Till startsidan</Link>
          </div>
      )}
    </Container>
  )
}

export default NewPassword
