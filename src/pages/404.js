import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
// import { Link } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../Site";
// import { useLocation } from "react-router-dom";

import {
  StyledPageContent,
  StyledPage,
  StyledHeading,
  StyledBody,
} from "../styles/ComponentStyles";

// import { movies } from "../Model";
// import { moveSyntheticComments } from "typescript";

const About = () => {
  const theme = useTheme();

  useEffect(() => {
    window.FB.api(
      "/682575135113888/live_videos",
      "GET",
      {
        fields:
          "fields=status,id,permalink_url,video{updated_time,description}",
        limit: 2,
        access_token:
          "EAAPfw7gqiE8BABfm8ZClked38glbRCq4rHJKIdnO6M6FhcMHxx9xR5xTyYTcJuojnoeklS3tE5sQc64PDxzSXf4ErQUmz9rIMxWYSPwUdoG50mNTajgI2H1GFiZAXeToMuwUMaT35YFKO8jUHWFIvOLhWFzowVDPTz0QZBoGq0DeuJC7axGkh16pIRP38wZD",
      },
      function (response) {
        //    console.log(response);
        response.data.map((video) => {
          console.log(video);
        });
        // Insert your code here
      }
    );
  }, []);

  const StyledAnchor = styled("a")(({ theme }) => ({
    // backgroundColor: theme.palette.background.default,
    ...theme.typography.overline,
    margin: 3,
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.info.contrastDark,
    textDecoration: "none",
    padding: 1,
    [theme.breakpoints.down("md")]: {},
  }));

  return (
    <Site title="About">
      <StyledPage>
        <StyledBody style={{ textAlign: "left" }}>
          <div
            style={{
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Not Found
          </div>
        </StyledBody>
      </StyledPage>
    </Site>
  );
};

export default About;
