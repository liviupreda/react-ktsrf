import React from "react";
import Navbar from "./Navbar";
import SpotSearchForm from "./SpotSearchForm";
import SpotsList from "./SpotsList";
import InteractiveMap from "./InteractiveMap";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/UserHomeStyles";

function UserHome(props) {
  const { classes } = props;
  return (
    <div className={classes.userHomeContainer}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.map}>
        <InteractiveMap />
      </div>
      <div className={classes.form}>
        <SpotSearchForm />
      </div>
      <div className={classes.table}>
        <SpotsList />
      </div>
    </div>
  );
}

export default withStyles(styles)(UserHome);
