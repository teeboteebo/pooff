import React, { useState } from 'react';
import StartPage from './views/StartPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? 'App dark-mode' : 'App'}>
      <StartPage />
      <button onClick={()=>setDarkmode(!darkmode)}>TOGGLE MODE</button>
    </div>
  )
}

export default App
