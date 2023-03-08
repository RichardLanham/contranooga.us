import React, { useEffect, useState } from "react";

import { GET_UPLOADS_LIST } from "../gql/site";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";
// FOR REFERENCE, a pattern, not is use; it was folded into useStrapiTheme.
const useGetUploads = () => {
  let ret = [];
  console.log("GETUPOADs");
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  //let themeId = 0;
  const { data, loading, error } = useQuery(GET_UPLOADS_LIST, {
    client: client,
  });
  if (!loading) {
    if (!error) {
      window.localStorage.setItem("StrapiPages", JSON.stringify(data));

      // dt.map((d) => {
      //   ret.push({ route: d.attributes.route, slug: d.attributes.slug });
      // });
      return data;
    }
  }
  return ret;
};

export default useGetUploads;
