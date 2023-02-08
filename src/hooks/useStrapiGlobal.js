import React, { useEffect, useState } from "react";

import { GLOBAL } from "../gql/site";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";
// FOR REFERENCE, a pattern, not is use; it was folded into useStrapiTheme.
const useStrapiGlobal = () => {
  let global = {};
  const { data, loading, error } = useQuery(GLOBAL, { client: client });
  if (!loading) {
    if (!error) {
      global = data.global.data;
    }
  }
  return global;
};

export default useStrapiGlobal;
