import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/home"
          render={routeProps => <Navbar {...routeProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
