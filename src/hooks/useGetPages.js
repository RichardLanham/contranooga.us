import React, { useEffect, useState } from "react";

import { GET_PAGE_SLUGS } from "../gql/site";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";
// FOR REFERENCE, a pattern, not is use; it was folded into useStrapiTheme.
const useGetPages = () => {
  // console.log("getpages");
  let ret = [];
  // console.log("GETPAGES");
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  //let themeId = 0;
  const { data, loading, error } = useQuery(GET_PAGE_SLUGS, { client: client });
  if (!loading) {
    if (!error) {
      window.localStorage.setItem("StrapiPages", JSON.stringify(data));
      const dt = data.pages.data;
      // dt.map((d) => {
      //   ret.push({ route: d.attributes.route, slug: d.attributes.slug });
      // });
      return data;
    }
  }
  return ret;
};

export default useGetPages;
