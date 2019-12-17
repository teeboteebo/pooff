import React from 'react'
import { Menu as MenuIcon, X } from 'react-feather'
import { Link } from 'react-router-dom'

import { usePooff } from '../../context'

import Menu from '../Menu'

const Header = () => {
  const state = usePooff()

  return (
    <div>
      <header>
        {state.menuOpen
          ? <X onClick={() => state.setMenuOpen(!state.menuOpen)} style={{ color: '#fff' }} />
          : <MenuIcon onClick={() => state.setMenuOpen(!state.menuOpen)} style={{ color: '#fff' }} />
        }
        <Link to="/" onClick={() => state.setMenuOpen(false)}>
          <img src="/images/logos/pooff-white.png" alt="pooff-logo" />
        </Link>
      </header>
      <Menu />
    </div>
  )
}

export default Header