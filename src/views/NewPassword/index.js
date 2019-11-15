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
        password: document.querySelector(".new-password").value,
      }), // We send data in JSON format
    })
  }

  return (
    <div>
      {link ? (
        link && !updated ? (
          <div className="new-password-container">
            <h1>Välj nytt lösenord</h1>{" "}
            <label className="new-password-item">Nytt lösenord</label>
            <input className="new-password"></input>
            <label className="new-password-item">Upprepa lösenord</label>
            <input className="new-password-confirm"></input>
            <button onClick={findUserAndChangePassword}>Bekräfta</button>
          </div>
        ) : (
          <h1>Lösenord uppdaterat</h1>
        )
      ) : (
        <p>Link not found</p>
      )}
    </div>
  )
}

export default NewPassword
