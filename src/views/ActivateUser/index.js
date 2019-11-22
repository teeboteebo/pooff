import React, { useState, useEffect } from "react"

const ActivateUser = () => {
  const [link, setLink] = useState("")
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      fetchedLink.link ? setLink(fetchedLink) : setLink("")
    }
    fetchLink()
    findUserAndActivate()
  }, [])

  const findUserAndActivate = async () => {
    const user = await findUser()
    await activateUser(user)
    setActivated(true)
  }

  const findUser = async () => {
    let user = await fetch("/api/users/email/" + link.email)
    user = user.json()
    return user
  }

  const activateUser = async user => {
    await fetch(`/api/users/activate/${user[0]._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        active: true,
      }),
    })
  }

  return (
    <div>
      {activated ? (
        <h2>Ditt konto har nu aktiverats</h2>
      ) : (
        <h2>Kunde inte hitta länk</h2>
      )}
    </div>
  )
}

export default ActivateUser
