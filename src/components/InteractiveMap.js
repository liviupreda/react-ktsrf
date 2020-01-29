import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/InteractiveMapStyles";

function InteractiveMap(props) {
  const API_KEY = "AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo";
  const API_URL = `https://maps.googleapis.com/maps/api/js?key={${API_KEY}}&callback=initMap`;

  return (
    <div className="map">
      <p>Interactive Google Maps</p>
    </div>
  );
}

export default withStyles(styles)(InteractiveMap);
