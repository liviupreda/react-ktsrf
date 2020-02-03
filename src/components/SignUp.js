import React, { useState, useEffect } from "react";
import axios from "axios";

function SignUp(props) {
  const { setRoute, setIsLoggedIn, apiUrl } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    const params = {
      email: email,
      password: password
    };
    const res = await axios.post(apiUrl + "/login", params);
    console.log(res.data);
  }

  async function createNewUser() {
    const params = {
      name: name,
      email: email,
      password: password
    };

    let res = await axios.post(apiUrl + "/user", params);
    console.log(res.data);
  }

  const handleNameFieldChange = e => {
    setName(e.target.value);
  };

  const handleEmailFieldChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordFieldChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    createNewUser();
    loginUser();
    setRoute("home");
    setIsLoggedIn(true);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                User Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={handleNameFieldChange}
              />
            </div>
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
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </main>
    </article>
  );
}

export default SignUp;
