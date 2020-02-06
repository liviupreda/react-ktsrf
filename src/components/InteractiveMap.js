import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100vw",
  height: "40vh",
  marginBottom: "2rem"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={{
            lat: 41.3851,
            lng: 2.1734
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAFR9ohystEpVf1UyEPad9Mfh56S3-R6Qo"
})(MapContainer);
