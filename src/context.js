import { createContext, useContext, useState } from 'react'

export const useContextValues = () => {
  const [loggedIn, setLoggedIn] = useState()
  const [children, setChildren] = useState()
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return {
    loggedIn,
    setLoggedIn,
    children,
    setChildren,
    darkMode,
    setDarkMode,
    menuOpen,
    setMenuOpen
  }
};

export const PooffContext = createContext()

export const usePooff = () => useContext(PooffContext)
