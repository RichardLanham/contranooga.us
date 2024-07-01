import { useState, useEffect } from "react";
import {
  FormLabel,
  Button,
  IconButton,
  Input,
  Select,
  MenuItem,
  TextareaAutosize,
  Zoom,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { StyledFormContainer } from "../../styles/CalendarStyles";
import client from "../../apollo/client";
import { useQuery } from "@apollo/client";
import { GET_EVENT_LITE } from "../../gql/events";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useGetPages from "../../hooks/useGetPages";
import useGetUploads from "../../hooks/useGetUploads";
import ConfirmButtons from "../../components/ConfirmButtons";
import CloseIcon from "@mui/icons-material/Close";
require("./css/eventForm.css");

const EventForm = ({ events }) => {
  const theme = useTheme();
  const [imgUrl, setImgUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");
  const [eventID, setEventID] = useState("events...");
  const [user, setUser] = useState(true);
  const [mode, setMode] = useState("add"); // || edit
  // const [fromDateTime, setFromDateTime] = useState(new Date());
  // const [toDateTime, setToDateTime] = useState(new Date());
  const [message, setMessage] = useState("");
  const [page, setPage] = useState("none");
  const [image, setImage] = useState("none");
  const [imageUrl, setImageUrl] = useState("");

  const [formdata, setFormdata] = useState({
    name: "",
    body: "",
    note: "",
    startTime: new Date().toDateString(),
    endTime: new Date().toDateString(),
    email: "",
    image_url: "",
    web_url: "",
    lat: "",
    lng: "",
    approved: false,
    street: "",
    city: "",
    state: "",
    zip: "",
    link: "",
    image: 0,
    link_label: "",
    link_description: "",
    geocode: "",
  });
  const [imageSelection, setImageSelection] = useState("none");
  const _pages = useGetPages();
  const uploads = useGetUploads();

  const { data, loading, error } = useQuery(GET_EVENT_LITE, {
    variables: { id: eventID },
  });

  useEffect(() => {
    if (error) {
    }

    if (loading) {
    }

    if (data) {
      console.log(data);

      const d = JSON.parse(JSON.stringify(data));
      // delete d?.event?.data?.attributes?.image?.data?.attributes;
      d.event.data.attributes.image =
        d.event?.data?.attributes?.image?.data?.id;

      // setFormdata(data?.event?.data?.attributes);
      setFormdata(d.event?.data?.attributes);

      console.log(formdata.link?.slug);
    }
  }, [data, loading, error, eventID]);

  useEffect(() => {
    setMessage("");
    setPages(_pages);
    setImages(uploads);
    setUser(window.localStorage.getItem("strapi_user") === null ? false : true);
  });
  useEffect(() => {
    const form = Object.assign({}, formdata);
    form["approved"] =
      window.localStorage.getItem("strapi_user") !== null || false;
    setFormdata(form);
  }, []);

  const handlePageChange = (e) => {
    // let form = Object.assign({}, formdata);
    let form = JSON.parse(JSON.stringify(formdata));

    if (!form?.link?.url) {
      const linkObj = {
        url: "/",
        slug: "none",
        text: "",
        description: "",
        newTab: false,
      };
      linkObj[e.target.name] = e.target.value;
      form.link = linkObj;
    } else {
      form.link[e.target.name] = e.target.value;
    }

    setFormdata(form);
    // setPage(e.target.value);
  };

  const handleEventSelection = (e) => {
    clearForm();
    setEventID(e.target.value);
    // const event = events.find((event) => event.id === e.target.value);
    // const imgId = event.attributes?.image?.data?.id;
    // const fileId = event?.attributes?.link?.id;
    // // console.log(fileId);
    // setPage(fileId);
    // setImageSelection(imgId);
    // console.log(event.attributes);
    // setFormdata(event.attributes);
  };

  const handleFormField = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    form[field] = val;
    setFormdata(form);
    console.log(form);
  };

  const handleCheck = (e) => {
    const field = e.target.name;
    const val = e.target.checked === "on" ? true : false;
    const form = Object.assign({}, formdata);
    form[field] = val;
    form.approved = form.approved === "on" ? true : false;
    setFormdata(form);
  };

  const handleDeepField = (e) => {
    const fields = e.target.name.split(".");
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    const f1 = form[`${fields[0]}`];

    f1[0][`${fields[1]}`] = val;

    setFormdata(form);
  };

  const handleImageSelection = (e) => {
    let form = JSON.parse(JSON.stringify(formdata));
    form.image = e.target.value;
    setFormdata(form);
  };

  const handleDateField = (e, which) => {
    const form = Object.assign({}, formdata);
    form[which] = e;

    if (which === "startTime") {
      if (new Date(e) > new Date(form.endTime)) {
        form.endTime = e;
      }
    }

    setFormdata(form);
  };

  const handleGeoCode = () => {
    const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formdata.street},${formdata.city},${formdata.state},${formdata.zip}&key=${process.env.REACT_APP_GMAP_KEY}`;

    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        const form = Object.assign({}, formdata);
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        form.lat = lat;
        form.lng = lng;
        form.geocode = JSON.stringify(data.results[0]);
        setFormdata(form);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };
  const clearForm = () => {
    setEventID("events...");
    setFormdata({
      name: "",
      body: "",
      note: "",
      startTime: new Date().toDateString(),
      endTime: new Date().toDateString(),
      email: "",
      image_url: "",
      web_url: "",
      lat: "",
      lng: "",
      approved: false,
      street: "",
      city: "",
      state: "",
      zip: "",
      link: "",
      image: "",
      link_label: "",
      link_description: "",
      geocode: "",
    });
  };
  const submit = () => {
    const request = new XMLHttpRequest();
    const formData = new FormData();
    const formElement = document.querySelector("form");
    const formElements = formElement.elements;

    const data = {};

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        setEventID(JSON.parse(request.response).data.id);
        setMessage(
          "Event " +
            JSON.parse(request.response).data.attributes.name +
            " added"
        );
        // clearForm();
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
      }
    }

    delete data.EventSelect;

    if (data.image === "[object Object]") {
      delete data.image;
    }
    if (data.image === "0") {
      delete data.image;
    }
    if (data.image === "") {
      delete data.image;
    }
    data.lat = Number(data.lat);
    data.lng = Number(data.lng);
    data.endTime = new Date(data.endTime).toISOString();
    data.startTime = new Date(data.startTime).toISOString();
    data.geocode = formdata.geocode;

    // if (data.url !== "none") {
    //   data.link = [
    //     {
    //       url: data.url === "external" ? data.linkExternal : "/" + data.url,
    //       newTab: !data.url.startsWith("http") ? true : false,
    //       text: data.text,
    //       description: data.richtext,
    //     },
    //   ];
    //   delete data.url;
    //   delete data.text;
    //   delete data.richtext;
    //   delete data.linkExternal;
    // }

    if (data.image === "none") {
      delete data.image;
    }
    console.log(data);

    if (data.name === "") {
      setMessage("event name missing");
      return;
    }

    data.approved = data.approved === "on" ? true : false;

    formData.append("data", JSON.stringify(data));
    request.open("POST", process.env.REACT_APP_STRAPI_API + "/events");
    request.send(formData);
  };

  const submitUpdate = () => {
    const request = new XMLHttpRequest();
    const token = localStorage.getItem("strapi_jwt");
    const formData = new FormData();
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        setMessage("Event Updated");
      }
    };

    const form = JSON.parse(JSON.stringify(formdata));

    // form.event.data.attributes.image = form.event.data.attributes.image.data.id;
    formData.append("data", JSON.stringify(form));
    request.open(
      "PUT",
      process.env.REACT_APP_STRAPI_API + "/events/" + eventID
    );
    request.setRequestHeader("Authorization", "Bearer " + token);

    const d = JSON.stringify(formData);
    request.send(formData);
  };

  const submitDelete = () => {
    const request = new XMLHttpRequest();
    const token = localStorage.getItem("strapi_jwt");

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        setMessage("Event Deleted");
        clearForm();
        // client.refetchQueries({
        //   include: "active",
        // });
      }
    };

    request.open(
      "DELETE",
      process.env.REACT_APP_STRAPI_API + "/events/" + eventID
    );
    request.setRequestHeader("Authorization", "Bearer " + token);
    request.send();
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
    <div>
      <div>
        <CloseIcon
          onClick={() => setShow(false)}
          style={{
            cursor: "pointer",

            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastDark,
          }}
        />
        <div
          name="positionedMessage"
          style={{
            // position: "absolute",
            // left: "50%",
            display: message === "" ? "none" : "inline",
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
            // width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            style={{
              position: "absolute",
              zIndex: theme.zIndex.tooltip,
              left: "10%",
              ...theme.typography.h4,
              backgroundColor: theme.palette.info.main,
              color: theme.palette.info.contrastText,
            }}
            onClick={() => setMessage("")}
          >
            {message}
          </Button>
        </div>
        <Zoom in={true}>
          <StyledFormContainer>
            <form onSubmit={submit}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div style={{ ...theme.flexRows }}>
                  <Select
                    style={{
                      width: "fit-content",
                      zIndex: theme.zIndex.modal,
                      display: user ? "block" : "none",
                    }}
                    name="EventSelect"
                    value={eventID}
                    onChange={handleEventSelection}
                  >
                    <MenuItem value="events...">events...</MenuItem>
                    {events.map((event, key) => {
                      return (
                        <MenuItem
                          selected={key === 0}
                          key={key}
                          value={event.id}
                          style={{ ...theme.typography.subtitle2 }}
                        >
                          {event.attributes.name}
                          {" @ "}
                          {new Date(event.attributes.startTime).toDateString()}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <Input
                    value={formdata["name"]}
                    onChange={handleFormField}
                    size="small"
                    placeholder="event name"
                    name="name"
                    required={true}
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="eventFormFields" style={{ ...theme.flexRows }}>
                  <div>
                    <MobileDateTimePicker
                      disablePast
                      value={formdata["startTime"]}
                      onChange={(e) => handleDateField(e, "startTime")}
                      renderInput={(params) => (
                        <Input
                          name="startTime"
                          {...params}
                          style={{ width: 160 }}
                          // helperText="Start"
                        />
                      )}
                    />
                    <MobileDateTimePicker
                      disablePast
                      value={formdata["endTime"]}
                      onChange={(e) => handleDateField(e, "endTime")}
                      renderInput={(params) => (
                        <Input
                          name="endTime"
                          {...params}
                          style={{ width: 160 }}
                          // helperText="End"
                        />
                      )}
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      name="body"
                      value={formdata["body"]}
                      onChange={handleFormField}
                      placeholder="blurb"
                      style={{ width: "100%", minHeight: 40 }}
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      name="note"
                      value={formdata["note"]}
                      onChange={handleFormField}
                      placeholder="note"
                      style={{ width: "100%", minHeight: 20 }}
                    />
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="your email"
                      name="email"
                      value={formdata["email"]}
                      onChange={handleFormField}
                      style={
                        {
                          // width: "100%",
                        }
                      }
                    />
                  </div>

                  {user && (
                    <Select
                      name="approved"
                      value={formdata["approved"]}
                      onChange={handleFormField}
                      // style={{ display: "block", width: "fit-content" }}
                    >
                      <MenuItem value={false}>unapproved</MenuItem>
                      <MenuItem value={true}>approved</MenuItem>
                    </Select>
                  )}

                  <div></div>

                  <div
                    style={{
                      ...theme.flexRows,
                      gap: 4,
                      // border: "1px solid black",
                      width: "fit-content",
                    }}
                  >
                    <Input
                      size="small"
                      placeholder="street"
                      name="street"
                      value={formdata["street"]}
                      onChange={handleFormField}
                    />
                    <Input
                      size="small"
                      placeholder="city"
                      name="city"
                      value={formdata["city"]}
                      onChange={handleFormField}
                    />
                    <Input
                      size="small"
                      placeholder="state"
                      name="state"
                      value={formdata["state"]}
                      onChange={handleFormField}
                      style={{
                        width: 40,
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="zip"
                      name="zip"
                      value={formdata["zip"]}
                      onChange={handleFormField}
                      style={{
                        width: 80,
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="lat"
                      value={formdata["lat"]}
                      onChange={handleFormField}
                      name="lat"
                      style={{
                        width: 100,
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="lng"
                      name="lng"
                      value={formdata["lng"]}
                      onChange={handleFormField}
                      style={{
                        width: 100,
                      }}
                    />
                    <Button
                      onClick={handleGeoCode}
                      style={{ maxWidth: 90 }}
                      variant="outlined"
                    >
                      geocode
                    </Button>
                  </div>
                </div>
                <div style={{ ...theme.flexRows }}>
                  <div
                    name="ImageSelection"
                    style={{
                      display: user ? "block" : "none",
                    }}
                  >
                    <Select
                      style={{
                        width: 220,
                        zIndex: theme.zIndex.modal,
                      }}
                      name="image"
                      value={formdata.image}
                      onChange={handleImageSelection}
                    >
                      <MenuItem value="none">images</MenuItem>

                      {images?.uploadFiles?.data?.map((image, key) => {
                        return (
                          <MenuItem
                            style={{
                              height: "auto",
                              width: "fit-content",
                            }}
                            key={key}
                            value={image.id}
                          >
                            {image.attributes.name}
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
                          display: user ? "block" : "none",
                        }}
                      >
                        Remove Image
                      </FormLabel>
                    </a>
                  </div>
                  <div
                    name="FileSelection"
                    style={{
                      border: "1px solid black",
                      marginRight: 5,
                      display: user ? "flex" : "none",
                    }}
                  >
                    <Select
                      name="slug"
                      value={formdata?.link?.slug || ""}
                      onChange={handlePageChange}
                      style={{ display: "block", width: "fit-content" }}
                    >
                      <MenuItem value="">pages...</MenuItem>

                      {pages?.pages?.data.map((page, key) => {
                        // console.log("stop");
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
                    <Input
                      value={formdata?.link?.text}
                      onChange={handlePageChange}
                      name="text"
                      placeholder="label"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        // display: page === "external" ? "inline" : "none",
                      }}
                    />
                    <Input
                      onChange={handlePageChange}
                      value={formdata.link && formdata.link?.url}
                      name="url"
                      placeholder="http..."
                      style={{
                        display: "none", // hide, redundant with web_url, focus on internal page links
                        backgroundColor: theme.palette.background.default,
                        // display: page === "external" ? "inline" : "none",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
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
                          display: user ? "block" : "none",
                          display: "none",
                        }}
                      >
                        Remove Link
                      </FormLabel>
                    </a>
                    <Input
                      value={formdata.web_url}
                      name="web_url"
                      placeholder="http://..."
                      style={{
                        backgroundColor: theme.palette.background.default,
                        display: page === "external" ? "inline" : "none",
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="link url"
                      name="web_url"
                      value={formdata["web_url"]}
                      onChange={handleFormField}
                    />
                    <Input
                      value={formdata["link_label"]}
                      name="link_label"
                      onChange={handleFormField}
                      placeholder="link label"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    />
                    <Input
                      value={formdata["link_description"]}
                      name="link_description"
                      onChange={handleFormField}
                      placeholder="link description"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="image url"
                      name="image_url"
                      value={formdata["image_url"]}
                      onChange={handleFormField}
                      style={{
                        width: 120,
                      }}
                    />
                    <img
                      style={{
                        maxWidth: 25,
                        height: "auto",
                        display:
                          formdata["image_url"] === "" ? "none" : "inline",
                      }}
                      src={formdata["image_url"]}
                    ></img>
                  </div>
                </div>
              </LocalizationProvider>
            </form>
            <div
              style={{
                ...theme.flexRows,
                width: "100%",
                border: "1px none red",
                gap: "20%",
              }}
            >
              <Button
                onClick={() => submit()}
                style={{
                  maxWidth: 100,
                  borderRadius: 5,
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.primary.contrastDark,
                }}
              >
                {eventID === "events..." ? "Add " : "Copy "} Event&nbsp;(id:
                {eventID})
              </Button>
              {eventID !== "events..." && (
                <Button
                  onClick={() => submitUpdate()}
                  style={{
                    maxWidth: 100,
                    borderRadius: 5,
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastDark,
                  }}
                >
                  Update Event
                </Button>
              )}
              {eventID !== "events..." && (
                <ConfirmButtons action={submitDelete} label="delete">
                  Delete
                </ConfirmButtons>
              )}
            </div>{" "}
          </StyledFormContainer>
        </Zoom>
      </div>
    </div>
  );
};

export default EventForm;
