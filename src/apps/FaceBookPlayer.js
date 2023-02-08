import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Button } from "@mui/material";
import { theme } from "../assets/theme";
import { GET_VIDEOS } from "../gql/site";

import { useQuery } from "@apollo/client";
import client from "../apollo/client";

import axios from "axios";

// import {
//   isPushNotificationSupported,
//   sendNotification,
//   initializePushNotifications,
//   registerServiceWorker,
// } from "../components/push/notifications";

const FaceBookPlayer = ({ section }) => {
  const [start, setStart] = useState(0);
  const INCREMENT = 10;
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [url, setUrl] = useState("");
  const baseUrl = "https://www.facebook.com";
  useEffect(() => {
    // const pushNotificationSuported = isPushNotificationSupported();
    // if (pushNotificationSuported) {
    //   registerServiceWorker();
    //   initializePushNotifications().then(function (consent) {
    //     if (consent === "granted") {
    //       sendNotification();
    //     }
    //   });
    // }

    // const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
    // const text = "Take a look at this brand new t-shirt!";
    // const title = "New Product Available";
    // const options = {
    //   body: text,
    //   icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
    //   vibrate: [200, 100, 200],
    //   tag: "new-product",
    //   image: img,
    //   badge: "https://spyna.it/icons/android-icon-192x192.png",
    //   actions: [
    //     {
    //       action: "Detail",
    //       title: "View",
    //       icon: "https://via.placeholder.com/128/ff0000",
    //     },
    //   ],
    // };

    // navigator.serviceWorker.ready.then(function (serviceWorker) {
    //   console.log(options);
    //   serviceWorker.showNotification(title, options);
    // });
    loadLiveVideos();
    return () => {
      //   clearInterval(checkInterval);
    };
  }, []);

  const loadLiveVideos = () => {
    window.FB.api(
      "/682575135113888/videos",
      "GET",
      {
        fields:
          "fields=id,permalink_url,description,title,created_time,live_status",
        limit: 1,
        access_token:
          "EAAPfw7gqiE8BAIyocxL5qAQS6BDHWfQOhywQEhuPAYFoFa7b7ntZAXQWFZAix71HsmpRb8H8R5GPrlUfZB7HvLdk1NtZA8leZBBWSnZAXqJMjZBHy9ao77e7KHao30WvtcN0KcCGIUhrcq4ZBNuDkfGEwe3MwRjZB7F4zTorAYgMujOahJyK90WwTcf8Vc9G8PZCgZD",
      },
      function (response) {
        //    console.log(response);
        if (!response.data) return;

        setUrl(baseUrl + response.data[0].permalink_url);
        setData(response.data);
        setTitle(response.data[0].description);
        // setNext(response.paging.next);
        // setPrev(response.paging.previous);
        // console.log(response);
      }
    );
  };

  const next_ = () => {
    if (next) {
      axios
        .get(next)
        .then((resp) => {
          console.log(resp);
          setData(resp.data.data);
          setNext(resp.data.paging.next);
          setPrev(resp.data.paging.previous);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const prev_ = () => {
    if (prev) {
      axios
        .get(prev)
        .then((resp) => {
          console.log(resp);
          setData(resp.data.data);
          setNext(resp.data.paging.next);
          setPrev(resp.data.paging.previous);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const Controls = () => {
    return (
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          color: "#000",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 5,
            flexDirection: "row",
            flexWrap: "wrap",
            // width: "100%",
            // border: "1px solid black",
          }}
        >
          {Array.isArray(data) &&
            data.map((video, key) => {
              return; // deprecated

              return (
                <div key={key}>
                  <div>
                    <Button
                      style={{
                        textTransform: "none",
                        backgroundColor: theme.palette.info.main,
                        color: theme.palette.info.contrastText,
                        whiteSpace: "nowrap",
                      }}
                      size="small"
                      variant="contained"
                      onClick={() => {
                        setUrl(baseUrl + video.permalink_url);
                      }}
                    >
                      {video.description &&
                        video.description
                          .replace(
                            "Grace Episcopal Church Chattanooga",
                            "Service"
                          )
                          .replace(
                            "Grace Episcopal Church, Chattanooga",
                            "Service"
                          )}

                      {!video.description &&
                        new Date(video.created_time).toDateString()}
                    </Button>
                  </div>
                </div>
              );
              //console.log(video);
            })}
          <Button style={{ display: prev ? "none" : "none" }} onClick={prev_}>
            Prev
          </Button>
          <Button style={{ display: next ? "none" : "none" }} onClick={next_}>
            More..
          </Button>
        </div>
      </div>
    );
  };

  const VideoList = () => {
    const { data, loading, error } = useQuery(GET_VIDEOS, {
      client: client,
      variables: { start: start, increment: INCREMENT },
    });
    if (loading) {
      return null;
    }
    if (error) {
      return null;
    }
    if (data.videos.data.length === 0) {
      return (
        <Button
          style={{ display: start > 0 ? "inline" : "none" }}
          onClick={() => setStart((prev) => prev - INCREMENT)}
        >
          Prev
        </Button>
      );
    }
    if (data.videos.data.length > 0) {
      console.log(data);

      return (
        <div
          style={{
            display: "flex",
            gap: 5,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Button
            style={{ display: start > 0 ? "inline" : "none" }}
            onClick={() => setStart((prev) => prev - INCREMENT)}
          >
            Prev
          </Button>
          <Button
            // style={{ display: next ? "none" : "none" }}
            onClick={() => setStart((prev) => prev + INCREMENT)}
          >
            More..
          </Button>
          {data.videos.data.map((video, key) => {
            return (
              <div key={key}>
                <div>
                  <Button
                    style={{
                      textTransform: "none",
                      backgroundColor: theme.palette.info.main,
                      color: theme.palette.info.contrastText,
                      whiteSpace: "nowrap",
                    }}
                    size="small"
                    variant="contained"
                    onClick={() => {
                      setUrl(baseUrl + video.attributes.permalink_url);
                      setTitle(
                        video.attributes.description
                          ? video.attributes.description
                          : "" +
                              " " +
                              new Date(
                                video.attributes.created_time
                              ).toDateString()
                      );
                    }}
                  >
                    {video.attributes.description &&
                      video.attributes.description
                        .replace(
                          "Grace Episcopal Church Chattanooga",
                          "Service"
                        )
                        .replace(
                          "Grace Episcopal Church, Chattanooga",
                          "Service"
                        )}

                    {!video.attributes.description &&
                      new Date(video.attributes.created_time).toDateString()}
                  </Button>
                </div>
              </div>
            );
            //console.log(video);
          })}
        </div>
      );
    }
    setStart((prev = prev + INCREMENT));
  };
  return (
    <div>
      <div
        style={{
          ...theme.typography.h4,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.dark,
        }}
      >
        {title}
      </div>
      <ReactPlayer width="100%" url={url} controls />

      <VideoList start={start} />
    </div>
  );
};

export default FaceBookPlayer;
