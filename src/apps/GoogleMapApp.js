import GoogleMapReact from "google-map-react";
import { useTheme, styled } from "@mui/material/styles";
import { getThumb } from "./functions";

const GoogleMap = ({ lat, lng, markerText, markerImage, zoom }) => {
  const theme = useTheme();
  const thumb = getThumb(markerImage?.data?.attributes);
  // console.log(thumb);
  const center = {
    lat: lat,
    lng: lng,
  };

  const MapMarker = ({ text }) => (
    <div>
      {thumb && (
        <img
          style={{ width: 40, height: "auto", borderRadius: 500 }}
          src={process.env.REACT_APP_STRAPI + thumb.url}
        />
      )}
      <h3>{text}</h3>
    </div>
  );

  return (
    <div
      style={{
        width: 280,
        height: 280,
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom ? zoom : 16}
      >
        <MapMarker lat={lat} lng={lng} text={markerText} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
