import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import axios from "axios";

import Home from "./pages/Home";
import Color from "./apps/Color";
import About from "./pages/About";
import FourOhFour from "./pages/404";
import Page from "./Page";
import Calendar from "./apps/Calendar";

import "./App.css";
import client from "./apollo/client";

import useStrapiTheme from "./hooks/useStrapiTheme";
import useStrapiDefaultThemeId from "./hooks/useStrapiDefaultThemeId";
import useStrapiGlobal from "./hooks/useStrapiGlobal";

const AppRoutes = () => {
  // console.log("AppRoutes");

  const t2 = new Date();
  const iso = t2.toISOString().split(".")[0] + "Z";

  const global = useStrapiGlobal();

  const themeId = useStrapiDefaultThemeId();
  const storedTheme = useStrapiTheme(themeId);

  if (storedTheme.theme) {
    storedTheme.theme.defaultThemeId = themeId;
  }

  const lTheme = storedTheme.theme;

  //  const [strapiTheme] = useState({});

  //const [access_token] = useState("");

  useEffect(async () => {
    document.body.addEventListener("fooAction", function (e) {
      // something that does nothing
    });

    const jd = window.localStorage.getItem("jwt_date");
    // console.log(jd);
    // if (new Date() - jd)
    if (!jd) {
      window.localStorage.removeItem("strapi_jwt");
      window.localStorage.removeItem("strapi_user");
    }

    if (new Date().getHours() - new Date(jd).getHours() > 0) {
      window.localStorage.removeItem("strapi_jwt");
      window.localStorage.removeItem("strapi_user");
    }
    // window.localStorage.removeItem("strapi_jwt");
    // window.localStorage.removeItem("strapi_user");

    // await axios
    //   .get(
    //     "https://graph.facebook.com/oauth/access_token?redirect_uri=/&client_id=1090456631543887&client_secret=e9acc052e7518bf762ffd0573598733b&grant_type=client_credentials"
    //   )
    //   .then((resp) => {
    //     console.log(resp.data.access_token);
    //     // setAccess_token(resp.data.access_token);
    //     setAccess_token(
    //       "EAAPfw7gqiE8BABfm8ZClked38glbRCq4rHJKIdnO6M6FhcMHxx9xR5xTyYTcJuojnoeklS3tE5sQc64PDxzSXf4ErQUmz9rIMxWYSPwUdoG50mNTajgI2H1GFiZAXeToMuwUMaT35YFKO8jUHWFIvOLhWFzowVDPTz0QZBoGq0DeuJC7axGkh16pIRP38wZD"
    //     );
    //   })
    //   .catch((err) => {});
    // window.FB.getLoginStatus(function (response) {
    //   //if (response.status === "connected") {
    //   // var accessToken = response.authResponse.accessToken;
    //   //console.log(accessToken);
    //   //theme.accessToken = accessToken;
    //   // }
    // });

    // const sj = window.localStorage.getItem("strapi_jwt");
    // const su = window.localStorage.getItem("strapi_user");
    // localStorage.clear();
    // if (sj !== null) {
    //   window.localStorage.setItem("strapi_jwt", sj);
    //   window.localStorage.setItem("strapi_user", su);
    // }
    return () => {};
  }, []);

  let theme = createTheme({ ...lTheme });
  theme.global = global.attributes;
  console.log(theme.global);
  useStrapiDefaultThemeId();
  //theme.feature = feature.attributes;
  //theme.access_token = access_token;
  theme.themeId = themeId;

  theme.color_modes = storedTheme.color_modes;

  theme.bgCount = 0;
  delete theme.pages;
  let counter = 1;
  const switchBg = () => {
    document.body.style.backgroundImage =
      "url('/images/bgimages/bg" + counter + ".png')";

    counter++;
    if (counter > 14) {
      counter = 1;
    }
  };
  useEffect(() => {
    // document.body.style.backgroundImage =
    //   "url('/images/bgimages/bg" +
    //   Math.round(Math.random() * (14 - 1) + 1) +
    //   ".png')";
    // document.body.style.transition = "all 2s";
    // const bgInterval = setInterval(switchBg, 10000);
    // return () => {
    //   clearInterval(bgInterval);
    // };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/page/:slug" element={<Page _slug="" />} />
            <Route path="/color" element={<Color />} />

            <Route path="/about" element={<About client={client} />} />
            <Route path="/cal" element={<Calendar client={client} />} />

            <Route path="/404" element={<FourOhFour client={client} />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
