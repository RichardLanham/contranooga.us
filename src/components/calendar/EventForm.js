import { useState, useEffect } from "react";
import {
  FormLabel,
  Button,
  IconButton,
  TextField,
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

// import useGetPages from "../../hooks/useGetPages";
// import useGetUploads from "../../hooks/useGetUploads";

const EventForm = ({ events, _pages, uploads }) => {
  console.log(_pages);
  const theme = useTheme();

  const [imgUrl, setImgUrl] = useState(null);

  const [show, setShow] = useState(false);

  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");

  const [eventSelection, setEventSelection] = useState("events...");
  const [user, setUser] = useState(true);

  const [mode, setMode] = useState("add"); // || edit

  const [fromDateTime, setFromDateTime] = useState(new Date());
  const [toDateTime, setToDateTime] = useState(new Date());
  const [message, setMessage] = useState("");

  // const [images, setImages] = useState({ data: [] });
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
    image: "0",
    approved: "",
    lat: 0,
    lng: 0,
    approved: false,
    street: "",
    city: "",
    state: "",
    zip: "",
    link: "",
    image: "",
    geocode: "",
  });

  // const [geo, setGeo] = useState({});
  // const _pages = useGetPages();
  // const uploads = useGetUploads();
  // console.log(_pages);
  useEffect(() => {
    setPages(_pages);
    setImages(uploads);
    setUser(window.localStorage.getItem("strapi_user") === null ? false : true);
    const form = Object.assign({}, formdata);
    form["approved"] =
      window.localStorage.getItem("strapi_user") !== null || false;
    setFormdata(form);
    // console.log(window.localStorage.getItem("strapi_user"));
    // console.log(user);
  }, []);

  // const [page, setPage] = useState("");
  // const handleImageChange = (e) => {
  //   setImage(e.target.value);
  // };
  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const [imageSelection, setImageSelection] = useState("none");

  const handleEventSelection = (e) => {
    setEventSelection(e.target.value);
    const event = events.find((event) => event.id === e.target.value);
    const imgId = event.attributes?.image?.data?.id;
    const fileId = event.attributes.link.id;
    console.log(fileId);
    setPage(fileId);
    setImageSelection(imgId);
    console.log(imgId);
    // event.attributes.image = imgId;
    setFormdata(event.attributes);
  };

  const handleFormField = (e) => {
    // console.log(formdata);
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    form[field] = val;
    setFormdata(form);
  };

  const handleDeepField = (e) => {
    // console.log(formdata);
    const fields = e.target.name.split(".");
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    const f1 = form[`${fields[0]}`];

    f1[0][`${fields[1]}`] = val;

    //form[`${fields[0]}`][0][`${fields[1]}`] = val;
    setFormdata(form);
  };

  const handleImageSelection = (e) => {
    // console.log(formdata);
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);

    setImageSelection(val);
    setFormdata(form);
  };

  const handleDateField = (e, which) => {
    const form = Object.assign({}, formdata);
    form[which] = e;
    setFormdata(form);
  };

  const handleGeoCode = () => {
    // https://maps.googleapis.com/maps/api/geocode/json?address=302%20hemphill%20ave,%20chattanooga%20tn,%2037411&key=AIzaSyA8eUANvHM-checxqXc-bv66AST5RATmsM

    const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formdata.street},${formdata.city},${formdata.state},${formdata.zip}&key=${process.env.REACT_APP_GMAP_KEY}`;

    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0]);

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
        // return;
      });
    // fetch(geoUrl).then((response) => response.json()).then((data))  {
    //   console.log(data);
    //   setGeo(response); //.results[0].geometry.location.lat
    //   formdata.geocode = JSON.stringify(response);
    // });

    console.log(geoUrl);
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
    // delete data.image;
    if (data.image === "[object Object]") {
      delete data.image;
    }
    // data.image = 1;
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

    if (data.name === "") {
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
      style={
        {
          // position: "absolute",
          // width: "100%",
          // border: "10px solid red",
        }
      }
    >
      <div>
        <Zoom in={true}>
          <StyledFormContainer>
            <pre>{JSON.stringify(formdata.link, null, 3)}</pre>
            <form onSubmit={submit} style={{ position: "relative" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div>
                  <div>
                    <pre style={{ display: "none" }}></pre>
                    <Select
                      style={{
                        width: 220,
                        zIndex: theme.zIndex.modal,
                      }}
                      //onOpen={(e) => (e.currentTarget.style.width = "50vw")}
                      name="EventSelect"
                      value={eventSelection}
                      onChange={handleEventSelection}
                    >
                      <MenuItem value="events...">events...</MenuItem>
                      {events.map((event, key) => {
                        // return <div key={key}>{event.attributes.name}</div>;

                        return (
                          <MenuItem
                            selected={key === 0}
                            key={key}
                            value={event.id}
                          >
                            {event.attributes.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextField
                      value={formdata["name"]}
                      onChange={handleFormField}
                      size="small"
                      placeholder="Event Name"
                      name="name"
                      style={{ width: "100%", marginTop: 10 }}
                    />
                  </div>

                  <div>
                    <MobileDateTimePicker
                      disablePast
                      value={formdata["startTime"]}
                      // name="startTime"
                      onChange={(e) => handleDateField(e, "startTime")}
                      renderInput={(params) => (
                        <TextField
                          name="startTime"
                          // value={formdata["startTime"]}
                          // name="startTime"
                          // onChange={handleFormField}
                          {...params}
                          style={{ width: "50%" }}
                          helperText="Start"
                        />
                      )}
                    />
                    <MobileDateTimePicker
                      disablePast
                      value={formdata["endTime"]}
                      onChange={(e) => handleDateField(e, "endTime")}
                      renderInput={(params) => (
                        <TextField
                          name="endTime"
                          // value={formdata["endTime"]}
                          // onChange={handleFormField}
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
                      value={formdata["body"]}
                      onChange={handleFormField}
                      placeholder="Body (plain) text"
                      style={{ width: "100%", minHeight: 40 }}
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      name="note"
                      value={formdata["note"]}
                      onChange={handleFormField}
                      placeholder="Note"
                      style={{ width: "100%", minHeight: 20 }}
                    />
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="Your Email"
                      name="email"
                      value={formdata["email"]}
                      onChange={handleFormField}
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
                      // onChange={(e) => setImageUrl(e.currentTarget.value)}
                      size="small"
                      placeholder="Image URL"
                      name="image_url"
                      value={formdata["image_url"]}
                      onChange={handleFormField}
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
                        display:
                          formdata["imageUrl"] === "" ? "none" : "inline",
                      }}
                      src={formdata["image_url"]}
                    ></img>
                  </div>
                  <div>
                    <Input
                      size="small"
                      placeholder="Web URL"
                      name="web_url"
                      value={formdata["web_url"]}
                      onChange={handleFormField}
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
                      value={formdata["street"]}
                      onChange={handleFormField}
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
                      value={formdata["city"]}
                      onChange={handleFormField}
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
                      value={formdata["state"]}
                      onChange={handleFormField}
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
                      value={formdata["zip"]}
                      onChange={handleFormField}
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
                      placeholder="lat"
                      value={formdata["lat"]}
                      onChange={handleFormField}
                      name="lat"
                      style={{
                        width: "30%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <Input
                      size="small"
                      placeholder="lng"
                      name="lng"
                      value={formdata["lng"]}
                      onChange={handleFormField}
                      style={{
                        width: "30%",
                        marginTop: 5,
                        marginBottom: 5,
                        border: "1px solid black",
                      }}
                    />
                    <Button onClick={handleGeoCode} style={{ width: "30%" }}>
                      geocode
                    </Button>
                  </div>
                </div>
                <div
                  name="ImageSelection"
                  style={{ display: user ? "block" : "none" }}
                >
                  <pre style={{ display: "none" }}>
                    {JSON.stringify(images, null, 3)}
                  </pre>
                  <Select
                    style={{
                      width: 220,
                      zIndex: theme.zIndex.modal,
                    }}
                    //onOpen={(e) => (e.currentTarget.style.width = "50vw")}
                    name="image"
                    value={imageSelection}
                    onChange={handleImageSelection}
                  >
                    <MenuItem value="none">images</MenuItem>

                    {images?.uploadFiles.data?.map((image, key) => {
                      // const thumb = getImageThumb(image.formats);
                      // const width = isNaN(thumb.width) ? 0 : thumb.width * 0.5;
                      return (
                        <MenuItem
                          style={{
                            // width: width,
                            height: "auto",
                          }}
                          key={key}
                          value={image.id}
                        >
                          {image.attributes.name}
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
                  <pre style={{ display: "none" }}>
                    {JSON.stringify(pages, null, 3)}
                  </pre>
                  <Select
                    name="url"
                    value={page}
                    onChange={handlePageChange}
                    style={{ display: "block" }}
                  >
                    <MenuItem value="none">Link</MenuItem>
                    <MenuItem value="external">external link</MenuItem>
                    {pages?.pages?.data.map((page, key) => {
                      // const thumb = getImageThumb(image.formats);
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
                    value={formdata.link && formdata.link[0]?.description}
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
                    onChange={handleDeepField}
                    name="link.description"
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
