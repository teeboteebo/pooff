import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header'
import StartPage from './views/StartPage'
import TransHistoryPage from './views/TransHistoryPage'
import CreateNewUserPage from './views/CreateNewUserPage'
import TransactionForm from './views/TransactionForm'

import { usePooff } from './context'

const App = () => {
  const state = usePooff()

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  document.querySelector('body').addEventListener("keyup", (e) => {
    if (e.keyCode === 192 || e.keyCode === 220) state.setDarkMode(!state.darkMode)
  })

  return (

    <Router>
      <div className={state.darkMode ? 'App dark-mode' : 'App'}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
            <Route exact path="/registrera" component={CreateNewUserPage} />
            <Route exact path="/ny-transaktion" component={TransactionForm} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
