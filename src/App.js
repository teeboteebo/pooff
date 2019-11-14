import React, { useState } from "react"
import ResetPassword from "./views/ResetPassword"

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? "App dark-mode" : "App"}>
      <ResetPassword />
    </div>
  )
}

export default App
