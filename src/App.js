import React, { useState } from "react";
import StartPage from "./views/StartPage";
import LoginPage from "./views/LoginPage";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "App dark-mode" : "App"}>
      <StartPage />
      <button onClick={() => setDarkmode(!darkmode)}>TOGGLE MODE</button>
      <LoginPage />
    </div>
  );
};

export default App;
