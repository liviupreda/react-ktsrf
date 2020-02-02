import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <LogIn {...routeProps} />}
        />
        <Route
          exact
          path="/signup"
          render={routeProps => <SignUp {...routeProps} />}
        />
        <Route
          exact
          path="/home"
          render={routeProps => <UserHome {...routeProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
