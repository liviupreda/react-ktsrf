import React, { useState } from "react";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import "./App.css";

const API_URL = "https://5e3064ed576f9d0014d63faf.mockapi.io";

function App() {
  const [route, setRoute] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {route === "home" ? (
        <UserHome
          setRoute={setRoute}
          setIsLoggedIn={setIsLoggedIn}
          apiUrl={API_URL}
        />
      ) : route === "login" ? (
        <LogIn
          setRoute={setRoute}
          setIsLoggedIn={setIsLoggedIn}
          apiUrl={API_URL}
        />
      ) : (
        <SignUp
          setRoute={setRoute}
          setIsLoggedIn={setIsLoggedIn}
          apiUrl={API_URL}
        />
      )}
    </div>
  );
}

export default App;
