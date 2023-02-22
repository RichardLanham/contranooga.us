import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMutation, useQuery } from "@apollo/client";
import client from "../../apollo/client";
import { eventEmitter } from "../../events.tsx";
import { SundayTemplate } from "../../Model";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

import {
  StyledCard,
  StyledEventList,
  StyleEventButton,
} from "../../styles/CalendarStyles";

import ConfirmButtons from "../../components/ConfirmButtons";
import { GET_EVENTS, DELETE_EVENT } from "../../gql/events";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

const compFn = (a, b) => {
  if (a.attributes.startTime < b.attributes.startTime) {
    return -1;
  } else if (a.attributes.startTime > b.attributes.startTime) {
    return 1;
  }
  return 0;
};

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const EventList = () => {
  console.log("eventList");
  const [user, setUser] = useState(false);
  const [calDate, setCalDate] = useState(new Date());
  const delEvent = useMutation(DELETE_EVENT);

  const [images, setImages] = useState({ data: [] });
  const [pages, setPages] = useState("");

  const [message, setMessage] = useState("");
  useEffect(() => {
    client.refetchQueries({
      include: [GET_EVENTS],
    });
    const storedPages = theme.pages; //JSON.parse(window.localStorage.getItem("strapiPages"));

    setPages(storedPages);

    setImages(JSON.parse(window.localStorage.getItem("strapiImages")));
  }, []);

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

  const is2ndor4th = (dt) => {
    const secondSaturday = new Date();
    const fourthSaturday = new Date();
    const firstDay = new Date(dt.getFullYear(), dt.getMonth(), 1);
    secondSaturday.setDate(14 - firstDay.getDay());
    // console.log(secondSaturday.toLocaleDateString());
    fourthSaturday.setDate(28 - firstDay.getDay());
    // console.log(fourthSaturday.toLocaleDateString());

    if (
      dt.getDate() === secondSaturday.getDate() ||
      dt.getDate() === fourthSaturday.getDate()
    ) {
      return true;
    }
    return false;
  };

  function saturdaysInFuture(numDays) {
    const dt = new Date(calDate);
    const saturdays = [];

    for (let i = 0; i < numDays; i++) {
      const thisDay = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        dt.getDate() + i,
        8
      );
      if (thisDay.getDay() === 6) {
        // sundays.push(thisDay.getDate());
        const isOkay = is2ndor4th(thisDay);
        // console.log(thisDay);
        if (isOkay) {
          saturdays.push(thisDay);
        }
      }
    }
    //    console.log(sundays);
    return saturdays;
  }
  const handleDeleteEvent = (id) => {
    delEvent[0]({ variables: { id: id } });
  };

  const theme = useTheme();
  const EventCard = ({ event_ }) => {
    // EVENT CARD HERE<<<
    const handleImageChange = (e) => {
      setImage(e.target.value);
    };
    const handlePageChange = (e) => {
      setPage(e.target.value);
    };
    const link = Array.isArray(event_.attributes.link)
      ? event_.attributes.link[0]
      : false;

    // const eventEntity = event_.__typename === "EventEntity";

    const lessons = event_.attributes.lessons
      ? event_.attributes.lessons
      : false;

    const psalms = event_.attributes.psalms ? event_.attributes.psalms : false;
    const imageAttribute = event_.attributes.image.data
      ? event_.attributes.image.data
      : false;

    const attribs = event_.attributes;

    const sundays = event_.sundays ? event_.sundays : false;
    const lectionary = event_.lectionary ? event_.lectionary : false;
    const [showEdit, setShowEdit] = useState(false);
    const [image, setImage] = useState("none");
    const [page, setPage] = useState("none");
    const [elink, seteLink] = useState("");

    const [fromDateTime, setFromDateTime] = useState(new Date());
    const [toDateTime, setToDateTime] = useState(new Date());

    const submit = (e) => {
      // console.log("submit");
      // return;
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

      request.open(
        "PUT",
        process.env.REACT_APP_STRAPI_API + `/events/${event_.id}`
      );

      request.setRequestHeader(
        "Authorization",
        "Bearer " + window.localStorage.getItem("strapi_jwt")
      );

      request.send(formData);
      setTimeout(() => {
        client.refetchQueries({
          include: [GET_EVENTS],
        });
        // getEvents();
        eventEmitter.dispatch("EVENTUPDATE", true);
      }, 1000);
    };

    useEffect(() => {
      setFromDateTime(attribs.startTime);
      setToDateTime(attribs.endTime);
      setImage(attribs.image.data ? attribs.image.data.id : "none");
      seteLink(attribs.link);
      setPage(
        attribs.link
          ? attribs.link.length > 0
            ? attribs.link[0].url.replace("/", "")
            : "none"
          : "none"
      );

      setUser(window.localStorage.getItem("strapi_user") ? true : false);
      eventEmitter.subscribe(
        "NEWDATE",
        (val) => {
          setCalDate(new Date(val));
        },
        []
      );
      return () => {
        eventEmitter.unsubscribe("NEWDATE");
      };
    }, []);
    const EditButton = () => {
      if (!user) {
        return <span></span>;
      }
      //  if (!show) {
      return (
        <div
          style={{
            position: "relative",
            top: 0,
            right: 0,
            borderRadius: 5,
            zIndex: theme.zIndex.fab,
          }}
        >
          <Button
            variant="contained"
            style={{
              marginLeft: 10,
              backgroundColor: theme.palette.info.light,
              color: theme.palette.info.contrastLight,
              boxShadow: theme.shadows[5],
            }}
            onClick={() => setShowEdit(true)}
          >
            Edit
          </Button>
        </div>
        //  );

        //   return (
        //     <div>
        //       <Button onClick={() => setShow(false)}>Close Edit</Button>
        //     </div>
      );
    };

    const DeleteButton = () => {
      if (!user) {
        return <span></span>;
      }
      return (
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: theme.zIndex.fab,
            boxShadow: theme.shadows[5],
          }}
        >
          <ConfirmButtons
            action={handleDeleteEvent}
            args={event_.id}
            label="delete"
          >
            Delete
          </ConfirmButtons>
        </div>
      );
    };
    const ListSundays = (sundays) => {
      return (
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {sundays.map((sunday, key) => {
            const dt = new Date(sunday);
            return (
              <div
                key={key}
                style={{
                  // backgroundColor: "yellow",
                  // boxShadow: theme.shadows[2],
                  // borderBottom: "1px solid",
                  marginRight: 5,
                  borderColor: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.light,
                  // borderRadius: 5,
                  padding: 2,
                }}
              >
                {dt
                  .toDateString()
                  .replace("Sun ", "")
                  .replace(dt.getFullYear(), "")}
              </div>
            );
          })}
        </div>
      );
    };

    //   // console.log(lessons);
    //   return (
    //     <div
    //       style={{ ...theme.typography.h6, display: "flex", flexWrap: "wrap" }}
    //     >
    //       {lessons.morning ? (
    //         <ul>
    //           Morning Lessons
    //           <li> {lessons.morning.first}</li>
    //           <li> {lessons.morning.second}</li>
    //         </ul>
    //       ) : null}
    //       {lessons.evening ? (
    //         <ul>
    //           Evening Lessons
    //           <li> {lessons.evening.first}</li>
    //           <li> {lessons.evening.second}</li>
    //         </ul>
    //       ) : null}
    //       {psalms.morning ? (
    //         <ul>
    //           Morning Psalms
    //           {psalms.morning.map((psalm, key) => (
    //             <li key={key}>{psalm}</li>
    //           ))}
    //         </ul>
    //       ) : null}
    //       {psalms.evening ? (
    //         <ul>
    //           Evening Psalms
    //           {psalms.evening.map((psalm, key) => (
    //             <li key={key}>{psalm}</li>
    //           ))}
    //         </ul>
    //       ) : null}
    //     </div>
    //   );
    // };
    const thumb = imageAttribute
      ? imageAttribute.attributes.formats.thumbnail
      : false;

    if (!showEdit) {
      return (
        <StyledCard>
          <a
            style={{ position: "relative", top: -100 }}
            id={attribs.name ? attribs.name.replaceAll(" ", "") : "sundayBox"}
          ></a>
          {sundays || lessons ? null : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWra: "wrap",
              }}
            >
              <DeleteButton />
              <EditButton />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              component={"span"}
              style={{
                boxShadow: theme.shadows[2],
                color: theme.palette.primary.contrastLight,
                backgroundColor: theme.palette.primary.light,
                borderRadius: 10,
                padding: 2,
              }}
              variant="h5"
            >
              {attribs.name}
            </Typography>
            <Typography
              style={{
                marginLeft: 20,
                // padding: 6,
                // borderRadius: 5,
                // boxShadow: theme.shadows[2],
                // color: theme.palette.primary.contrastLight,
                // backgroundColor: theme.palette.primary.light,
              }}
              variant="h5"
            >
              {sundays
                ? ListSundays(sundays)
                : new Date(attribs.startTime)
                    .toDateString()
                    .replace("Sun ", "")
                    .replace(dt.getFullYear(), "")}
            </Typography>
          </div>
          <div>
            <div>
              <div
                style={{
                  // backgroundColor: theme.palette.primary.main,
                  display: "flex",
                  gap: 5,
                }}
              >
                {/* {thumb && (
                  <StyledImg
                    height={thumb.height}
                    width={thumb.width}
                    src={
                      sundays
                        ? "https://stage.uglytree.cafe/grace_image.png"
                        : process.env.REACT_APP_STRAPI + thumb.url
                    }
                  ></StyledImg>
                )} */}
                <p
                  style={{
                    ...theme.typography.h6,
                    display: "inline",
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  {attribs.body}
                </p>
              </div>

              <div>
                {link && (
                  <div>
                    {link.url.startsWith("http") ? (
                      <StyleEventButton
                        href={link.url}
                        target="_blank"
                        startIcon={<OpenInNewIcon />}
                      >
                        {link.text}
                      </StyleEventButton>
                    ) : (
                      <Link to={"/page" + link.url}>
                        <StyleEventButton>{link.text} </StyleEventButton>
                      </Link>
                    )}
                  </div>
                )}
                {link && (
                  <div
                    style={{
                      ...theme.typography.caption,
                      ...theme.typography.h5,
                    }}
                  >
                    {link.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        </StyledCard>
      );
    }
    return (
      <StyledCard>
        <div style={{ display: "flex" }}>
          <DeleteButton />

          <Button
            onClick={() => setShowEdit(false)}
            style={{
              position: "relative",
              top: 0,
              right: 0,
              backgroundColor: theme.palette.info.light,
              color: theme.palette.info.contrastLight,
              zIndex: theme.zIndex.fab,
            }}
          >
            Close
          </Button>
        </div>
        <div>
          <form>
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
                    defaultValue={attribs.name}
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
                    defaultValue={attribs.body}
                    placeholder="Body text"
                    style={{ width: "100%", minHeight: 100 }}
                  />
                </div>
              </div>
              <div>
                <FormLabel>Display in </FormLabel>
                <Select name="display" defaultValue={attribs.display}>
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
                  style={{
                    display: image === "none" ? "none" : "inline",
                  }}
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
                  defaultValue={elink.length > 0 ? elink[0].text : ""}
                  placeholder="link label"
                  style={{
                    backgroundColor: theme.palette.background.default,
                  }}
                ></TextField>
                <TextField
                  name="description"
                  defaultValue={elink.length > 0 ? elink[0].description : ""}
                  placeholder="link description"
                  style={{
                    backgroundColor: theme.palette.background.default,
                  }}
                ></TextField>
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
            Update
          </Button>
          <Button
            onClick={() => setShowEdit(false)}
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
        </div>
      </StyledCard>
    );
  };

  const dt = calDate; //new Date();
  //const sundays = sundaysInMonth(dt.getMonth() + 1, dt.getFullYear());
  const sundays = saturdaysInFuture(31);
  const year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  const monthDay = dt.getDate();
  // const weekDay = dt.getDay();

  if (month < 10) {
    month = "0" + month;
  }

  const daysInCurrentMonth = getDaysInMonth(year, month);

  // prep for graphql query
  const t2 = new Date(calDate.toISOString().split("T")[0]);
  t2.setDate(t2.getDate() - 1);
  const iso = t2.toISOString().split(".")[0] + "Z";
  const temp = new Date(iso);
  temp.setDate(temp.getDate() + 31);
  const isoTo = temp.toISOString().split(".")[0] + "Z";

  // console.log(new Date(iso) + " " + new Date(isoTo));
  // let sundayLectionary = {};
  let today = {};
  // const { data, loading, error } = useQuery(GET_LECTIONARY, {
  //   client: client,
  //   variables: { dt: iso.split("T")[0] },
  // });
  // if (!loading) {
  //   if (!error) {
  //     if (data.lectionaries.data.length > 0) {
  //       // console.log(data);
  //       // console.log(data.lectionaries.data[0].attributes);
  //       // setLectSunday(JSON.parse(data.lectionaries.data[0].attributes.sunday));
  //       // setLectToday(JSON.parse(data.lectionaries.data[0].attributes.today));
  //       // setLectSunday(JSON.parse(data.lectionaries.data[0].attributes.sunday));
  //       today = JSON.parse(data.lectionaries.data[0].attributes.today);
  //       sundayLectionary = JSON.parse(
  //         data.lectionaries.data[0].attributes.sunday
  //       );
  //     }
  //   }
  // }

  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useQuery(GET_EVENTS, {
    variables: { dt: iso, to: isoTo },
    // fetchPolicy: "no-cache",
    // nextFetchPolicy: "network-first",
  });
  // console.log(JSON.stringify({ dt: iso, to: isoTo }, null, 3));

  //if (loading) return <div>loading</div>;
  if (loading2 && !data2) return <div>Loading...</div>;
  if (error2) return <pre>{JSON.stringify(error2, null, 3)}</pre>;

  const ret = data2.events.data;

  SundayTemplate.id = ret.length + 1;
  SundayTemplate.sundays = sundays;
  // SundayTemplate.lectionary = sundayLectionary;

  const newDt = new Date(sundays[0]);
  // console.log(newDt);
  SundayTemplate.attributes.startTime = newDt.toISOString();
  // console.log(ret);
  // console.log(holydays);
  const yr = new Date().getFullYear();

  // console.log(holy2);
  const lst = [
    ...ret
      .filter((h) => h.attributes.startTime >= iso)
      .filter((h) => h.attributes.endTime <= isoTo),
    SundayTemplate,
  ].sort(compFn);

  const list = user
    ? lst
    : lst.filter((r) => r.attributes.display !== "Banner");
  // console.log(list);
  //const list = [...ret, SundayTemplate].sort(compFn);
  // const list = [...ret].sort(compFn);

  return (
    <StyledEventList>
      {list.map((event_, key) => {
        return <EventCard key={key} event_={event_} />;
      })}
    </StyledEventList>
  );
};

export default EventList;
