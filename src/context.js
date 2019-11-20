import { createContext, useContext, useState } from 'react'

export const useContextValues = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return {
    darkMode,
    setDarkMode,
    menuOpen,
    setMenuOpen
  }
};

export const PooffContext = createContext()

export const usePooff = () => useContext(PooffContext)
