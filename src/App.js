import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import StartPage from "./views/StartPage";
import CreateNewUserPage from "./views/CreateNewUserPage";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={darkmode ? "App dark-mode" : "App"}>
      <StartPage />
      <button onClick={() => setDarkmode(!darkmode)}>TOGGLE MODE</button>
      <CreateNewUserPage />
    </div>
  );
};

export default App;
