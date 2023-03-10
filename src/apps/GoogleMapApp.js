import GoogleMapReact from "google-map-react";
import { useTheme, styled } from "@mui/material/styles";
import { getThumb } from "./functions";

const img = require("../assets/mapmarker.gif");

const StyledRichText = styled("div")(({ theme }) => ({
  width: 300,
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down("lg")]: {
    // padding: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const GoogleMap = ({
  lat,
  lng,
  markerText,
  markerImage,
  description,
  zoom,
}) => {
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

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div style={{ ...theme.flexRows, gap: 10 }}>
      <div style={{ width: 320, height: 320 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
          defaultCenter={center}
          defaultZoom={zoom ? zoom : 16}
        >
          <MapMarker lat={lat} lng={lng} text={markerText} />
        </GoogleMapReact>
      </div>
      <StyledRichText
        dangerouslySetInnerHTML={createMarkup(description)}
      ></StyledRichText>
    </div>
  );
};

export default GoogleMap;
