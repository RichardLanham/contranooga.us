import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Button, Input, IconButton, Zoom } from "@mui/material";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import GoogleMapApp from "../../apps/GoogleMapApp";

import { GET_PAGE } from "../../gql/site";

import {
  StyledSubHead,
  StyledPageSection,
  StyledHeading,
  StyledBody1,
  StyledImgGroup,
  StyledImg,
  StyledImgCaption,
} from "../../styles/PageStyles";

import PledgeForm from "./PledgeForm";

import LargeVideo from "./sections/LargeVideo";

import { getThumb, createMarkup, getLarge } from "../../apps/functions";

import { POST_LEAD } from "../../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import CancelIcon from "@mui/icons-material/Cancel";

import ReactDOMServer from "react-dom/server";
// import { theme } from "../../assets/theme";

import RichEditor from "./Editor";

import PanToolAltTwoToneIcon from "@mui/icons-material/PanToolAltTwoTone";
import Fab from "@mui/material/Fab";

import FlexGroup from "./sections/FlexGroup";

const StyledWrap = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.dark,
  width: 300,
  top: 0,
  // backgroundColor: "yellow",
  padding: 10,
  margin: 10,
  // border: "4px solid black",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    // width: "calc(60% - 1rem)",
    // width: "45%",
  },
  [theme.breakpoints.down("md")]: {
    // width: "85%",
  },
}));

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const GoogleMap = ({ section }) => {
  const theme = useTheme();

  return (
    <div>
      {section.gmap.map((map, key) => {
        return (
          <div key={key} style={{ minHeight: 320 }}>
            <GoogleMapApp
              lat={map.lat}
              lng={map.lng}
              zoom={map.zoom}
              markerText={map.markerText}
              markerImage={map.markerImage}
              description={map.richtext}
            />
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <GoogleMapApp
  //     lat={section.gmap.lat}
  //     lng={section.gmap.lng}
  //     markerText={section.gmap.markerText}
  //     markerImage={section.gmap.markerImage}
  //     description={section.gmap.description}
  //   />
  // );
};
export const LeadForm = ({ section }) => {
  const theme = useTheme();
  const [name, setName] = useState(theme.leadFormName);
  const [phone, setPhone] = useState(theme.leadFormPhone);
  const [email, setEmail] = useState(theme.leadFormEmail);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState("none");
  const [postLead] = useMutation(POST_LEAD);

  const handleSubmit = async () => {
    await postLead({
      variables: {
        // name: theme.leadFormName,
        // email: theme.leadFormEmail,
        // phone: theme.leadFormPhone,
        name: name,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // console.log(err.message);
      });

    setOpen("thanks");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleCancel = () => {
    setOpen("");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const handleConfirm = () => {
    const isEmail = validateEmail(email);

    if (isEmail) {
      setOpen("confirm");
    } else {
      setMessage("bad email");
      setOpen("form");
    }
  };

  if (open === "thanks") {
    return (
      <StyledWrap>
        <div
          onMouseEnter={() => setOpen("none")}
          style={{ ...theme.typography.h4 }}
        >
          Thank you!
        </div>
      </StyledWrap>
    );
  }
  if (open === "confirm") {
    return (
      <StyledWrap>
        <div>Is this correct?</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <Button onClick={() => handleSubmit()} variant="contained" style={{}}>
          Yes!
        </Button>
        <Button onClick={() => setOpen("form")} variant="contained" style={{}}>
          Change
        </Button>
      </StyledWrap>
    );
  }

  if (open === "form") {
    return (
      <StyledWrap>
        <form>
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.primary.dark,
            }}
          >
            {message}
          </div>
          <Input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={section.namePlaceHolder}
            type="text"
          ></Input>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={section.emailPlaceHolder}
          ></Input>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={section.phonePlaceHolder}
            type="phone"
          ></Input>

          {section.blurb && (
            <div
              style={{
                ...theme.typography.caption,
                width: 300,
              }}
            >
              {section.blurb}
            </div>
          )}
          <Button onClick={() => handleConfirm()} variant="contained">
            subscribe
          </Button>
          <IconButton
            style={{ position: "absolute", top: 0, right: 0 }}
            variant="contained"
            onClick={() => handleCancel()}
          >
            <CancelIcon />
          </IconButton>
        </form>
      </StyledWrap>
    );
  }
  // const hand = require("../../assets/hand.png");
  return (
    <div
      style={{
        position: "relative",
        marginTop: 20,
        marginBottom: 30,
        width: 300,
        width: "fit-content",
      }}
    >
      <Fab
        onClick={() => setOpen("form")}
        style={{
          position: "absolute",
          right: -50,
          cursor: "pointer",

          // top: -15,
          // display: "inline",
          zIndex: theme.zIndex.fab,
          width: 35,
          height: 35,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          transform: "rotate(-0.25turn)",
          boxShadow: theme.shadows[3],
        }}
      >
        <PanToolAltTwoToneIcon />
      </Fab>

      {section.submitButton ? (
        <Button
          onClick={() => setOpen("form")}
          variant="outlined"
          style={{
            ...theme.typography.h6,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          {section.submitButton.text}
        </Button>
      ) : (
        <Button
          onClick={() => setOpen("form")}
          variant="outlined"
          style={{
            ...theme.typography.h6,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          {section.title}
        </Button>
      )}
    </div>
  );
};

const StyledRichText = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "left",
  // padding: "10px 10px 20px 20px",
  // borderRadius: 5,
  // margin: 5,
  // background: theme.palette.background.default,
  [theme.breakpoints.down("lg")]: {
    // padding: 0,
  },
  [theme.breakpoints.down("md")]: {},
}));

// const StyledVideoButtonGroup = styled("div")(({ theme }) => ({
//   border: "4px solid blue",
//   height: 400,
//   // margin: "auto",
//   gap: 3,
//   [theme.breakpoints.down("lg")]: {
//     // padding: 0,
//   },
//   [theme.breakpoints.down("md")]: {
//     // width: 300,
//   },
// }));

export const RichText = ({ section }) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  }, []);
  // {user ? <Editor content={section.content} /> : null}
  return (
    <StyledPageSection>
      {user ? (
        <RichEditor
          container={{
            content: section.content,
            field: "content",
            id: section.id,
            typename: section.__typename,
          }}
        />
      ) : null}
      <StyledRichText>
        <div dangerouslySetInnerHTML={createMarkup(section.content)}></div>
      </StyledRichText>
    </StyledPageSection>
  );
};

export const BottomActions = ({ section }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>{section.title}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row ",
          gap: 10,
        }}
      >
        {section.buttons.map((button, key) => {
          return (
            <Card
              key={key}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 5,
                // border: `1px solid ${theme.palette.secondary.light}`,
                maxWidth: 300,
              }}
            >
              {button.url.substr(0, 4) === "http" ? (
                <Button>
                  <a
                    target="_new"
                    href={button.url}
                    style={{ textDecoration: "none" }}
                  >
                    {button.text}
                  </a>
                </Button>
              ) : (
                <Link
                  target={button.newTab ? "_new" : "_self"}
                  style={{ textDecoration: "none" }}
                  to={button.url}
                >
                  <Button variant={button.variant}>{button.text}</Button>
                </Link>
              )}
              <div
                style={{
                  ...theme.typography.body2,
                  padding: 5,
                  margin: "auto",
                }}
              >
                {button.label}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const StyledFeaturesRowGroup = styled(Box)(({ theme }) => ({
  // backgroundColor: "purple",
  width: "90%",
  // width: "calc(90% - 1px)",
  // textAlign: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: 15,
  marginTop: 40,
  marginLeft: 50,
  [theme.breakpoints.down("lg")]: {
    // width: "70%",
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 10,

    // backgroundColor: "green",
  },
}));

const StyledFeaturesRow = styled(Card)(({ theme }) => ({
  ...theme.typography.caption,
  width: "calc(28%)",
  // minWidth: 200,
  margin: "auto",
  marginLeft: 10,
  textAlign: "center",
  border: `2px solid ${theme.palette.secondary.dark}`,
  // backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  //opacity: 0.9,
  borderRadius: 5,
  padding: 1,
  boxShadow: theme.shadows[8],
  "&:hover": {
    // backgroundColor: theme.palette.info.light,
    // color: theme.palette.info.contrastLight,
    opacity: 1,
  },
  [theme.breakpoints.down("xl")]: {
    width: "calc(40% - 1px)",
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
    width: "calc(44%)",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    width: "calc(100% - 1em)",
  },
}));

export const FeatureRowsGroup = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledFeaturesRowGroup>
        {section.features.map((feature, key) => {
          const thumb = feature.media.data
            ? getImageThumb(feature.media.data.attributes)
            : false;
          return (
            <StyledFeaturesRow key={key}>
              <Card
                style={{
                  ...theme.typography.h5,

                  color: theme.palette.primary.dark,

                  padding: 3,
                }}
              >
                {feature.title}
              </Card>
              <Card
                style={{
                  ...theme.typography.body2,

                  display: "inline",
                  color: theme.palette.primary.dark,

                  padding: 3,
                }}
              >
                {feature.description}
              </Card>
              <div>
                {thumb && (
                  <img
                    className="fade-in-image"
                    title={thumb.url}
                    style={{
                      // float: "left",
                      maxWidth: thumb.width,
                      height: "auto",
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                )}
              </div>
              {feature.link && (
                <Button
                  style={{
                    //maxHeight: 30,
                    boxShadow: theme.shadows[4],
                    margin: 5,
                    backgroundColor: theme.palette.info.main,
                    color: theme.palette.info.contrastText,
                  }}
                  variant="raised"
                >
                  {feature.link.newTab ? (
                    <a
                      href={feature.link.url}
                      target="_new"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.info.contrastText,
                      }}
                    >
                      {feature.link.text}
                    </a>
                  ) : (
                    <Link
                      key={"link" + key}
                      to={feature.link.url}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.info.contrastText,
                      }}
                    >
                      {feature.link.text}
                    </Link>
                  )}
                </Button>
              )}
            </StyledFeaturesRow>
          );
        })}
      </StyledFeaturesRowGroup>
    </StyledPageSection>
  );
};

// Below is seen as Page -> ContentSection -> "DeepTabs" in the Strapi UI
export const FeatureColumnsGroup = ({ section }) => {
  const theme = useTheme();
  const [slug, setSlug] = useState("");
  const [page, setPage] = useState([]);

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: slug, publicationState: "LIVE", locale: "en" },
  });

  useEffect(() => {
    if (!loading) {
      if (!error) {
        // console.log(data);
        setPage(data.pages.data);
      }
    }
  }, [slug, data]);

  const showTab = (e, tab) => {
    console.log(slug);
    e.preventDefault();
    setSlug(tab.slug);
  };
  const setpage = (e) => {
    e.preventDefault();
    console.log(slug);
    setSlug("");
    setPage([]);
  };
  const tabs_Thumb = getThumb(section?.tabs?.icon?.data?.attributes);
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginTop: 20,
            // border: "1px solid red",
          }}
        >
          <div>
            {section?.tabs?.homeTabType === "link" && (
              <a
                onClick={(e) => setpage(e)}
                name="HomeTabButton"
                style={{
                  ...theme.typography.h5,
                  textDecoration: "none",
                  backgroundColor: theme.palette.background.default,
                  padding: 3,
                  borderRadius: 15,
                  borderBottom: 20,
                  border: "1px solid blue",
                }}
                href="#"
              >
                {section.tabs.title}
              </a>
            )}
            {section?.tabs?.homeTabType === "button" && (
              <Button onClick={(e) => setpage(e)} variant="outline">
                {section?.tabs?.title}
              </Button>
            )}
            {section.tabs.homeTabType === "image" && (
              <a onClick={(e) => setpage(e)} href="#">
                <img src={process.env.REACT_APP_STRAPI + tabs_Thumb.url} />
              </a>
            )}
          </div>
          {section.tabs.tab.map((t, key) => {
            const tabThumb = getThumb(t.image?.data?.attributes);
            return (
              <div
                key={key}
                style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}
              >
                <div onClick={(e) => showTab(e, t)}>
                  {t.type === "button" ? (
                    <Button variant="outline">{t.label}</Button>
                  ) : t.type === "image" ? (
                    tabThumb && (
                      <a href="#">
                        <img
                          src={process.env.REACT_APP_STRAPI + tabThumb.url}
                        />
                      </a>
                    )
                  ) : (
                    <a
                      style={{
                        ...theme.typography.h5,
                        textDecoration: "none",
                        backgroundColor: theme.palette.background.default,
                        padding: 3,
                        borderRadius: 15,
                      }}
                      href="#"
                    >
                      {t.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {page.length === 0 && ( // render default content of section Tabs, no clicks
            <Zoom in={true}>
              <div>
                <pre style={{ display: "none" }}>
                  {JSON.stringify(section.inputs, null, 3)}
                </pre>
                {section.inputs && (
                  <div>
                    {section.inputs.map((input, key) => {
                      return (
                        <div key={key}>
                          {input.playlist && (
                            <div>
                              <LargeVideo section={input.playlist} />
                            </div>
                          )}

                          {input.richtext && (
                            <div
                              dangerouslySetInnerHTML={createMarkup(
                                input.richtext
                              )}
                            ></div>
                          )}
                          {input.googleMap && (
                            <div>
                              <GoogleMapApp
                                lat={input.googleMap.lat}
                                lng={input.googleMap.lng}
                                zoom={input.googleMap.zoom}
                                markerText={input.googleMap.markerText}
                                markerImage={input.googleMap.markerImage}
                                description={input.googleMap.richtext}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Zoom>
          )}
          {page.map((page, key) => {
            // render content of the clicked tab/page
            console.log(page);
            {
              const source = "/page/" + page.attributes.slug;

              const pageSrc = page?.attributes?.contentSections.map(
                (section, key) => {
                  // ComponentSections
                  switch (section.__typename.replace("ComponentSections", "")) {
                    case "GoogleMap":
                      return <GoogleMap key={key} section={section} />;
                    // case "LeadForm":
                    //   return <LeadForm key={key} section={section} />;
                    // case "FlexGroup":
                    //   return <FlexGroup key={key} section={section} />;
                    case "RichText":
                      return <RichText key={key} section={section} />;

                    // case "Hero":
                    //   return <Hero key={key} section={section} />;
                    // case "PageFeature":
                    //   return <Feature key={key} section={section} />;
                    // case "LargeVideo":
                    //   return <LargeVideo key={key} section={section} />;
                    // case "FeatureColumnsGroup":
                    //   return (
                    //     <FeatureColumnsGroup key={key} section={section} />
                    //   );
                    // case "FeatureRowsGroup":
                    //   return <FeatureRowsGroup key={key} section={section} />;
                    // case "BottomActions":
                    //   return <BottomActions key={key} section={section} />;
                    case "PledgeForm":
                      return (
                        <div key={key}>
                          <StyledPageSection>
                            <PledgeForm key={key} section={section} />
                          </StyledPageSection>
                        </div>
                      );
                    default:
                      return <></>;
                      break;
                  }
                }
              );
              // console.log(pagesrc[0]);
              const NewSrc = ReactDOMServer.renderToString(pageSrc);
              return <div key={key}>{pageSrc}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

const getImageThumb = (attribs) => {
  if (!attribs.formats) {
    return false;
  }
  if (attribs.formats.thumbnail) {
    return attribs.formats.thumbnail;
  }
  if (!attribs.formats.medium) {
    if (!attribs.formats.small) {
      return attribs.formats.thumbname;
    } else {
      return attribs.formats.small;
    }
  } else {
    return attribs.formats.medium;
  }
};

const getImage = (attribs) => {
  if (!attribs.formats) {
    return false;
  }
  if (attribs.formats.large) {
    return attribs.formats.large;
  }
  if (!attribs.formats.medium) {
    if (!attribs.formats.small) {
      return attribs.formats.thumbname;
    } else {
      return attribs.formats.small;
    }
  } else {
    return attribs.formats.medium;
  }
};
export const Feature = ({ section }) => {
  //const img = section.data.attr;
  const thumb = getImage(section.picture.data.attributes);
  // const thumb = section.picture.data.attributes.formats.thumbnail
  //thumb ? section.picture.data.attributes.formats.thumbnail : false;
  return (
    <StyledPageSection>
      <StyledHeading>{section.title}</StyledHeading>
      {section.richText && (
        <StyledBody1>
          <div dangerouslySetInnerHTML={createMarkup(section.richText)}></div>
        </StyledBody1>
      )}

      <StyledImgGroup>
        {thumb && (
          <StyledImg
            title={thumb.url}
            style={
              {
                //float: "left",
              }
            }
            src={process.env.REACT_APP_STRAPI + thumb.url}
          />
        )}
        <StyledImgCaption>{section.caption}</StyledImgCaption>
      </StyledImgGroup>
    </StyledPageSection>
  );
};
