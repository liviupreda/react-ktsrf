import React, { useState } from "react";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [route, setRoute] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {route === "home" ? (
        <UserHome setRoute={setRoute} setIsLoggedIn={setIsLoggedIn} />
      ) : route === "login" ? (
        <LogIn setRoute={setRoute} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <SignUp setRoute={setRoute} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
