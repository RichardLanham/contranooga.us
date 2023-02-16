import React from "react";
import { useTheme, styled } from "@mui/material/styles";

import { StyledSiteName } from "../../styles/PageStyles";

const SiteHeader = ({ metaTitle }) => {
  const theme = useTheme();

  const StyledHeader = styled("div")(({ theme }) => ({
    ...theme.typography.h3,
    // opacity: ".1",
    width: "calc(50% - 1px)",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 5,
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("xl")]: {
      marginTop: 15,
    },
    [theme.breakpoints.down("lg")]: {
      left: 50,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      left: 8,
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  }));

  return (
    <div>
      <StyledSiteName>{theme.global.metadata.metaDescription}</StyledSiteName>
      <StyledHeader>{metaTitle}</StyledHeader>
    </div>
  );
};

export default SiteHeader;
