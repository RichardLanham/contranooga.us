import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { StyledPageSection } from "../../../styles/PageStyles";
import Hero from "./Hero";

const Flex = ({ section }) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  }, []);

  const StyledBox = styled("div")(({ theme }) => ({
    width: theme.boxLength * 30 + "%",
    [theme.breakpoints.down("xl")]: {
      // padding: 0,
      // width: "45%",
      width: theme.boxLength * 40 + "%",
    },
    [theme.breakpoints.down("md")]: {
      // flexDirection: "row",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
    },
  }));

  return (
    <StyledPageSection
      style={{
        ...theme.flexRows,
        // border: "1px solid green",
        flexWrap: "wrap",
        gap: 10,
        alignContent: "center",
        justifyContent: "left",
      }}
    >
      {section.box.map((box, key) => {
        const bL = section.box.length % 4;
        //const boxWidth = Math.round(bL + 1 * 30) + "%";
        //console.log(boxWidth);
        theme.boxLength = bL === 0 ? 1 : bL;
        return (
          <StyledBox key={key}>
            <Hero section={box} />
          </StyledBox>
        );
      })}
    </StyledPageSection>
  );
};

export default Flex;
