import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import PooffHeader from './components/PooffHeader'
import Header from './components/Header'

// Views
import PooffStartPage from './views/PooffStartPage'
import StartPage from './views/StartPage'
import TransHistoryPage from './views/TransHistoryPage'
import CreateNewUserPage from './views/CreateNewUserPage'
import TransactionForm from './views/TransactionForm'
import FavoritePage from "./views/FavoritePage"
import ChildRegisterPage from './views/ChildRegisterPage'
import CreateUserAsChild from "./views/CreateUserAsChild"
import DesktopPage from "./views/DesktopPage"
import ResetPassword from "./views/ResetPassword"
import NewPassword from "./views/NewPassword"
import TransactionPage from "./views/TransactionPage"
import QnA from "./views/QnA"
import LoginPage from "./views/LoginPage"
import KidsList from "./views/KidsList"
import Kid from "./views/Kid"
import MyAccount from "./views/MyAccount"
import ActivateUser from "./views/ActivateUser"
import UpdateAccountPage from './views/UpdateAccountPage';
import ConfirmAccUpdate from './views/ConfirmAccUpdate';
import UpdatePasswordLoggedIn from './views/UpdatePasswordLoggedIn'

import { usePooff } from "./context"
import useMagic from './actions/useMagic'

const App = () => {
  const state = usePooff()
  const [getLoggedIn] = useMagic()
  const [loading, setLoading] = useState(true)

  let headerHeight = 44
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`)

  useEffect(() => {
    const load = async () => {
      await getLoggedIn()
      setLoading(false)
    }

    load()
    //comment below removes varning to include or exclude idToGet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (window.matchMedia("(orientation: landscape)").matches) {
    // you're in LANDSCAPE mode
    return <DesktopPage />
  } else
    return (
      <Router>
        {!loading ?
          <div
            className={state.loggedIn && state.loggedIn.darkMode ? "App dark-mode" : "App"}>
            {state.loggedIn ? <Header /> : <PooffHeader />}
            <main>
              {state.loggedIn ? (
                <Switch>
                  {/* LOGGED IN */}
                  <Route exact path="/" component={StartPage} />
                  <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
                  <Route exact path="/favoriter" component={FavoritePage} />
                  {/* <Route exact path="/registrera" component={CreateNewUserPage} />
                  <Route exact path="/registrera-barn" component={CreateUserAsChild} /> */}
                  <Route exact path="/ny-betalning" component={TransactionForm} />
                  <Route exact path="/lagg-till-barn" component={ChildRegisterPage} />
                  <Route exact path="/uppdatera-konto" component={UpdateAccountPage} />
                  <Route exact path="/uppdaterat-konto" component={ConfirmAccUpdate} />
                  <Route exact path="/vanliga-fragor" component={QnA} />
                  <Route exact path="/mina-barn" component={KidsList} />
                  <Route exact path="/mina-barn/:id" component={Kid} />
                  <Route exact path="/mina-barn/:childId/transaktioner/:id" component={TransactionPage} />
                  <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
                  <Route exact path="/mina-transaktioner/:id" component={TransactionPage} />
                  <Route exact path="/mitt-konto" component={MyAccount} />
                  <Route path="/nytt-losenord" component={NewPassword} />
                  <Route exact path="/uppdatera-losenord" component={UpdatePasswordLoggedIn} />
                </Switch>
              ) : (
                  <Switch>
                    {/* NOT LOGGED IN */}
                    <Route exact path="/" component={PooffStartPage} />
                    <Route exact path="/logga-in" render={props => <LoginPage {...props} />} />
                    <Route exact path="/registrera" component={CreateNewUserPage} />
                    <Route exact path="/vanliga-fragor" component={QnA} />
                    <Route path="/aktivera-konto" component={ActivateUser} />
                    <Route path="/registrera-barn" component={CreateUserAsChild} />
                    <Route path="/aterstall-losenord" component={ResetPassword} />
                    <Route path="/nytt-losenord" component={NewPassword} />
                  </Switch>
                )}
            </main>
          </div>
          : ''}
      </Router>
    )
}

export default App
