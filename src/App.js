import React, { useState } from 'react';
import StartPage from './views/StartPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? 'App dark-mode' : 'App'}>
      {/* <Header /> */}
      <main>
        <StartPage />
        <button onClick={()=>setDarkmode(!darkmode)}>TOGGLE MODE</button>

      </main>
    </div>
  )
}

export default App
