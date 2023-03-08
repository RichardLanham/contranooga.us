import React from "react";
import { GET_EVENTS } from "../gql/events";
import { useQuery } from "@apollo/client";
import client from "../apollo/client";

const useGetEvents = (props) => {
  console.log(props);
  const { data, loading, error } = useQuery(GET_EVENTS, {
    client: client,
    variables: { dt: iso, to: isoTo },
  });

  let ret = {};
  if (!loading) {
    if (!error) {
      ret.events = JSON.parse(data.events.data);

      console.log(ret);
    }
  }

  return ret;
};

export default useGetEvents;
