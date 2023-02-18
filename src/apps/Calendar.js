import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FormLabel,
  Button,
  IconButton,
  TextField,
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

import SiteHeader from "../components/page/SiteHeader";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [selDate, setSelDate] = useState(new Date());
  const theme = useTheme();

  let saturdayLabel = "Contra Dance @ 7:30";

  const [events, setEvents] = useState({
    data: {
      data: [],
    },
  });
  const [suns, setSuns] = useState([]);
  const [user, setUser] = useState(null);

  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");

  useEffect(() => {
    const storedPages = theme.pages; // JSON.parse(window.localStorage.getItem("strapiPages"));

    setPages(storedPages);
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
    eventEmitter.subscribe(
      "LOGIN",
      (loggedOn) => {
        setUser(loggedOn);
      },
      []
    );

    eventEmitter.subscribe(
      "EVENTUPDATE",
      () => {
        getEvents();
      },
      []
    );
    return () => {
      eventEmitter.unsubscribe("LOGIN");
      eventEmitter.unsubscribe("EVENTUPDATE");
    };
  }, []);

  useEffect(async () => {
    // setLect(JSON.parse(window.localStorage.getItem("lect")));

    axios
      .get(process.env.REACT_APP_STRAPI_API + "/upload/files")
      .then((res) => {
        setImages(res);
        //setImage(res.data[0].name);
        window.localStorage.setItem("strapiImages", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });

    await getEvents();

    addSaturdays();
  }, []);

  function saturdaysInFuture(numDays) {
    // each month
    // each day
    // each saturday,
    // get 2nd and 4th
    const year = new Date().getFullYear();
    const saturdays = [];
    for (var month = 0; month < 12; month++) {
      const daysinmonth = new Date(year, month, 0).getDate();
      let satCount = 0;
      for (var day = 0; day < daysinmonth; day++) {
        const theday = new Date(year, month, day, 19, 30); // note: the '19, 30' part sets time to 7:30 pm
        if (theday.getDay() === 6) {
          satCount++;
        }
        if (theday.getDay() === 6 && (satCount === 2 || satCount === 4)) {
          saturdays.push({
            dayOfMonth: theday.getDate(),
            iso: theday.toISOString(),
          });
        }
      }
    }
    // console.log(saturdays);
    return saturdays;
  }

  const addSaturdays = () => {
    const year = selDate.getFullYear();
    const month = selDate.getMonth() + 1;
    const saturdays = saturdaysInFuture(365);

    const sats_ = [];
    // const events_ = { ...events };

    for (var key in saturdays) {
      const when = saturdays[key].iso;
      const end = new Date(when);

      end.setHours(end.getHours() + 4);
      end.setMinutes(0);
      sats_.push({
        id: Math.random(),
        attributes: {
          to: "/page/newdancer",
          name: saturdayLabel,
          //    body: "Services @ 8:00 and 10:45 AM",]
          startTime: when,
          endTime: end,
        },
      });
      // console.log(new Date(end).getHours());
      // }
    }

    setSuns(sats_);
  };
  const getEvents = () => {
    axios
      .get(process.env.REACT_APP_STRAPI_API + "/events")
      .then((res) => {
        setEvents(res);
        window.localStorage.setItem("strapiEvents", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [imgUrl, setImgUrl] = useState(null);

  const [show, setShow] = useState(false);

  const EventForm = () => {
    const [fromDateTime, setFromDateTime] = useState(new Date());
    const [toDateTime, setToDateTime] = useState(new Date());
    const [message, setMessage] = useState("");
    const trm = new Date() + 1;
    const nextDay = trm.toLocaleString().split(",")[0];

    // const [images, setImages] = useState({ data: [] });
    const [page, setPage] = useState("none");
    const [image, setImage] = useState("none");
    // const [page, setPage] = useState("");
    const handleImageChange = (e) => {
      setImage(e.target.value);
    };
    const handlePageChange = (e) => {
      setPage(e.target.value);
    };

    useEffect(() => {
      //setPages(JSON.parse(window.localStorage.getItem("strapiPages")));
      setTimeout(() => {
        setMessage("");
      }, 2000);
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

      request.setRequestHeader(
        "Authorization",
        "Bearer " + window.localStorage.getItem("strapi_jwt")
      );

      request.send(formData);
      setTimeout(() => {
        client.refetchQueries({
          //        include: [GET_EVENTS],
        });
        getEvents();
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
          style={{ display: user ? "block" : "none" }}
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
                        placeholder="Body text"
                        style={{ width: "100%", minHeight: 100 }}
                      />
                    </div>
                  </div>
                  <div>
                    <FormLabel>Display in </FormLabel>
                    <Select name="display" defaultValue={"Calendar"}>
                      <MenuItem value="Calendar">Calendar</MenuItem>
                      <MenuItem value="Banner">Banner</MenuItem>
                      <MenuItem value="Both">Both</MenuItem>
                    </Select>

                    <Select
                      style={{
                        width: 220,
                      }}
                      name="image"
                      value={image}
                      onChange={handleImageChange}
                    >
                      <MenuItem value="none">images</MenuItem>
                      {images.data.map((image, key) => {
                        const thumb = getImageThumb(image.formats);
                        const width = isNaN(thumb.width)
                          ? 0
                          : thumb.width * 0.5;
                        return (
                          <MenuItem
                            style={{
                              width: width,
                              height: "auto",
                            }}
                            key={key}
                            value={image.id}
                          >
                            <img
                              className="fade-in-image"
                              style={{ width: width, height: "auto" }}
                              src={process.env.REACT_APP_STRAPI + thumb.url}
                            />
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
                  <Select
                    name="url"
                    value={page}
                    onChange={handlePageChange}
                    style={{ display: "block" }}
                  >
                    <MenuItem value="none">Link</MenuItem>
                    <MenuItem value="external">external link</MenuItem>
                    {pages.map((page, key) => {
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

  const EventCalendar = () => {
    let thisEvent = {};
    //    console.log(holydays);
    const arrayEvents = [];
    const allEvents = [...suns, ...events.data.data];
    if (user) {
      allEvents.map((ev) => {
        thisEvent = {};
        thisEvent.title = ev.attributes.name;
        thisEvent.start = new Date(ev.attributes.startTime);
        thisEvent.end = new Date(ev.attributes.endTime);
        arrayEvents.push(thisEvent);
      });
    } else {
      allEvents
        .filter((ev) => ev.attributes.display !== "Banner")
        .map((ev) => {
          thisEvent = {};
          thisEvent.title = ev.attributes.name;
          thisEvent.start = new Date(ev.attributes.startTime);
          thisEvent.end = new Date(ev.attributes.endTime);
          arrayEvents.push(thisEvent);
        });
    }

    // holydays.map((day) => {
    //   thisEvent = {};
    //   const year = new Date().getFullYear();
    //   thisEvent.title = day.title;
    //   thisEvent.start = new Date(day.day + " " + year);
    //   thisEvent.end = new Date(day.day + " " + year);
    //   thisEvent.lessons = day.lessons;
    //   thisEvent.psalms = day.psalms;
    //   arrayEvents.push(thisEvent);
    // });

    let navigate = {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE",
    };
    let selectedDate = new Date();

    const StyledCalButton = styled(Button)(({ theme }) => ({
      ...theme.typography.body1,
      maxWidth: 50,
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastLight,
      "&:hover": {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.contrastLight,
      },
    }));

    return (
      <StyledCalendar
        defaultView="agenda"
        localizer={localizer}
        events={arrayEvents}
        startAccessor="start"
        endAccessor="end"
        // value={calDate}
        //date={calDate}
        onNavigate={(event) => {
          //console.log(calDate);
          //console.log(selectedDate);
          //selectedDate = event;
          //setSelDate(event.date);
          eventEmitter.dispatch("NEWDATE", event);
        }}
        onChange={(event) => {
          // console.log(event);
          // setCalDate(event);
        }}
        components={{
          date: ({ label, day }) => {
            const future = new Date(day) > new Date();
            return (
              <div
                style={{
                  borderRadius: 3,
                  backgroundColor: future
                    ? theme.palette.secondary.main
                    : theme.palette.grey[200],
                  color: future ? theme.palette.secondary.contrastText : "#000", // greyed
                  padding: 2,
                }}
              >
                <Typography>{label}</Typography>
              </div>
            );
          },
          time: ({ label, event }) => {
            const end = new Date(event.end);
            const start = new Date(event.start);

            let label_ = label;
            const same = event.end.toString() === event.start.toString();
            const from_ = start.toLocaleTimeString().replace(":00 ", "");
            const to_ = same
              ? ""
              : end.toLocaleTimeString().replace(":00 ", "");

            const future = new Date(event.end) > new Date();

            return (
              <div
                style={{
                  //`maxWidth: "60%",
                  //overflow: "hidden",
                  borderRadius: 3,
                  backgroundColor: future
                    ? theme.palette.secondary.main
                    : theme.palette.grey[200], //the past is
                  color: future ? theme.palette.secondary.contrastText : "#000", // greyed
                  padding: 2,
                }}
              >
                <Typography>{from_}</Typography>
                <Typography>{to_}</Typography>
              </div>
            );
          },
          event: ({ event }) => {
            const future = new Date(event.end) >= new Date();
            let title = (" " + event.title).slice(1); // by val
            return (
              <div
                title={event.title}
                style={{
                  // textAlign: "center",
                  padding: 2,
                  margin: 0,
                  // borderRadius: 5,
                  // borderWidth: 2,
                  // borderBottom: `2px solid ${theme.palette.primary.main}`,
                  borderColor: future
                    ? theme.palette.primary.main
                    : theme.palette.background.default, //the past is
                  color: future ? theme.palette.info.contrastLight : "#000", // greyed
                }}
              >
                {event.title === saturdayLabel ? (
                  <Link
                    style={{
                      ...theme.typography.h5,
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#000666",
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,
                    }}
                    to="/page/newdancer"
                  >
                    {event.title}
                  </Link>
                ) : (
                  <a
                    style={{
                      ...theme.typography.h5,
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,

                      textDecoration: "none",
                    }}
                    href={"#" + title.replaceAll(" ", "")}
                  >
                    {event.title}
                  </a>
                )}
              </div>
            );
          },

          toolbar: (props) => {
            const {
              localizer: { messages },
              label,
            } = props;
            // console.log(label);
            return (
              <div
                style={{
                  position: "relative",
                  marginRight: "auto",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", gap: 10, width: "100%" }}>
                  <EventForm />

                  <FormLabel
                    style={{
                      ...theme.typography.h5,
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,
                      padding: 3,
                      borderRadius: 10,
                    }}
                  >
                    {label
                      .replace(new Date().getFullYear(), "")
                      .replace("/ ", " ")}
                  </FormLabel>
                  <IconButton
                    component="label"
                    onClick={(e) => {
                      props.onNavigate(
                        props.date,
                        props.localizer.add(props.date, -1, "month")
                      );
                    }}
                  >
                    <ArrowCircleLeftIcon
                      style={{
                        ...theme.typography.h3,
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        borderRadius: 50,
                      }}
                    />
                  </IconButton>

                  <IconButton
                    component="label"
                    onClick={(e) => {
                      props.onNavigate(
                        props.date,
                        props.localizer.add(props.date, 1, "month")
                      );
                      window.localStorage.setItem("calDate", props.date);
                    }}
                  >
                    <ArrowCircleRightIcon
                      style={{
                        ...theme.typography.h3,
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        borderRadius: 50,
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            );
          },
        }}
      />
    );
  };

  return (
    <Site title="Events">
      <Zoom in={true}>
        <StyledPage>
          <SiteHeader metaTitle="Upcoming Events" />
          <EventCalendar />
          <EventList key="evenlist" />
        </StyledPage>
      </Zoom>
    </Site>
  );
};

export default Calendar;
