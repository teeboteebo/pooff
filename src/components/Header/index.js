import React from 'react'
import { Menu as MenuIcon } from 'react-feather'

import { usePooff } from '../../context'

import Menu from '../Menu'

const Header = () => {
  const state = usePooff()
  
  return (
    <div>
      <header>
        <MenuIcon onClick={() => state.setMenuOpen(!state.menuOpen)} style={{color: '#fff'}} />
        <img src="/images/logos/pooff-white.png" alt="pooff-logo" />
      </header>
      <Menu />
    </div>
  )
}

export default Header