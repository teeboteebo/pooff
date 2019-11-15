import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header'
import StartPage from './views/StartPage'
import TransHistoryPage from './views/TransHistoryPage'
import TransactionPage from './views/TransactionPage'
import CreateNewUserPage from './views/CreateNewUserPage'

const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const [darkmode, setDarkmode] = useState(false)
  document.querySelector('body').addEventListener("keyup", (e) => {
    if (e.keyCode === 192 || e.keyCode === 220) setDarkmode(!darkmode)
  })

  const toggleDarkmode = () => setDarkmode(!darkmode)

  return (
    <Router>
      <div className={darkmode ? 'App dark-mode' : 'App'}>
        <Header toggleDarkmode={toggleDarkmode} />
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
            <Route exact path="/enskild-transaktion" component={TransactionPage} />
            <Route exact path="/registrera" component={CreateNewUserPage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
