import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Row, Col, CustomInput } from 'reactstrap'
import { Home, Users, ChevronDown, Eye, User, Plus, Heart, Settings, HelpCircle, LogOut } from 'react-feather'

const Menu = () => {
  // const [foldedMenu, setFoldedMenu] = useState(true)

  return (
    <Router>
      <nav className='menu open'>
        <ul>
          <li><h5><u>Lasse Skida</u></h5></li>
          <li>
            <Link to="/">
              <Home />
              <span>Startsida</span>
            </Link>
          </li>
          <li>
            <Users />
            <span>Mina barn</span>
            <ChevronDown />
            <ul>
              <li>
                <Eye />
                <span>Översikt</span>
              </li>
              <li>
                <User />
                <span>Larry Skida</span>
              </li>
              <li>
                <User />
                <span>Ragnar Skida</span>
              </li>
              <li>
                <Plus />
                <span>Lägg till barn</span>
              </li>
            </ul>
          </li>
          <li>
            <Link>
              <Heart />
              <span>Favoriter</span>
            </Link>
          </li>
          <li>
            <Link>
              <Settings />
              <span>Mitt konto</span>
            </Link>
          </li>
          <li>
            <Link>
              <HelpCircle />
              <span>Frågor och svar</span>
            </Link>
          </li>
          <li className="dark-mode-box">
            <Row className="no-gutters align-items-center">
              <Col>
                <p>Mörkt telefonläge</p>
                <p className="cozy-text">För ökad mysfaktor i tillvaron</p>
              </Col>
              <Col xs="auto">
                <CustomInput type="switch" id="dark-mode" name="dark-mode" />
              </Col>
            </Row>
          </li>
          <li>
            <LogOut />
            <span>Logga ut</span>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Menu