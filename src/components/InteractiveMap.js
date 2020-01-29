import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/UserHomeStyles";

const mapStyles = {
  width: "90vh",
  height: "30vh"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo"
})(MapContainer);
