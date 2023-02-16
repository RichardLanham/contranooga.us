import React from "react";
import GoogleMapReact from "google-map-react";
// import RoomIcon from "@mui/icons-material/Room";
import { useTheme } from "@mui/material/styles";
const img = require("../assets/mapmarker.gif");

// <RoomIcon style={{ width: 60, height: "auto" }} lat={lat} lng={lng} />
const GoogleMap = ({ lat, lng, marker }) => {
  const theme = useTheme();
  const center = {
    lat: lat,
    lng: lng,
  };

  const MapMarker = ({ text }) => (
    <div>
      <img style={{ width: 60, height: "auto" }} src={img} />
      <h3>{text}</h3>
    </div>
  );

  return (
    <div style={{ width: 320, height: 320 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
        defaultCenter={center}
        defaultZoom={16}
      >
        <MapMarker lat={lat} lng={lng} text={marker} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
