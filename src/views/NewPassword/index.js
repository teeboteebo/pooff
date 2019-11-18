import React, { useState, useEffect } from "react"

const NewPassword = () => {
  const [link, setLink] = useState("")
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      fetchedLink.link ? setLink(fetchedLink) : setLink("")
    }
    fetchLink()
  }, [])

  const findUserAndChangePassword = async () => {
    const user = await findUser()
    await updatePassword(user)
    setUpdated(true)
  }

  const findUser = async () => {
    let user = await fetch("/api/users/email/" + link.email)
    user = user.json()
    return user
  }

  const updatePassword = async user => {
    await fetch(`/api/users/id/${user[0]._id}/edit`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: document.querySelector(".password-input").value,
      }), // We send data in JSON format
    })
  }

  return (
    <div>
      {link ? (
        link && !updated ? (
          <div className="new-password-container">
            <h2>Välj nytt lösenord</h2>
            <label className="new-password-item">Nytt lösenord</label>
            <input className="password-input"></input>
            <label className="new-password-item">Upprepa lösenord</label>
            <input className="password-input"></input>
            <button
              className="password-button"
              onClick={findUserAndChangePassword}
            >
              Bekräfta
            </button>
          </div>
        ) : (
          <h1>Lösenord uppdaterat</h1>
        )
      ) : (
        <h2>Vi kunde inte hitta länken</h2>
      )}
    </div>
  )
}

export default NewPassword
