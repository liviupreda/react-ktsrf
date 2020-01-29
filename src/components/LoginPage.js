import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/LoginPageStyles";

function LoginPage(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    props.history.push("/home");
  };

  return (
    <div className={classes.LoginFormContainer}>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          label="Username"
          onChange={handleNameChange}
          name="username"
          value={username}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <TextValidator
          label="Email"
          onChange={handleEmailChange}
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

export default withStyles(styles)(LoginPage);
