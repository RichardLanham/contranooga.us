import React, { useEffect, useState } from "react";

import { GET_THEME } from "../gql/theme";
import { GET_THEMEIDS } from "../gql/theme";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";

const useStrapiTheme = (id) => {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  // THIS needs improvment. It only works right if there is one record in themes, which is okay for the moment.
  const { data, loading, error } = useQuery(GET_THEME, {
    client: client,
    variables: { id: id },
  });

  let latestTheme = {};
  if (!loading) {
    if (!error) {
      if (data.theme.data) {
        latestTheme.theme = JSON.parse(data.theme.data.attributes.theme);
        latestTheme.color_modes = JSON.parse(
          data.theme.data.attributes.color_modes
        );
      }
      // console.log(latestTheme);
    }
  }

  return latestTheme;
};

export default useStrapiTheme;
