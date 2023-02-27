import React, { useEffect, useState } from "react";
// import { useTheme } from "@mui/material/styles";
import { GET_THEMES } from "../gql/theme";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";
// import { useTheme } from "@mui/material/styles";
// FOR REFERENCE, a pattern, not is use; it was folded into useStrapiTheme.
const useStrapiDefaultThemeId = () => {
  // const theme = useTheme();
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  let themeId = 0;
  const { data, loading, error } = useQuery(GET_THEMES, { client: client });
  if (!loading) {
    if (!error) {
      // console.log(data);
      const tids = data.themes.data;

      // const themeNames = data.themes.data.map(
      //   (t, key, data) => t.attributes.name
      // );
      // theme.themeNames = themeNames;
      const defaultTheme = tids.find((t) => t.attributes.name === "default");
      const recentTheme = tids[tids.length - 1];
      themeId = defaultTheme ? defaultTheme.id : recentTheme.id;
      window.localStorage.setItem("themeId", themeId);
      // theme.defaultThemeId = themeId;
      // console.log(recentTheme);
    }
  }

  return themeId;
};

export default useStrapiDefaultThemeId;
