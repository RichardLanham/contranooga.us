import React from "react";
import { useTheme, styled } from "@mui/material/styles";

import { StyledSiteName } from "../../styles/PageStyles";

const PageHeader = ({ metaTitle }) => {
  const theme = useTheme();

  const StyledHeader = styled("div")(({ theme }) => ({
    ...theme.typography.h4,
    fontSize: "2.6vw",
    width: "fit-content",
    blockSize: "fit-content",
    marginTop: 190,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down("xl")]: {
      fontSize: "3.1vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3.3vw",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 60,
      fontSize: "4.2vw",
    },
    [theme.breakpoints.down("sm")]: {
      left: 20,
      fontSize: "6vw",
      marginTop: 60,
    },
  }));

  return (
    <div>
      <StyledHeader>{metaTitle}</StyledHeader>
    </div>
  );
};

export default PageHeader;
