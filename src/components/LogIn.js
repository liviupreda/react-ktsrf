import React, { useState, useEffect } from "react";
import axios from "axios";

function LogIn(props) {
  const { setRoute, setIsLoggedIn, apiUrl } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    await axios
      .get(apiUrl + "/user")
      .catch(err => {
        alert("Server Error: Could not retrieve user list");
        console.log(err);
      })
      .then(res => console.log("OK", res.data));
  }

  async function loginUser() {
    const params = {
      email: email,
      password: password
    };
    const res = await axios.post(apiUrl + "/login", params);
    console.log(res.data);
  }

  const handleEmailFieldChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordFieldChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    loginUser();
    setRoute("home");
    setIsLoggedIn(true);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Log In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                E-mail
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={handleEmailFieldChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={handlePasswordFieldChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={handleSubmit}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Log In"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className="f6 link dim black db pointer"
              onClick={() => setRoute("signup")}
            >
              Sign up
            </p>
          </div>
        </form>
      </main>
    </article>
  );
}

export default LogIn;
