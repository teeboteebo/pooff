import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StartPage from './views/StartPage'
import TransHistoryPage from './views/TransHistoryPage'
import CreateNewUserPage from './views/CreateNewUserPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  document.querySelector('body').addEventListener("keyup", (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 192 || e.keyCode === 220) setDarkmode(!darkmode)
  })
  return (
    <Router>
      <div className={darkmode ? 'App dark-mode' : 'App'}>
        {/* <Header /> */}
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
            <Route exact path="/registrera" component={CreateNewUserPage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
