import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
        identifier: name,
        password: pwd,
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

  if (loggedIn) {
    return (
      <div
        title="Click to logout"
        style={{
          zIndex: theme.zIndex.tooltip + 1,
          position: "fixed",
          top: 2,
          right: 3,
        }}
        // onClick={logout}
      >
        <ConfirmButtons action={logout} icon=<LockOpen /> label="logout">
          Delete
        </ConfirmButtons>
      </div>
    );
  }
  if (showUi) {
    return (
      <div
        style={{
          zIndex: theme.zIndex.tooltip + 1,
          border: "1px solid black",
          position: "fixed",
          margin: "auto",
          top: 10,
          right: 10,
          height: 90,
          maxWidth: 380,
        }}
      >
        <div>
          <input
            width="100"
            placeholder="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
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
      </div>
    );
  }

  return (
    <button
      value="login"
      style={{
        backgroundColor: theme.palette.background.default,
        padding: 0,
        margin: 0,
        zIndex: theme.zIndex.tooltip + 1,
        color: theme.palette.info.contrastLight,
        position: "fixed",
        top: 2,
        right: 3,
      }}
      onClick={() => setShowUi(true)}
    >
      <Lock />
    </button>
  );
};

export default Login;
