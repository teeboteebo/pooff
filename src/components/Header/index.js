import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { Menu as MenuIcon } from 'react-feather'

import Menu from '../Menu'

const Header = () => {
  return (
    <div>
      <header>
        <MenuIcon />
        <img src="/images/logos/pooff-white.png" alt="pooff-logo" />
      </header>
      <Menu />
    </div>
  )
}

export default Header