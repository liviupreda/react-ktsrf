import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

function Navbar(props) {
  const { classes } = props;
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <a href="https://liviupreda.me/">KTSRF</a>
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.addspot}>
          <Button variant="contained" color="primary">
            Add Spot
          </Button>
        </div>
        <div className={classes.signout}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Sign Out
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default withStyles(styles)(Navbar);
