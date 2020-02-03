import React, { useState } from "react";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [route, setRoute] = useState("login");

  return (
    <div className="App">
      {route === "home" ? (
        <UserHome setRoute={setRoute} />
      ) : route === "login" ? (
        <LogIn setRoute={setRoute} />
      ) : (
        <SignUp setRoute={setRoute} />
      )}
    </div>
  );
}

export default App;
