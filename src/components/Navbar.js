import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

function Navbar(props) {
  const { classes } = props;
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <a href="https://liviupreda.me/">KTSRF</a>
      </div>
      <div className={classes.signout}>
        <Link to="/">Sign Out</Link>
      </div>
    </header>
  );
}

export default withStyles(styles)(Navbar);
