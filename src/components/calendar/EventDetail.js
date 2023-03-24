import { useEffect, useState } from "react";
import { Zoom } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import { createMarkup, getThumb, getLarge } from "../../apps/functions";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../../gql/events";
import GoogleMapApp from "../../apps/GoogleMapApp";
import CloseIcon from "@mui/icons-material/Close";

const StyledCard = styled("div")(({ theme }) => ({
  // zIndex: 5000,
  position: "fixed",
  left: 650,
  top: 300,
  minHeight: 200,
  minWidth: 500,
  overflowY: "scroll",
  overflowX: "hidden",
  zIndex: 5000,
  backgroundColor: theme.palette.grey[200],
  boxShadow: theme.shadows[9],
  borderRadius: 15,
  padding: 5,
  [theme.breakpoints.down("xl")]: {
    left: "50%",
  },
  [theme.breakpoints.down("lg")]: {
    left: "50%",
    maxWidth: "40hw",
    minWidth: 300,
  },

  [theme.breakpoints.down("md")]: {
    top: 60,
    left: 3,
    width: "95vw",
  },
}));

const EventDetail = ({ currentID }) => {
  const theme = useTheme();
  const [loader, setLoader] = useState(false);

  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: { id: currentID },
  });

  const [current, setCur] = useState(false);

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
      setCur(cur);
    }
  }, [loading, data, error]);

  useEffect(() => {
    setThumb(getThumb(current?.image?.data?.attributes));
    setLarge(getLarge(current?.image?.data?.attributes));
  }, [current]);

  console.log(thumb);
  console.log(large);

  if (!current) {
    return <div>Wait</div>;
  }
  return (
    <Zoom in={true}>
      <div style={{ position: "relative" }}>
        <StyledCard>
          <div style={{ display: loader ? "none" : "none" }}>Loading</div>
          <CloseIcon
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: 32,
            }}
            onClick={() => setCur("")}
          >
            close
          </CloseIcon>
          <div
            style={{
              ...theme.flexRows,
              gap: 8,
              maxWidth: 500,
            }}
          >
            <div style={{ ...theme.typography.h5 }}>{current?.name}</div>
            <div
              style={{ ...theme.typography.body1 }}
              dangerouslySetInnerHTML={createMarkup(current?.body)}
            ></div>
            <div style={{ ...theme.flexRows, gap: 10 }}>
              {current?.link && (
                <div>
                  {current.link?.url.indexOf("http") === 0 ? (
                    <a target="_new" href={current.link?.url}>
                      {current.link.text || current.link.url}
                    </a>
                  ) : (
                    <Link to={"/page/" + current.link?.slug}>
                      {current.link?.text || current.link?.slug}
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

              <div>
                {current.street && (
                  <div style={{ ...theme.flexRows, gap: 5 }}>
                    <div style={{ ...theme.typography.h6 }}>location</div>
                    <div style={{ ...theme.flexRows, gap: 5 }}>
                      {current.street && <div>{current.street}</div>}
                      {current.city && <div>{current.city}</div>}
                      {current.state && <div>{current.state}</div>}
                      {current.zip && <div>{current.zip}</div>}
                    </div>
                  </div>
                )}
                {current?.lat !== 0 && current?.lng !== 0 && (
                  <div style={{ display: "block" }}>
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
              {current?.image_url && (
                <div>
                  <img
                    style={{ maxWidth: 180, height: "auto" }}
                    src={current?.image_url}
                  />
                </div>
              )}
              {large && (
                <div>
                  <img
                    className="fade-in-image"
                    style={{
                      maxWidth: large?.width,
                      height: "auto",
                      float: "right",
                    }}
                    onClick={(e) =>
                      (e.currentTarget.src =
                        process.env.REACT_APP_STRAPI + large?.url)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src =
                        process.env.REACT_APP_STRAPI + thumb?.url)
                    }
                    src={process.env.REACT_APP_STRAPI + thumb?.url}
                  />
                </div>
              )}

              {!large && thumb && (
                <div>
                  <img
                    className="fade-in-imagex"
                    style={{
                      maxWidth: large?.width,
                      height: "auto",
                      float: "right",
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb?.url}
                  />
                </div>
              )}
            </div>
          </div>
          <pre style={{ display: "none" }}>
            {JSON.stringify(current, null, 3)}
          </pre>
        </StyledCard>
      </div>
    </Zoom>
  );
};

export default EventDetail;
