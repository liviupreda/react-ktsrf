import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [route, setRoute] = useState("login");

  return (
    <div className="App">
      {route === "login" ? (
        <LogIn setRoute={setRoute} />
      ) : (
        <UserHome setRoute={setRoute} />
      )}
    </div>
  );
}

export default App;
