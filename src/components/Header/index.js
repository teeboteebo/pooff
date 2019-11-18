import React, { useState } from 'react'
import { Menu as MenuIcon } from 'react-feather'

import Menu from '../Menu'

const Header = props => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)
  
  return (
    <div>
      <header>
        <MenuIcon onClick={toggle} style={{color: '#fff'}} />
        <img src="/images/logos/pooff-white.png" alt="pooff-logo" />
      </header>
      <Menu open={menuOpen} toggleMenu={toggle} toggleDarkmode={props.toggleDarkmode} />
    </div>
  )
}

export default Header