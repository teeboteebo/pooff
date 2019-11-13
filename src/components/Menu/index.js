import React, { useState } from 'react'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>Lasse Skida</li>
        <li>Startsida</li>        
        <li>Mina barn</li>
        <ul>
          <li>Översikt</li>
          <li>Larry Skida</li>
          <li>Ragnar Skida</li>
          <li>Lägg till barn</li>
        </ul>
        <li>Favoriter</li>        
        <li>Mitt konto</li>        
        <li>Frågor och svar</li>              
      </ul>
      <div>
        Mörkt telefonläge
      </div>
      <div>
        Logga ut
      </div>
    </nav>
  )
}

export default Menu