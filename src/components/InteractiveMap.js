// import React from "react";
// import Helpers from "./Helpers";
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import { withStyles } from "@material-ui/core/styles";
// import styles from "../styles/InteractiveMapStyles";

// function InteractiveMap(props) {
//   const API_KEY = "AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo";
//   const API_URL = `https://maps.googleapis.com/maps/api/js?key={${API_KEY}}&callback=initMap`;

//   return (
//     <div className="map">
//       <Map
//         google={props.google}
//         zoom={8}
//         initialCenter={{ lat: 47.444, lng: -122.176 }}
//       />
//     </div>
//   );
// }

// export default withStyles(styles)(InteractiveMap);

import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "90vh",
  height: "45vh"
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
