import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.nav}>
      <p className="Logout">Logout</p>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
