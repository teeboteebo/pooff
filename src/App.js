import React, { useEffect } from "react"
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

import { usePooff } from "./context"

const App = () => {
  const state = usePooff()
  /* const [loggedIn, setLoggedIn] = useState(false)
  const [loginFetched, setLoginFetched] = useState(false) */
  let headerHeight = 44
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`)

  /* document.querySelector('body').addEventListener("keyup", (e) => {
    if (e.keyCode === 192 || e.keyCode === 220) state.setDarkMode(!state.darkMode)
  }) */

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      let loggedInRaw = await fetch("/api/login")
      let message = await loggedInRaw.json()
      if (message.status) {
        // setLoggedIn(false)
      } else if (!message.status) {
        // setLoggedIn(true)
        const fetchedUser = await fetch("/api/myuser")
        const user = await fetchedUser.json()
        const fetchedBalance = await fetch('/api/mytransactions/balance')
        const balanceObj = await fetchedBalance.json()
        user.balance = balanceObj.balance
        state.setLoggedIn(user)

        if (user.role === "parent") {
          const fetchedChildren = await fetch("/api/mychildren")
          const children = await fetchedChildren.json()
          state.setChildren(children)
        }
      }
      // setLoginFetched(true)
    }
    checkIfLoggedIn()
     //comment below removes varning to include or exclude idToGet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (window.matchMedia("(orientation: landscape)").matches) {
    // you're in LANDSCAPE mode
    return <DesktopPage />
  } else
    return (
      <Router>
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
                <Route exact path="/registrera" component={CreateNewUserPage} />
                <Route exact path="/registrera-barn" component={CreateUserAsChild} />
                <Route exact path="/ny-betalning" component={TransactionForm} />
                <Route exact path="/lagg-till-barn" component={ChildRegisterPage} />
              <Route exact path="/uppdatera-konto" component={UpdateAccountPage} />
              <Route exact path="/uppdaterat-konto" component={ConfirmAccUpdate} />
                <Route exact path="/vanliga-fragor" component={QnA} />
                <Route exact path="/mina-barn" component={KidsList} />
                <Route exact path="/mina-barn/:id" component={Kid} />
                <Route exact path="/mina-transaktioner" component={TransHistoryPage} />
                <Route exact path="/enskild-transaktion/:id" component={TransactionPage} />
                <Route exact path="/mitt-konto" component={MyAccount} />
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
      </Router>
    )
}

export default App
