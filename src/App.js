import React, { useState } from 'react';
import Header from './components/Header'
// import StartPage from './views/StartPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkmode = () => setDarkmode(!darkmode)

  return (
    <div className={darkmode ? 'App dark-mode' : 'App'}>
      <Header toggleDarkmode={toggleDarkmode} />
      <main>
      </main>
    </div>
  )
}

export default App
