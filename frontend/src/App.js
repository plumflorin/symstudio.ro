import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Servicii from "./components/Servicii";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/servicii">
          <Servicii />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
