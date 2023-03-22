import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

// Three uses, has to stay here. shows on every page SITE NAME sitename Site Name
export const StyledSiteName = styled("div")(({ theme }) => ({
  ...theme.typography.h4,
  fontSize: "2.5vw",
  width: "fit-content",
  blockSize: "fit-content",
  // opacity: ".75",
  marginTop: 60,
  borderRadius: 5,
  padding: 3,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down("xl")]: {
    fontSize: "3vw",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "3.2vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3.8vw",
  },
  [theme.breakpoints.down("sm")]: {
    left: 20,
    fontSize: "5vw",
  },
}));
// on /Page.js
export const StyledCalendarPage = styled("div")(({ theme }) => ({
  position: "relative",
  width: theme.menuPosition === "side" ? "calc(70% - 1px)" : "95vw",
  marginRight: "auto",
  padding: 30,
  marginTop: 110,
  borderRadius: 10,
  zIndex: 0,
  // minHeight: 1200,

  [theme.breakpoints.down("xl")]: {
    width: theme.menuPosition === "side" ? "calc(65% - 1px)" : "90vw",
  },
  [theme.breakpoints.down("lg")]: {
    //width: theme.menuPosition === "side" ? "calc(85% - 1px)" : "60vw",
    width: "90vw",
    padding: 10,
    // width: "calc(85% - 1px)",
    // marginTop: 140,
  },
  [theme.breakpoints.down("md")]: {
    width: "95vw",
    // width: "calc(95% - 1rem)",
    marginTop: 40,
  },
  [theme.breakpoints.down("sm")]: {
    width: "98vw",
    // width: "calc(95% - 1rem)",
    marginTop: 10,
  },
}));
export const StyledPage = styled("div")(({ theme }) => ({
  position: "relative",
  width: theme.menuPosition === "side" ? "calc(70% - 1px)" : "55vw",
  marginRight: "auto",
  padding: 30,
  marginTop: 110,
  borderRadius: 10,
  zIndex: 0,
  // minHeight: 1200,

  [theme.breakpoints.down("xl")]: {
    width: theme.menuPosition === "side" ? "calc(65% - 1px)" : "70vw",
  },
  [theme.breakpoints.down("lg")]: {
    //width: theme.menuPosition === "side" ? "calc(85% - 1px)" : "60vw",
    width: "90vw",
    padding: 10,
    // width: "calc(85% - 1px)",
    // marginTop: 140,
  },
  [theme.breakpoints.down("md")]: {
    width: "95vw",
    // width: "calc(95% - 1rem)",
    marginTop: 40,
  },
  [theme.breakpoints.down("sm")]: {
    width: "98vw",
    // width: "calc(95% - 1rem)",
    marginTop: 10,
  },
}));
export const StyledPageSection = styled("div")(({ theme }) => ({
  // width: "calc(95% - 1px)",
  // width: "fit-content",
  // blockSize: "fit-content",
  marginRight: "auto",

  borderRadius: 10,
  padding: 0,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: 0,
  },
}));
// Used in page/CompnentSections
export const StyledHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  width: "fit-content",
  marginBottom: 5,
  marginRight: "auto",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,

  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("lg")]: {},
}));

// One use n page/CompnentSections
export const StyledSubHead = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  margin: "auto",
  marginBottom: 5,
  boxShadow: theme.shadows[4],
  opacity: 1,
  borderRadius: 5,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledBody1 = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  width: "calc(95% - 1px)",
  textAlign: "left",
  padding: "5px 20px 10px 20px",
  margin: "auto",
  marginBottom: 10,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 2em)",
  },
}));

export const StyledImgGroup = styled("div")(({ theme }) => ({
  width: "calc(95% - 1px)",
  padding: "5px 20px 10px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  textAlign: "center",
  borderRadius: 5,
  paddingBottom: 5,
  margin: "auto",
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.default,
  borderRadius: 5,
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 2em)",
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    maxWidth: 400,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
}));

export const StyledImgCaption = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  width: "80%",
  backgroundColor: theme.palette.info.dark,
  color: theme.palette.info.contrastDark,
  boxShadow: theme.shadows[24],
  background: `linear-gradient(45deg, ${theme.palette.grey[100]}, ${theme.palette.grey[200]}, ${theme.palette.info.light})`,
  color: "#009",
  borderRadius: 5,
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "16em",
  },
  [theme.breakpoints.down("md")]: {},
}));
