import React, { useState } from 'react'
import { Row, Col, CustomInput } from 'reactstrap'
import { Home, Users, ChevronDown, Eye, User, Plus, Heart, Settings, HelpCircle, LogOut } from 'react-feather'

const Menu = () => {
  // const [foldedMenu, setFoldedMenu] = useState(true)

  return (
    <nav className='menu open'>
      <ul>
        <li><h4><u>Lasse Skida</u></h4></li>
        <li>
          <Home />
          <span>Startsida</span>
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
          <Heart />
          <span>Favoriter</span>
        </li>
        <li>
          <Settings />
          <span>Mitt konto</span>
        </li>
        <li>
          <HelpCircle />
          <span>Frågor och svar</span>
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
  )
}

export default Menu