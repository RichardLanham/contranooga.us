import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  StyledCalendar,
  StyledEventButton,
  StyledDateTime,
} from "../styles/CalendarStyles";
import { StyledCalendarPage } from "../styles/PageStyles";
import Site from "../Site";
import { eventEmitter } from "../events.tsx";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import SiteHeader from "../components/page/PageHeader";
import EventForm from "../components/calendar/EventForm";
import EventDetail from "../components/calendar/EventDetail";
// import { createMarkup } from "../apps/functions";
require("./css/calendar.css");

const localizer = momentLocalizer(moment);
const Calendar = (props) => {
  // console.log("calendars");
  const theme = useTheme();
  const [selDate, setSelDate] = useState(
    new Date(theme?.global?.eventFillStart)
  );

  //  let saturdayLabel = "Local Dance";

  const [events, setEvents] = useState({
    data: {
      data: [],
    },
  });
  // const [suns, setSuns] = useState([]);
  const [user, setUser] = useState(null);

  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");

  const toggleDrawer = () => {
    eventEmitter.dispatch("TOGGLE_DRAWER");
  };

  useEffect(() => {
    // console.log(fillStart);
    // setFillStart(theme.global.eventFillStart);
    setSelDate(new Date(theme?.global?.eventFillStart));
  }, [theme]);

  useEffect(() => {
    const storedPages = theme.pages; // JSON.parse(window.localStorage.getItem("strapiPages"));

    setPages(storedPages);
  }, [theme.pages]);

  useEffect(() => {
    // console.log(selDate);

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

  const getEvents = () => {
    axios
      .get(
        process.env.REACT_APP_STRAPI_API +
          "/events?fields[0]=name&fields[1]=startTime&fields[2]=endTime&fields[3]=body&fields[4]=note&fields[5]=email&fields[6]=image_url&fields[7]=web_url&fields[9]=approved&fields[9]=lat&fields[1]=lng&fields[11]=street&fields[12]=city&fields[13]=state&fields[14]=zip&fields[15]=id&fields[16]=approved&fields[17]=link_label&fields[18]=link_description"
      )
      .then((res) => {
        const rs = JSON.parse(JSON.stringify(res));

        const dt = rs.data.data.splice(0);

        dt.sort((a, b) => {
          // a.attributes.startTime < b.attributes.startTime;
          if (a.attributes.startTime < b.attributes.startTime) {
            return -1;
          }
        });
        rs.data.data = dt;

        setEvents(rs);
        // window.localStorage.setItem("strapiEvents", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
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

    // await getEvents();
  }, []);

  const EventCalendar = () => {
    const [searchParams] = useSearchParams();
    const start = searchParams.get("start");

    // window.history.replaceState(null, null, "/page/ctdscalendar");

    let thisEvent = {};
    //    console.log(holydays);
    const arrayEvents = [];
    const allEvents = [...events.data.data];

    if (user) {
      allEvents.map((ev) => {
        thisEvent = {};
        thisEvent.title = ev.attributes.name;
        thisEvent.start = new Date(ev.attributes.startTime);
        thisEvent.end = new Date(ev.attributes.endTime);
        thisEvent.body = ev.attributes.body;
        thisEvent.id = ev.id;
        arrayEvents.push(thisEvent);
      });
    } else {
      allEvents
        .filter((ev) => ev.attributes.approved === true)
        .map((ev) => {
          thisEvent = {};
          thisEvent.title = ev.attributes.name;
          thisEvent.start = new Date(ev.attributes.startTime);
          thisEvent.end = new Date(ev.attributes.endTime);
          thisEvent.body = ev.attributes.body;
          thisEvent.id = ev.id;
          arrayEvents.push(thisEvent);
        });
    }
    let navigate = {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE",
    };

    const [current, setCurrent] = useState({ empty: true });

    const [showDetail, setShowDetail] = useState(false);

    const handleClick = (c) => {
      const cur = Object.assign({}, current);
      setCurrent(c);
      // setShowDetail((prev) => !prev);
    };
    // console.log(current?.event?.id);
    return (
      <div onTouchStart={toggleDrawer}>
        {!current?.empty && <EventDetail currentID={current?.event?.id} />}
        <StyledCalendar
          defaultView="agenda"
          localizer={localizer}
          events={arrayEvents}
          startAccessor="start"
          endAccessor="end"
          length={365}
          // onNavigate={(event) => {
          //   eventEmitter.dispatch("NEWDATE", event);
          // }}
          // onChange={(event) => {}}
          components={{
            date: ({ label, day }) => {
              const future = new Date(day) > new Date();
              return (
                <StyledDateTime
                  style={{
                    color: future
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                    backgroundColor: future
                      ? theme.palette.primary.contrastText
                      : "#000", // greyed
                  }}
                >
                  <div>{label}</div>
                </StyledDateTime>
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
                <StyledDateTime
                  style={{
                    // maxWidth: 60,
                    //overflow: "hidden",
                    // border: "1px solid yellow",

                    color: future
                      ? theme.palette.primary.main
                      : theme.palette.grey[200], //the past is
                    backgroundColor: future
                      ? theme.palette.primary.contrastText
                      : "#000", // greyed
                  }}
                >
                  <div>{from_}</div>
                  <div style={{ display: "none" }}>{to_}</div>
                </StyledDateTime>
              );
            },
            event: ({ event }) => {
              // console.log(event.id);
              // console.log(current.id);
              return (
                <div>
                  <StyledEventButton
                    title="click for details"
                    onClick={() => handleClick({ event })}
                    style={{
                      backgroundColor:
                        current.id == event.id
                          ? theme.palette.primary.main
                          : "none",
                      color:
                        current.id == event.id
                          ? theme.palette.primary.contrastText
                          : "none",
                    }}
                  >
                    {event.title}
                    <span
                      style={{
                        ...theme.typography.subtitle2,
                        fontFamily: "Roboto",
                      }}
                    >
                      &nbsp;info...
                    </span>
                  </StyledEventButton>
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
                <div>
                  <div
                    style={{
                      // display: "none",
                      position: "relative",
                      marginRight: "auto",
                      // marginTop: 20,
                      // marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        border: "1px none blue",
                        paddingLeft: 10,
                        ...theme.typography.body1,
                        backgroundColor: theme.palette.info.main,
                        color: theme.palette.info.contrastText,
                        width: "fit-content",
                        borderRadius: 5,
                      }}
                    >
                      {label}

                      <IconButton
                        component="label"
                        onClick={(e) => {
                          props.onNavigate(
                            props.date,
                            props.localizer.add(props.date, -1, "year")
                          );
                        }}
                      >
                        <ArrowCircleLeftIcon
                          style={{
                            // ...theme.typography.h3,
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
                            props.localizer.add(props.date, 1, "year")
                          );
                          window.localStorage.setItem("calDate", props.date);
                        }}
                      >
                        <ArrowCircleRightIcon
                          style={{
                            // ...theme.typography.h3,
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText,
                            borderRadius: 50,
                          }}
                        />
                      </IconButton>
                      {user && <EventForm events={events.data.data} />}
                      <span
                        style={{
                          ...theme.typography.caption,
                          ...theme.label,
                          fontFamily: "monospace",
                          // paddingLeft: 10,
                          display: "none", // make them look like buttons..
                        }}
                      >
                        click name for details
                      </span>
                    </div>
                  </div>
                </div>
              );
            },
          }}
        />
      </div>
    );
  };

  return (
    <Site title="Events">
      <StyledCalendarPage>
        <SiteHeader metaTitle="Upcoming Events" />
        <EventCalendar />
        <EventForm events={events.data.data} />
      </StyledCalendarPage>
    </Site>
  );
};

export default Calendar;
