import React, { useState } from 'react';
import Menu from './components/Menu'
// import StartPage from './views/StartPage'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={darkmode ? 'App dark-mode' : 'App'}>
      <Menu />
    </div>
  )
}

export default App
