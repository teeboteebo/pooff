import React, { useState } from "react"
import { Spinner } from "reactstrap"

const ActivateUser = () => {
  const [link, setLink] = useState("")
  const [activated, setActivated] = useState(false)

  const findUserAndActivate = async () => {
    console.log()
    const user = await findUser()
    await activateUser(user)
    setActivated(true)
  }

  const findUser = async () => {
    let user = await fetch("/api/users/email/" + link.email)
    user = await user.json()
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

  const run = async () => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      console.log(fetchedLink)
      fetchedLink.link ? await setLink(fetchedLink) : await setLink("")
    }
    await fetchLink()
    await (link ? findUserAndActivate() : null)
  }

  if (!activated) {
    run()
  }

  return (
    <div>
      {activated ? (
        <div>
          <h2>Ditt konto har nu aktiverats</h2>
          <button className=".to-login-button">Till inlogg</button>
        </div>
      ) : (
        <div>
          <h2>
            <Spinner />
          </h2>
        </div>
      )}
    </div>
  )
}

export default ActivateUser
