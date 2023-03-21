import { useState, useEffect } from "react";
import {
  FormLabel,
  InputLabel,
  Button,
  IconButton,
  Input,
  Select,
  MenuItem,
  TextareaAutosize,
  Zoom,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import { StyledFormContainer } from "../../styles/CalendarStyles";
import client from "../../apollo/client";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useGetPages from "../../hooks/useGetPages";
import useGetUploads from "../../hooks/useGetUploads";

require("./eventForm.css");

const EventForm = ({ events }) => {
  const theme = useTheme();
  const [imgUrl, setImgUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");
  const [eventSelection, setEventSelection] = useState("events...");
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

  const _pages = useGetPages();
  const uploads = useGetUploads();

  useEffect(() => {
    setPages(_pages);
    setImages(uploads);
    setUser(window.localStorage.getItem("strapi_user") === null ? false : true);
    const form = Object.assign({}, formdata);
    form["approved"] =
      window.localStorage.getItem("strapi_user") !== null || false;
    setFormdata(form);
  }, []);

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const [imageSelection, setImageSelection] = useState("none");

  const handleEventSelection = (e) => {
    setEventSelection(e.target.value);
    const event = events.find((event) => event.id === e.target.value);
    const imgId = event.attributes?.image?.data?.id;
    const fileId = event?.attributes?.link?.id;
    console.log(fileId);
    setPage(fileId);
    setImageSelection(imgId);
    console.log(imgId);
    setFormdata(event.attributes);
  };

  const handleFormField = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    form[field] = val;
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
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);

    setImageSelection(val);
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
    // https://maps.googleapis.com/maps/api/geocode/json?address=302%20hemphill%20ave,%20chattanooga%20tn,%2037411&key=AIzaSyA8eUANvHM-checxqXc-bv66AST5RATmsM
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
    data.lat = Number(data.lat);
    data.lng = Number(data.lng);
    data.endTime = new Date(data.endTime).toISOString();
    data.startTime = new Date(data.startTime).toISOString();
    data.geocode = formdata.geocode;

    if (data.url !== "none") {
      data.link = [
        {
          url: data.url === "external" ? data.linkExternal : "/" + data.url,
          newTab: !data.url.startsWith("http") ? true : false,
          text: data.text,
          description: data.richtext,
        },
      ];
      delete data.url;
      delete data.text;
      delete data.richtext;
      delete data.linkExternal;
    }

    if (data.image === "none") {
      delete data.image;
    }
    console.log(data);

    if (data.name === "") {
      setMessage("event name missing");
      return;
    }

    formData.append("data", JSON.stringify(data));
    request.open("POST", process.env.REACT_APP_STRAPI_API + "/events");
    request.send(formData);
  };

  const submitUpdate = () => {
    const request = new XMLHttpRequest();
    const formData = new FormData();
    const formElement = document.querySelector("form");
    const formElements = formElement.elements;

    const token = localStorage.getItem("strapi_jwt");

    const data = {};

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        setMessage(
          "Event Updated"
          // JSON.parse(request.response).data.attributes.name +
          // " updated"
        );

        // setFormdata({
        //   name: "",
        //   body: "",
        //   note: "",
        //   startTime: new Date().toDateString(),
        //   endTime: new Date().toDateString(),
        //   email: "",
        //   image_url: "",
        //   web_url: "",
        //   lat: "",
        //   lng: "",
        //   approved: false,
        //   street: "",
        //   city: "",
        //   state: "",
        //   zip: "",
        //   link: "",
        //   image: "",
        //   link_label: "",
        //   link_description: "",
        //   geocode: "",
        // });
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
    data.lat = Number(data.lat);
    data.lng = Number(data.lng);
    data.endTime = new Date(data.endTime).toISOString();
    data.startTime = new Date(data.startTime).toISOString();
    data.geocode = formdata.geocode;

    if (data.url !== "none") {
      data.link = [
        {
          url: data.url === "external" ? data.linkExternal : "/" + data.url,
          newTab: !data.url.startsWith("http") ? true : false,
          text: data.text,
          description: data.richtext,
        },
      ];
      delete data.url;
      delete data.text;
      delete data.richtext;
      delete data.linkExternal;
    }

    if (data.image === "none") {
      delete data.image;
    }
    console.log(data);

    if (data.name === "") {
      setMessage("event name missing");
      return;
    }

    formData.append("data", JSON.stringify(data));
    request.open(
      "PUT",
      process.env.REACT_APP_STRAPI_API + "/events/" + eventSelection
    );
    request.setRequestHeader("Authorization", "Bearer " + token);
    request.send(formData);
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
        <Zoom in={true}>
          <StyledFormContainer>
            <form onSubmit={submit}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Select
                  style={{
                    width: 220,
                    zIndex: theme.zIndex.modal,
                    display: user ? "block" : "none",
                  }}
                  name="EventSelect"
                  value={eventSelection}
                  onChange={handleEventSelection}
                >
                  <MenuItem value="events...">events...</MenuItem>
                  {events.map((event, key) => {
                    return (
                      <MenuItem selected={key === 0} key={key} value={event.id}>
                        {event.attributes.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                <div className="eventFormFields" style={{ ...theme.flexRows }}>
                  <div>
                    <Input
                      value={formdata["name"]}
                      onChange={handleFormField}
                      size="small"
                      placeholder="event name"
                      name="name"
                      required="true"
                      style={{ width: 200 }}
                    />
                    <MobileDateTimePicker
                      disablePast
                      value={formdata["startTime"]}
                      onChange={(e) => handleDateField(e, "startTime")}
                      renderInput={(params) => (
                        <Input
                          name="startTime"
                          {...params}
                          style={{ width: 160 }}
                          helperText="Start"
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
                          helperText="End"
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
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <div>
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
                  <div></div>

                  <div style={{ ...theme.flexRows, gap: 4 }}>
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
                      value={imageSelection}
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
                      display: user ? "block" : "none",
                    }}
                  >
                    <pre style={{ display: "none" }}>
                      {JSON.stringify(formdata, null, 3)}
                    </pre>
                    <Select
                      name="url"
                      value={page}
                      onChange={handlePageChange}
                      style={{ display: "block", width: "fit-content" }}
                    >
                      <MenuItem value="none">page</MenuItem>
                      <MenuItem value="external">external link</MenuItem>
                      {pages?.pages?.data.map((page, key) => {
                        console.log("stop");
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
                      value={formdata.link && formdata.link[0]?.description}
                      name="linkExternal"
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
                      name="link_label"
                      placeholder="link label"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    />
                    <Input
                      onChange={handleDeepField}
                      name="link_description"
                      placeholder="link description"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    />
                  </div>
                </div>
              </LocalizationProvider>
            </form>

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
              onClick={() => submitUpdate()}
              style={{
                width: 100,
                borderRadius: 5,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastDark,
              }}
            >
              Update Event
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
            <div
              style={{
                display: message === "" ? "none" : "inline",
                backgroundColor: theme.palette.info.main,
                color: theme.palette.info.contrastText,
                width: "fit-content",
              }}
            >
              <Button
                variant="contained"
                style={{
                  ...theme.typography.caption,
                  width: "fit-content",

                  backgroundColor: theme.palette.info.main,
                  color: theme.palette.info.contrastText,
                }}
                onClick={() => setMessage("")}
              >
                {message}
              </Button>
            </div>
          </StyledFormContainer>
        </Zoom>
      </div>
    </div>
  );
};

export default EventForm;
