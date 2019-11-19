import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import StartPage from "./views/StartPage"
import TransHistoryPage from "./views/TransHistoryPage"
import CreateNewUserPage from "./views/CreateNewUserPage"
import createUserAsChild from "./views/CreateUserAsChild"
import PaymentConfirmation from "./views/PaymentConfirmation"
import LoginPage from './views/Login-temp';
import ResetPassword from "./views/ResetPassword"
import NewPassword from "./views/NewPassword"
import UserFavorite from "./views/UserFavorites"

const App = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
  const [darkmode, setDarkmode] = useState(false)
  document.querySelector("body").addEventListener("keyup", e => {
    if (e.keyCode === 192 || e.keyCode === 220) setDarkmode(!darkmode)
  })

  const toggleDarkmode = () => setDarkmode(!darkmode)

  return (
    <Router>
      <div className={darkmode ? "App dark-mode" : "App"}>
        <Header toggleDarkmode={toggleDarkmode} />
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route
              exact
              path="/mina-transaktioner"
              component={TransHistoryPage}
            />
            <Route exact path="/registrera" component={CreateNewUserPage} />
            <Route
              exact
              path="/registrera-barn"
              component={createUserAsChild}
            />
            <Route exact path="/aterstall-losenord" component={ResetPassword} />
            <Route path="/nytt-losenord" component={NewPassword} />
            <Route
              exact
              path="/lyckad-betalning"
              render={props => (
                <PaymentConfirmation
                  name="Sture Stoppmur"
                  number="070123123"
                  amount="100 kr"
                  message="Du blocka mig"
                />
              )}
            />
            <Route exact path="/login-test" component={LoginPage} />
            <Route exact path="/Favorites" component={UserFavorite} />

          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
