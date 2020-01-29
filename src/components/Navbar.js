import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

const Navbar = () => {
  return (
    <nav>
      <p>Logout</p>
    </nav>
  );
};

export default withStyles(styles)(Navbar);
