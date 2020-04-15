import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Servicii from "./components/Servicii";
import Error404 from "./components/404.js";

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
        <Error404 />
      </Switch>
    </Router>
  );
}

export default App;
