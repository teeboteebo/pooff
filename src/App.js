import React, { useState } from "react";
import StartPage from "./views/StartPage";
import UserRegister from "./components/UserRegister";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "App dark-mode" : "App"}>
      <StartPage />
      <button onClick={() => setDarkmode(!darkmode)}>TOGGLE MODE</button>
      <UserRegister />
    </div>
  );
};

export default App;
