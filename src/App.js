import React, { useState } from "react"
import ResetPassword from "./views/ResetPassword"
import NewPassword from "./views/NewPassword"

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? "App dark-mode" : "App"}>
      <NewPassword />
    </div>
  )
}

export default App
