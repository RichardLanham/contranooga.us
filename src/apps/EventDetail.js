import { useEffect, useState } from "react";
import { Button, Zoom } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";

import { createMarkup, getThumb, getLarge } from "../apps/functions";

import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../gql/events";

import GoogleMapApp from "./GoogleMapApp";

const StyledCard = styled("div")(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
  position: "fixed",
  left: "25%",
  //   width: "fit-content",
  //   maxWidth: 600,
  height: "fit-content",
  maxHeight: 400,
  overflowY: "scroll",
  overflowX: "clip",
  zIndex: 5000,
  backgroundColor: theme.palette.background.default,
  // display: "inline",
  [theme.breakpoints.down("xl")]: {
    left: "35%",
  },
  [theme.breakpoints.down("lg")]: {
    left: "50%",
    maxWidth: "40hw",
  },
  [theme.breakpoints.down("md")]: {
    // left: "40%",
    maxWidth: 300,
  },
  [theme.breakpoints.down("sm")]: {
    width: 340,
    left: 5,
  },
  [theme.breakpoints.down("sm")]: {
    top: 170,
    width: "100hw",
    left: 0,
  },
}));

const EventDetail = ({ showDetail, current, setCurrent }) => {
  const theme = useTheme();
  const [loader, setLoader] = useState(false);
  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: { id: current?.event?.id },
  });

  const [thumb, setThumb] = useState(false);
  const [large, setLarge] = useState(false);
  useEffect(() => {
    if (error) {
      console.log(error);
      // setCurrent({ name: error.message });
    }
    if (loading) {
      console.log("loading");
      setLoader(true);
    }
    if (data) {
      setLoader(false);
      let cur = Object.assign({}, data?.event?.data?.attributes);
      cur.id = data?.event?.data?.id;
      console.log(data);
      setCurrent(cur);
    }
  }, [loading, data, error]);

  useEffect(() => {
    setThumb(getThumb(current?.image?.data?.attributes));
    setLarge(getLarge(current?.image?.data?.attributes));
  }, [data]);

  console.log(thumb);
  return (
    <div>
      <Zoom in={true}>
        <StyledCard>
          <div style={{ display: loader ? "none" : "block" }}>Loading</div>
          <Button onClick={() => setCurrent({ empty: true })}>close</Button>
          <div>
            <div style={{ ...theme.typography.h5 }}>{current?.name}</div>
            <div
              style={{ ...theme.typography.body1 }}
              dangerouslySetInnerHTML={createMarkup(current?.body)}
            ></div>
            <div style={{ ...theme.flexRows, gap: 10 }}>
              {current?.link && (
                <div>
                  {current.link[0]?.url.indexOf("http") === 0 ? (
                    <a target="_new" href={current.link[0]?.url}>
                      {current.link[0].description || current.link[0].url}
                    </a>
                  ) : (
                    <Link to={"/page/" + current.link[0]?.slug}>
                      {current.link[0]?.description || current.link[0]?.slug}
                    </Link>
                  )}
                </div>
              )}

              {current?.web_url && (
                <div>
                  <a target="_new" href={current.web_url}>
                    {current?.link_label || current?.link_description}
                  </a>
                </div>
              )}
              {current?.image_url && (
                <div>
                  <img
                    style={{ maxWidth: 180, height: "auto" }}
                    src={current?.image_url}
                  />
                </div>
              )}
              {thumb && (
                <div>
                  <img
                    className="fade-in-image"
                    style={{ maxWidth: large.width, height: "auto" }}
                    onClick={(e) =>
                      (e.currentTarget.src =
                        process.env.REACT_APP_STRAPI + large.url)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src =
                        process.env.REACT_APP_STRAPI + thumb.url)
                    }
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                </div>
              )}

              <div>
                {current.street && (
                  <div>
                    <div style={{ ...theme.typography.h6 }}>location</div>
                    <div style={{ ...theme.flexRows, gap: 5 }}>
                      {current.street && <div>{current.street}</div>}
                      {current.city && <div>{current.city}</div>}
                      {current.state && <div>{current.state}</div>}
                      {current.zip && <div>{current.zip}</div>}
                    </div>
                  </div>
                )}
                {current?.lat && current?.lng && (
                  <div>
                    <GoogleMapApp
                      markerText={current.name}
                      markerImage={<img />}
                      description={""}
                      lat={current.lat}
                      lng={current.lng}
                      zoom={14}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <pre style={{ display: "none" }}>
            {JSON.stringify(current, null, 3)}
          </pre>
        </StyledCard>
      </Zoom>
    </div>
  );
};

export default EventDetail;
