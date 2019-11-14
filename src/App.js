import React, { useState } from 'react';
import StartPage from './views/StartPage'
import TransHistoryPage from './views/TransHistoryPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? 'App dark-mode' : 'App'}>
      <StartPage />
      <button onClick={()=>setDarkmode(!darkmode)}>TOGGLE MODE</button>
      <TransHistoryPage />
    </div>
  )
}

export default App
