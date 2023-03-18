import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { FormLabel, Button, IconButton, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import axios from "axios";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { StyledCalendar, StyledEventColumn } from "../styles/CalendarStyles";
import { StyledPage } from "../styles/PageStyles";
import Site from "../Site";
import { eventEmitter } from "../events.tsx";
import EventList from "../components/calendar/EventList";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import SiteHeader from "../components/page/PageHeader";
import EventForm from "../components/calendar/EventForm";
import EventDetail from "./EventDetail";

import { createMarkup } from "../apps/functions";

require("./calendar.css");

const localizer = momentLocalizer(moment);

// console.log(localizer);
const Calendar = (props) => {
  // console.log("calendars");
  const theme = useTheme();

  const history = useNavigate();

  const [selDate, setSelDate] = useState(
    new Date(theme?.global?.eventFillStart)
  );

  let saturdayLabel = "Local Dance";

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
          "/events?fields[0]=name&fields[1]=startTime&fields[2]=endTime&fields[3]=body&fields[4]=note&fields[5]=email&fields[6]=image_url&fields[7]=web_url&fields[9]=approved&fields[9]=lat&fields[1]=lng&fields[11]=street&fields[12]=city&fields[13]=state&fields[14]=zip&fields[15]=id&fields[16]=approved"
      )
      .then((res) => {
        setEvents(res);
        // window.localStorage.setItem("strapiEvents", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
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
    const year = new Date(selDate).getFullYear();
    const m = new Date(selDate).getMonth() - 1;
    const d = selDate.getDate();
    const saturdays = [];
    for (var month = m; month - m < 12; month++) {
      const daysinmonth = new Date(year, month, 0).getDate();
      let satCount = 0;
      for (var day = d; day - d < daysinmonth; day++) {
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
          to: "/page/beginnersr",
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

  const EventCalendar = () => {
    const [searchParams] = useSearchParams();
    const start = searchParams.get("start");

    // window.history.replaceState(null, null, "/page/ctdscalendar");

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
          // console.log(thisEvent.start);
          // console.log(thisEvent.end);
          arrayEvents.push(thisEvent);
        });
    }
    let navigate = {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE",
    };

    return (
      <div>
        <StyledCalendar
          // date={start === "" ? null : start}

          defaultView="agenda"
          localizer={localizer}
          events={arrayEvents}
          startAccessor="start"
          endAccessor="end"
          length={365}
          onNavigate={(event) => {
            eventEmitter.dispatch("NEWDATE", event);
          }}
          onChange={(event) => {}}
          components={{
            date: ({ label, day }) => {
              const future = new Date(day) > new Date();
              return (
                <div
                  style={{
                    borderRadius: 3,
                    backgroundColor: future
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                    color: future ? theme.palette.primary.contrastText : "#000", // greyed
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
                      ? theme.palette.primary.main
                      : theme.palette.grey[200], //the past is
                    color: future ? theme.palette.primary.contrastText : "#000", // greyed
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
                <StyledEventColumn
                  title={event.title}
                  style={{
                    borderColor: future
                      ? theme.palette.primary.main
                      : theme.palette.background.default, //the past is
                    color: future ? theme.palette.info.contrastLight : "#000", // greyed
                  }}
                >
                  {event.title === saturdayLabel ? (
                    <Link
                      style={{
                        display: "none",
                        ...theme.typography.body1,
                        textDecoration: "none",
                        // fontWeight: "bold",
                        // color: "#000666",
                        whiteSpace: "nowrap",
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      }}
                      to="/page/beginners"
                    >
                      {event.title}
                    </Link>
                  ) : (
                    <div style={{ position: "relative" }}>
                      <font
                        style={{
                          ...theme.typography.h6,
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,

                          textDecoration: "none",
                        }}
                      >
                        {event.title}
                      </font>

                      <font
                        style={{
                          ...theme.typography.body2,
                          color: theme.palette.common.black,
                          marginLeft: 5,
                          // backgroundColor: theme.palette.primary.main,
                        }}
                      >
                        <span
                          className="dangerMarkup"
                          dangerouslySetInnerHTML={createMarkup(event.body)}
                        ></span>
                      </font>
                      <EventDetail currentEvent={event} />
                    </div>
                  )}
                </StyledEventColumn>
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
                    <FormLabel
                      style={{
                        ...theme.typography.h5,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        padding: 3,
                        borderRadius: 10,
                      }}
                    >
                      {label
                        .replace(new Date().getFullYear(), "")
                        .replace("/ ", " ")}
                    </FormLabel>

                    <EventForm events={events.data.data} />
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
      <StyledPage>
        <SiteHeader metaTitle="Upcoming Events" />

        <EventCalendar />
      </StyledPage>
    </Site>
  );
};

export default Calendar;
