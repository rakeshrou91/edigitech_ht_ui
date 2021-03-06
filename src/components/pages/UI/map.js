import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "auto",
  height: "auto",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts",
})(MapContainer);
