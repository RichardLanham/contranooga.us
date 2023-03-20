import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button, Zoom } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import axios from "axios";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { StyledCalendar, StyledEventColumn } from "../styles/CalendarStyles";
import { StyledPage } from "../styles/PageStyles";
import Site from "../Site";
import { eventEmitter } from "../events.tsx";
// import EventList from "../components/calendar/EventList";

// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import SiteHeader from "../components/page/PageHeader";
import EventForm from "../components/calendar/EventForm";
// import EventDetail from "./EventDetail";

// import CustomAgenda from "./CustomAgenda";

// import { createMarkup } from "../apps/functions";

// import agenda from "./customAgendaView";

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

  // const StyledCalendarCell = styled("div")(({ theme }) => ({
  //   // width: "35%",
  //   [theme.breakpoints.down("lg")]: {},
  //   [theme.breakpoints.down("md")]: {
  //     ...theme.typography.body1,
  //     width: "80%",
  //     minHeight: 100,
  //     height: "fit-content",
  //   },
  //   [theme.breakpoints.down("sm")]: { maxWidth: 150 },
  // }));

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

    const [current, setCurrent] = useState({ empty: true });

    const [showDetail, setShowDetail] = useState(false);

    // const toggleDetails = () => {
    //   setShowDetails((prev) => !prev);
    // };

    const handleClick = (c) => {
      console.log(c);
      const cur = Object.assign({}, current);
      cur.Test = "test";
      setCurrent(c);
      setShowDetail((prev) => !prev);
    };

    const StyledCard = styled("div")(({ theme }) => ({
      zIndex: theme.zIndex.tooltip,
      position: "fixed",
      left: 50,
      width: 600,
      // top: 0,
      // border: "1px solid red",
      // left: -100,
      zIndex: 5000,
      backgroundColor: theme.palette.background.default,
      // display: "inline",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        width: 340,
        left: 5,
      },
      [theme.breakpoints.down("sm")]: {
        top: 170,
        width: "90vw",
        left: 3,
      },
    }));
    const EventDetail = () => {
      return (
        <Zoom in={true}>
          <StyledCard
            style={{ display: current?.empty === true ? "none" : "block" }}
          >
            <Button onClick={() => setCurrent({ empty: true })}>close</Button>
            <pre>{JSON.stringify(current, null, 3)}</pre>
          </StyledCard>
        </Zoom>
      );
    };
    return (
      <div>
        <EventDetail />
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
                <div
                  style={{
                    borderRadius: 3,
                    backgroundColor: future
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                    color: future ? theme.palette.primary.contrastText : "#000", // greyed
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <div>{label}</div>
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
                    maxWidth: 70,
                    //overflow: "hidden",
                    // border: "1px solid yellow",
                    borderRadius: 3,
                    backgroundColor: future
                      ? theme.palette.primary.main
                      : theme.palette.grey[200], //the past is
                    color: future ? theme.palette.primary.contrastText : "#000", // greyed
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <div>{from_}</div>
                  <div style={{ display: "none" }}>{to_}</div>
                </div>
              );
            },
            event: ({ event }) => {
              return (
                <div
                  title="click for details"
                  onClick={() => handleClick({ event })}
                  style={{ cursor: "pointer", minHeight: 40 }}
                >
                  {event.title}{" "}
                  <span style={{ ...theme.typography.caption }}>...</span>
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
                      <span
                        style={{
                          ...theme.typography.caption,
                          fontFamily: "monospace",
                          paddingLeft: 10,
                        }}
                      >
                        click the event name to see details
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
      <StyledPage>
        <SiteHeader metaTitle="Upcoming Events" />

        <EventCalendar />
        <EventForm events={events.data.data} />
      </StyledPage>
    </Site>
  );
};

export default Calendar;
