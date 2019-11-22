import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, CustomInput } from 'reactstrap'
import { Home, Users, ChevronDown, Eye, User, Plus, Heart, Settings, HelpCircle, LogOut } from 'react-feather'

import { usePooff } from '../../context'

const Menu = () => {
  const [childrenListOpen, setChildrenListOpen] = useState(false)

  const state = usePooff()

  return (
    <nav className={state.menuOpen ? 'menu open' : 'menu'}>
      <ul>
        <li><h5><u>Lasse Skida</u></h5></li>
        <li>
          <Link to="/" onClick={() => state.setMenuOpen(!state.menuOpen)}>
            <Home />
            <span className="side-margin">Startsida</span>
          </Link>
        </li>
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
              <li>
                <User />
                <span className="side-margin">Larry Skida</span>
              </li>
              <li>
                <User />
                <span className="side-margin">Ragnar Skida</span>
              </li>
              <li>
                <Plus />
                <span className="side-margin">Lägg till barn</span>
              </li>
            </ul>
            : ''}
        </li>
        <li>
          <Link to="/">
            <Heart />
            <span className="side-margin">Favoriter</span>
          </Link>
        </li>
        <li>
          <Link to="/">
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
                onChange={() => state.setDarkMode(!state.darkMode)}
                checked={state.darkMode}
              />
            </Col>
          </Row>
        </li>
        <li>
          <LogOut />
          <span className="side-margin" onClick={async () => {
            await fetch('/api/login', { method: 'DELETE' })
            state.setMenuOpen(false)
          }}>Logga ut</span>
        </li>
      </ul>
    </nav>
  )
}

export default Menu