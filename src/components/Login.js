import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { LockOpen, Lock } from "@mui/icons-material";
import axios from "axios";

import { eventEmitter } from "../events.tsx";

import ConfirmButtons from "../components/ConfirmButtons";

const Login = () => {
  const theme = useTheme();
  const login = (e) => {
    setShowUi(false);
    const url = process.env.REACT_APP_STRAPI_API + "/auth/local";
    axios
      .post(url, {
        identifier: theme.adminName,
        password: theme.adminPassword,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        window.localStorage.setItem("strapi_jwt", response.data.jwt);
        window.localStorage.setItem(
          "strapi_user",
          JSON.stringify(response.data.user)
        );
        setLoggedIn(true);
        theme.adminName = "";
        theme.adminPassword = "";
        eventEmitter.dispatch("REFRESH", true);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  useEffect(() => {
    if (window.localStorage.getItem("strapi_jwt")) {
      setUser(JSON.parse(window.localStorage.getItem("strapi_user")));
      setLoggedIn(true);
    }
  }, []);
  const logout = () => {
    window.localStorage.removeItem("strapi_jwt");
    window.localStorage.removeItem("strapi_user");
    //setJwt(null);

    setLoggedIn(false);
    eventEmitter.dispatch("REFRESH", false);
    // setUser(null);
  };
  const [showUi, setShowUi] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  // const [jwt, setJwt] = useState(null);
  const [user, setUser] = useState({ username: "" });

  const StyledLock = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: 0,
    margin: 0,
    zIndex: theme.zIndex.speedDial,
    color: theme.palette.info.contrastLight,
    position: "fixed",
    bottom: 3,
    right: 3,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      top: "unset",
      bottom: 0,
    },
  }));

  const StyledLogin = styled("div")(({ theme }) => ({
    zIndex: theme.zIndex.speedDial,
    border: "1px solid black",
    position: "fixed",
    margin: "auto",
    bottom: 10,
    right: 0,
    height: 90,
    // width: "100%",
    backgroundColor: theme.palette.background.default,
    maxWidth: 380,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      top: "unset",
      // bottom: 0,
    },
  }));

  if (loggedIn) {
    return (
      <div
        title="Click to logout"
        style={{
          zIndex: theme.zIndex.tooltip - 1,
          backgroundColor: theme.palette.background.default,
          color: "#000",
          position: "fixed",
          bottom: 2,
          right: 3,
        }}
        // onClick={logout}
      >
        <ConfirmButtons action={logout} icon={<LockOpen />} label="logout" />
      </div>
    );
  }
  if (showUi) {
    return (
      <StyledLogin>
        <div style={{ backgroundColor: theme.palette.background }}>
          <input
            width="100"
            placeholder="name"
            type="text"
            onChange={(e) => (theme.adminName = e.target.value)} //setName(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            placeholder="password"
            type="password"
            onChange={(e) => (theme.adminPassword = e.target.value)} //setName(e.target.value)}
          ></input>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "#fff", color: "#000" }}
            onClick={login}
          >
            login
          </Button>
          <Button
            style={{ backgroundColor: "#fff", color: "#000" }}
            onClick={() => setShowUi(false)}
          >
            cancel
          </Button>
        </div>
      </StyledLogin>
    );
  }

  return (
    <StyledLock value="login" onClick={() => setShowUi(true)}>
      <Lock />
    </StyledLock>
  );
};

export default Login;
