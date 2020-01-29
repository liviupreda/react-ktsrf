import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
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
        <Route exact path="/home" render={() => <Navbar />} />
      </Switch>
    </Router>
  );
}

export default App;
