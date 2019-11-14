import React, { useState, useEffect } from "react"

const NewPassword = () => {
  const [link, setLink] = useState("")

  useEffect(() => {
    const path = window.location.pathname.split("/")[2]
    const fetchLink = async () => {
      let fetchedLink = await fetch("/api/links/" + path)
      fetchedLink = await fetchedLink.json()
      await setLink(fetchedLink)
    }
    fetchLink()
  }, [])

  const changePassword = async () => {}

  return (
    <div>
      {link.link ? (
        <div className="new-password-container">
          <h1>Välj nytt lösenord</h1>{" "}
          <label className="new-password-item">Nytt lösenord</label>
          <input className="new-password-item"></input>
          <label className="new-password-item">Upprepa lösenord</label>
          <input className="new-password-item"></input>
          <button onClick={changePassword}>Bekräfta</button>
        </div>
      ) : (
        <p>Link not found</p>
      )}
      {console.log(link)}
    </div>
  )
}

export default NewPassword
