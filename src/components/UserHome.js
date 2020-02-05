import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import SpotSearchForm from "./SpotSearchForm";
import SpotsList from "./SpotsList";
import EnhancedTable from "./SortableTable";
import InteractiveMap from "./InteractiveMap";
import PageFooter from "./PageFooter";
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
  }

  return (
    <div className={classes.userHomeContainer}>
      <div className={classes.appbar}>
        <PrimarySearchAppBar
          setRoute={setRoute}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
      <div className={classes.map}>
        <InteractiveMap />
      </div>
      <div className={classes.table}>
        <EnhancedTable rows={rows} />
      </div>
    </div>
  );
}

export default withStyles(styles)(UserHome);
