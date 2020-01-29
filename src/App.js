import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <LoginPage {...routeProps} />}
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
