import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Color from "./apps/Color";
import About from "./pages/About";
import FourOhFour from "./pages/404";
import Page from "./Page";
import Calendar from "./apps/Calendar";
import Unsubscribe from "./apps/Unsubscribe";
import Crm from "./apps/Crm";
import Links from "./apps/Links";

import "./App.css";
import client from "./apollo/client";

// import useStrapiTheme from "./hooks/useStrapiTheme";
// import useStrapiDefaultThemeId from "./hooks/useStrapiDefaultThemeId";
import useStrapiGlobal from "./hooks/useStrapiGlobal";

import { DefaultTheme, ColorModes } from "./Model";

const AppRoutes = () => {
  // const t2 = new Date();
  // const iso = t2.toISOString().split(".")[0] + "Z";

  const global = useStrapiGlobal();

  const themeId = 1; //useStrapiDefaultThemeId();
  // const storedTheme = useStrapiTheme(themeId);

  // if (storedTheme.theme) {
  //   storedTheme.theme.defaultThemeId = themeId;
  // }

  // const lTheme = storedTheme.theme;

  useEffect(() => {
    const jd = window.localStorage.getItem("jwt_date");
    if (!jd) {
      window.localStorage.removeItem("strapi_jwt");
      window.localStorage.removeItem("strapi_user");
    }

    if (new Date().getHours() - new Date(jd).getHours() > 0) {
      window.localStorage.removeItem("strapi_jwt");
      window.localStorage.removeItem("strapi_user");
    }

    return () => {};
  }, []);

  let theme = createTheme({ ...DefaultTheme });
  theme.global = global.attributes;
  theme.menuPosition = "top";
  theme.button = {
    ...theme.typography.button,
    // textTransform: "uppercase",
    textDecoration: "none",
    boxShadow: theme.shadows[2],
    borderRadius: 2,
    padding: 3,
    // margin: 5,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  };
  theme.label = {
    whiteSpace: "nowrap",
    // border: "1px solid",
    // borderColor: theme.palette.primary.main,
  };
  // console.log(theme.global);
  // useStrapiDefaultThemeId();
  //theme.feature = feature.attributes;
  //theme.access_token = access_token;
  theme.themeId = themeId;

  theme.color_modes = ColorModes;

  theme.bgCount = 0;
  delete theme.pages;
  let counter = 1;

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/page/ctdscalendar"
              element={<Calendar client={client} />}
            />
            <Route
              path="/ctdscalendar"
              element={<Calendar client={client} />}
            />
            <Route path="/page/:slug" element={<Page _slug="" />} />
            <Route path="/color" element={<Color />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/links" element={<Links />} />

            <Route path="/unsubscribe/:id" element={<Unsubscribe id="" />} />

            <Route path="/about" element={<About client={client} />} />

            <Route path="/404" element={<FourOhFour client={client} />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
