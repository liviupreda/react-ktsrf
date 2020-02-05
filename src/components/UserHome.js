import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import EnhancedTable from "./SortableTable";
import InteractiveMap from "./InteractiveMap";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/UserHomeStyles";

function UserHome(props) {
  const { classes, apiUrl, setRoute, setIsLoggedIn } = props;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchSpotData();
  }, []);

  async function fetchSpotData() {
    const res = await axios.get(apiUrl + "/spot");
    setRows(res.data);
    console.log(res.data.length);
  }

  return (
    <div className={classes.userHomeContainer}>
      <div className={classes.appbar}>
        <PrimarySearchAppBar
          setRoute={setRoute}
          setIsLoggedIn={setIsLoggedIn}
          apiUrl={apiUrl}
        />
      </div>
      <div className={classes.map}>
        <InteractiveMap />
      </div>
      <div className={classes.table}>
        <EnhancedTable rows={rows} apiUrl={apiUrl} />
      </div>
    </div>
  );
}

export default withStyles(styles)(UserHome);
