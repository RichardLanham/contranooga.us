import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FormLabel,
  Button,
  IconButton,
  TextField,
  Input,
  Select,
  MenuItem,
  Typography,
  TextareaAutosize,
  Zoom,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import axios from "axios";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  StyledCalendar,
  StyledFormContainer,
  StyledEventColumn,
  // StyledEventButton,
} from "../styles/CalendarStyles";
import {
  StyledPage,
  // StyledHeader,
  // StyledPageSection,
} from "../styles/PageStyles";
import { StyledHeading } from "../styles/ComponentStyles";
import Site from "../Site";
import { eventEmitter } from "../events.tsx";
import client from "../apollo/client";
import EventList from "../components/calendar/EventList";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import SiteHeader from "../components/page/PageHeader";

const EventForm = () => {
  console.log("evenform");
  const [imgUrl, setImgUrl] = useState(null);

  const [show, setShow] = useState(false);

  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");
  const [user, setUser] = useState("");
  const theme = useTheme();
  const [fromDateTime, setFromDateTime] = useState(new Date());
  const [toDateTime, setToDateTime] = useState(new Date());
  const [message, setMessage] = useState("");
  const trm = new Date() + 1;
  const nextDay = trm.toLocaleString().split(",")[0];

  // const [images, setImages] = useState({ data: [] });
  const [page, setPage] = useState("none");
  const [image, setImage] = useState("none");
  const [imageUrl, setImageUrl] = useState("");
  // const [page, setPage] = useState("");
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
    //setPages(JSON.parse(window.localStorage.getItem("strapiPages")));
    // setUser("me");
    // setTimeout(() => {
    //   setMessage("");
    // }, 2000);
  }, [message]);

  const submit = () => {
    const request = new XMLHttpRequest();
    const formData = new FormData();
    const formElement = document.querySelector("form");
    const formElements = formElement.elements;

    const data = {};

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        setMessage(
          "Event " +
            JSON.parse(request.response).data.attributes.name +
            " added"
        );
      }
    };

    formElements.lat.value =
      formElements.lat.value === "" ? 0 : formElements.lat.value;
    formElements.lng.value =
      formElements.lng.value === "" ? 0 : formElements.lng.value;

    for (let i = 0; i < formElements.length; i++) {
      const currentElement = formElements[i];
      if (!["submit", "file"].includes(currentElement.type)) {
        data[currentElement.name] = currentElement.value;
      } else if (currentElement.type === "file") {
        if (currentElement.files.length === 0) {
          data["image"] = formElements["image2"];
        } else {
          for (let i = 0; i < currentElement.files.length; i++) {
            const file = currentElement.files[i];
            formData.append(`files.${currentElement.name}`, file, file.name);
          }
        }
      }
    }

    data.endTime = new Date(data.endTime).toISOString();
    data.startTime = new Date(data.startTime).toISOString();

    if (data.url !== "none") {
      data.link = [
        {
          url: data.url === "external" ? data.linkExternal : "/" + data.url,
          newTab: !data.url.startsWith("http") ? true : false,
          text: data.text,
          description: data.description,
        },
      ];
      delete data.url;
      delete data.text;
      delete data.description;
      delete data.linkExternal;
    }

    if (data.image === "none") {
      delete data.image;
    }
    console.log(data);

    if (!data.name) {
      setMessage("Event Name missing");
      return;
    }

    formData.append("data", JSON.stringify(data));

    request.open("POST", process.env.REACT_APP_STRAPI_API + "/events");

    // request.setRequestHeader(
    //   "Authorization",
    //   "Bearer " + window.localStorage.getItem("strapi_jwt")
    // );

    request.send(formData);
    setTimeout(() => {
      client.refetchQueries({
        //        include: [GET_EVENTS],
      });
      // getEvents();
    }, 1000);
  };

  const getImageThumb = (attribs) => {
    if (!attribs) {
      return false;
    }
    if (attribs.thumbnail) {
      return attribs.thumbnail;
    }
    if (attribs.small) {
      return attribs.small;
    }
    if (attribs.medium) {
      return attribs.medium;
    }
  };

  if (!show)
    return (
      <IconButton
        component="label"
        onClick={() => setShow(true)}
        //style={{ display: user ? "block" : "none" }}
      >
        <AddCircleIcon
          style={{
            fontSize: 35,
          }}
        />
      </IconButton>
    );
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: theme.zIndex.modal - 1,
            backgroundColor: theme.palette.background.default,
            opacity: 0.8,
          }}
        ></div>

        <Zoom in={true}>
          <StyledFormContainer>
            <form onSubmit={submit}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div
                  style={{
                    zIndex: theme.zIndex.modal,
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextField
                      size="small"
                      placeholder="Event Name"
                      name="name"
                      style={{ width: "100%", marginTop: 10 }}
                    />
                  </div>

                  <div>
                    <MobileDateTimePicker
                      disablePast
                      value={fromDateTime}
                      onChange={(d) => {
                        if (toDateTime < d) {
                          setToDateTime(d);
                        }
                        setFromDateTime(d);
                      }}
                      renderInput={(params) => (
                        <TextField
                          name="startTime"
                          {...params}
                          style={{ width: "50%" }}
                          helperText="Start"
                        />
                      )}
                    />
                    <MobileDateTimePicker
                      disablePast
                      value={toDateTime}
                      onChange={(d) => {
                        setToDateTime(d);
                      }}
                      renderInput={(params) => (
                        <TextField
                          name="endTime"
                          {...params}
                          style={{ width: "50%" }}
                          helperText="End"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      name="body"
                      placeholder="Body (plain) text"
                      style={{ width: "100%", minHeight: 40 }}
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      name="note"
                      placeholder="Note"
                      style={{ width: "100%", minHeight: 20 }}
                    />
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="Your Email"
                      name="email"
                      style={{
                        width: "100%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      onChange={(e) => setImageUrl(e.currentTarget.value)}
                      size="small"
                      placeholder="Image URL"
                      name="image_url"
                      style={{
                        width: "100%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <img
                      style={{
                        maxWidth: 100,
                        height: "auto",
                        display: imageUrl === "" ? "none" : "inline",
                      }}
                      src={imageUrl}
                    ></img>
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="Web URL"
                      name="web_url"
                      style={{
                        width: "100%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="street"
                      name="street"
                      style={{
                        width: "100%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div style={{ ...theme.flexRows, gap: 4 }}>
                    <Input
                      size="small"
                      placeholder="city"
                      name="city"
                      style={{
                        width: "40%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="state"
                      name="state"
                      style={{
                        width: "20%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="zip"
                      name="zip"
                      style={{
                        width: "30%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <div style={{ ...theme.flexRows, gap: 10 }}>
                    <Input
                      size="small"
                      placeholder="latitude"
                      name="lat"
                      style={{
                        width: "40%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="longitude"
                      name="lng"
                      style={{
                        width: "40%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                  </div>
                </div>
                <div
                  name="ImageSelection"
                  style={{ display: user ? "block" : "none" }}
                >
                  <Select
                    style={{
                      width: 220,
                      zIndex: theme.zIndex.modal,
                    }}
                    //onOpen={(e) => (e.currentTarget.style.width = "50vw")}
                    name="image"
                    value={image}
                    onChange={handleImageChange}
                  >
                    <MenuItem value="none">images</MenuItem>
                    {images.data.map((image, key) => {
                      const thumb = getImageThumb(image.formats);
                      const width = isNaN(thumb.width) ? 0 : thumb.width * 0.5;
                      return (
                        <MenuItem
                          style={{
                            width: width,
                            height: "auto",
                          }}
                          key={key}
                          value={image.id}
                        >
                          {image.name}
                          {/* <img
                              className="fade-in-image"
                              style={{ width: width, height: "auto" }}
                              src={process.env.REACT_APP_STRAPI + thumb.url}
                            /> */}
                        </MenuItem>
                      );
                    })}
                  </Select>

                  <a
                    style={{ display: image === "none" ? "none" : "inline" }}
                    onClick={() => setImage("none")}
                  >
                    <FormLabel
                      style={{
                        ...theme.typography.button,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        cursor: "pointer",
                      }}
                    >
                      Remove Image
                    </FormLabel>
                  </a>
                </div>
                <div
                  name="FileSelection"
                  style={{ display: user ? "block" : "none" }}
                >
                  <Select
                    name="url"
                    value={page}
                    onChange={handlePageChange}
                    style={{ display: "block" }}
                  >
                    <MenuItem value="none">Link</MenuItem>
                    <MenuItem value="external">external link</MenuItem>
                    {pages &&
                      pages.map((page, key) => {
                        // const thumb = getImageThumb(image.formats);

                        return (
                          <MenuItem
                            selected={key === 0}
                            key={key}
                            value={page.attributes.slug}
                          >
                            {page.attributes.slug}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                <div
                  style={{
                    display: page === "none" ? "none" : "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <a onClick={() => setPage("none")}>
                    <FormLabel
                      style={{
                        ...theme.typography.button,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        cursor: "pointer",
                      }}
                    >
                      Remove Link
                    </FormLabel>
                  </a>
                  <TextField
                    name="linkExternal"
                    placeholder="http://..."
                    style={{
                      backgroundColor: theme.palette.background.default,
                      display: page === "external" ? "inline" : "none",
                    }}
                  ></TextField>
                  <TextField
                    name="text"
                    placeholder="link label"
                    style={{
                      backgroundColor: theme.palette.background.default,
                    }}
                  ></TextField>
                  <TextField
                    name="description"
                    placeholder="link description"
                    style={{
                      backgroundColor: theme.palette.background.default,
                    }}
                  ></TextField>
                </div>
              </LocalizationProvider>
            </form>
            <div
              style={{
                backgroundColor: theme.palette.info.main,
                color: theme.palette.info.contrastText,
              }}
            >
              {message}
            </div>
            <Button
              onClick={() => submit()}
              style={{
                width: 100,
                borderRadius: 5,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastDark,
              }}
            >
              Add Event
            </Button>
            <Button
              onClick={() => setShow(false)}
              style={{
                width: 100,
                borderRadius: 5,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastDark,
                marginLeft: 10,
              }}
            >
              Close
            </Button>
          </StyledFormContainer>
        </Zoom>
      </div>
    </div>
  );
};

export default EventForm;
