import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";

function LoginPage(props) {
  const [email, setEmail] = useState("");

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    props.history.push("/home");
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          label="Email"
          onChange={handleChange}
          name="email"
          value={email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <Button type="submit">Submit</Button>
      </ValidatorForm>
    </div>
  );
}

export default LoginPage;
