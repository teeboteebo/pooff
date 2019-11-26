import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, CustomInput } from 'reactstrap'
import { Home, List, Users, ChevronDown, Eye, User, Plus, Heart, Settings, HelpCircle, LogOut } from 'react-feather'

import { usePooff } from '../../context'

const Menu = () => {
  const [childrenListOpen, setChildrenListOpen] = useState(false)

  const history = useHistory()

  const state = usePooff()

  const { firstName, lastName, darkMode } = state.loggedIn

  const toggleDarkMode = async () => {
    const putUser = await fetch('/api/myuser', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        darkMode: !darkMode
      })
    })

    const user = await putUser.json()
    state.setLoggedIn({ ...state.loggedIn, darkMode: user.darkMode })
  }

  return (
    <nav className={state.menuOpen ? 'menu open' : 'menu'}>
      <ul>
        <li><h5><u>{firstName + ' ' + lastName}</u></h5></li>
        <li>
          <Link to="/" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <Home />
            <span className="side-margin">Startsida</span>
          </Link>
        </li>
        <li>
          <Link to="/mina-transaktioner" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <List />
            <span className="side-margin">Transaktioner</span>
          </Link>
        </li>
        {state.children.length ?
          <li>
            <span onClick={() => setChildrenListOpen(!childrenListOpen)}>
              <Users />
              <span className="side-margin">Mina barn</span>
              <ChevronDown className={childrenListOpen ? 'chevron chevron-up' : 'chevron'} />
            </span>
            {childrenListOpen ?
              <ul>
                <li>
                  <Link to="/mina-barn" onClick={() => state.setMenuOpen(!state.menuOpen)}>
                    <Eye />
                    <span className="side-margin">Översikt</span>
                  </Link>
                </li>
                {state.children.map((child, i) => (
                  <li key={i}>
                    <Link to={'/mina-barn/' + child._id} onClick={() => state.setMenuOpen(!state.menuOpen)}>
                      <User />
                      <span className="side-margin">{child.firstName + ' ' + child.lastName}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Plus />
                  <span className="side-margin">Lägg till barn</span>
                </li>
              </ul>
              : ''}
          </li>
          :
          <li>
            <Link to="/" onClick={() => state.setMenuOpen(!state.menuOpen)}>
              <Plus />
              <span className="side-margin">Lägg till barn</span>
            </Link>
          </li>
        }
        <li>
          <Link to="/favoriter" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <Heart />
            <span className="side-margin">Favoriter</span>
          </Link>
        </li>
        <li>
          <Link to="/mitt-konto" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <Settings />
            <span className="side-margin">Mitt konto</span>
          </Link>
        </li>
        <li>
          <Link to="/vanliga-fragor" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <HelpCircle />
            <span className="side-margin">Frågor och svar</span>
          </Link>
        </li>
        <li className="dark-mode-box">
          <Row className="no-gutters align-items-center">
            <Col>
              <p>Mörkt telefonläge</p>
              <p className="cozy-text">För ökad mysfaktor i tillvaron</p>
            </Col>
            <Col xs="auto">
              <CustomInput
                type="switch"
                id="dark-mode"
                name="dark-mode"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
            </Col>
          </Row>
        </li>
        <li>
          <LogOut />
          <span className="side-margin" onClick={async () => {
            await fetch('/api/login', { method: 'DELETE' })
            await state.setLoggedIn(false)
            await state.setChildren([])
            state.setMenuOpen(false)
            history.push('/')
          }}>Logga ut</span>
        </li>
      </ul>
    </nav>
  )
}

export default Menu