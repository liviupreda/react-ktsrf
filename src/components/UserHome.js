import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SpotSearchForm from "./SpotSearchForm";
import SpotsList from "./SpotsList";
import InteractiveMap from "./InteractiveMap";
import PageFooter from "./PageFooter";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/UserHomeStyles";

const API_URL = "https://5e3064ed576f9d0014d63faf.mockapi.io";

function UserHome(props) {
  const { classes } = props;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(API_URL + "/spot");
    setRows(response.data);
  }

  return (
    <div className={classes.userHomeContainer}>
      {/* <div className={classes.navbar}>
        <Navbar />
      </div> */}
      <div className={classes.appbar}>
        <PrimarySearchAppBar />
      </div>
      <div className={classes.map}>
        <InteractiveMap />
      </div>
      {/* <div className={classes.form}>
        <SpotSearchForm />
      </div> */}
      <div className={classes.table}>
        <SpotsList spots={rows} />
      </div>
    </div>
  );
}

export default withStyles(styles)(UserHome);
