import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { getThumb, createMarkup } from "../../../apps/functions";
import { Button, Zoom } from "@mui/material";

import GoogleMapApp from "../../../apps/GoogleMapApp";
import LargeVideo from "./LargeVideo";

import RichEditor from "../Editor";

const Tabs = ({ section }) => {
  const [show, setShow] = useState("none");

  const theme = useTheme();
  const [slug, setSlug] = useState("");

  const [_tab, setTab] = useState("home");

  const showTab = (event) => {
    console.log(event.currentTarget.name);
    event.preventDefault();
    setTab(event.currentTarget.name);
  };
  const tabSectionThumb = getThumb(section?.picture?.data?.attributes);

  // console.log(section.tabs.tab.map((t) => t.slug));

  const TabHeader = () => {
    // console.log(tabSectionThumb);
    return (
      <div>
        <div
          style={{
            ...theme.flexRows,
            gap: 5,
          }}
        >
          {tabSectionThumb ? (
            <img src={process.env.REACT_APP_STRAPI + tabSectionThumb.url} />
          ) : null}
          {section.title && (
            <div style={{ ...theme.typography.h5, marginTop: "auto" }}>
              {section.title}
            </div>
          )}
          {section.description && (
            <div
              style={{
                ...theme.typography.body1,
                // ...theme.typography.fontWeightBold,
                // fontWeight: 600,
                fontStyle: "italic",
                marginBottom: "auto",
              }}
            >
              {section.description}
            </div>
          )}
        </div>
        <div
          style={{
            ...theme.flexRows,
            gap: 5,
          }}
        >
          {section?.tabs.title && (
            <div style={{ ...theme.typography.h6, marginTop: "auto" }}>
              {section.tabs.title}
            </div>
          )}
          {section?.tabs.description && (
            <div style={{ ...theme.typography.caption, marginTop: "auto" }}>
              {section.tabs.description}
            </div>
          )}
        </div>
      </div>
    );
  };

  const TabHomeTabButton = (section) => {
    // console.log(section?.section?.tabs?.type);
    console.log("");
    if (section?.section?.tabs?.type === "link") {
      return (
        <a
          name="home"
          onClick={showTab}
          style={{
            ...theme.typography.h5,

            textDecoration: "none",
            color:
              "home" === _tab
                ? theme.palette.primary.contrastDark
                : theme.palette.primary.dark,
            backgroundColor:
              "home" === _tab
                ? theme.palette.primary.dark
                : theme.palette.primary.contrastDark,
            display: "block",
            marginBottom: 10,
            width: "fit-content",
            // color: "green",
          }}
          href="#"
        >
          {section.section.label}
        </a>
      );
    }

    if (section?.section?.tabs?.type === "button") {
      return (
        <Button
          name="home"
          onClick={showTab}
          style={{
            backgroundColor: theme.palette.primary.contrastDark,
            marginBottom: 10,
            color:
              "home" === _tab
                ? theme.palette.primary.contrastDark
                : theme.palette.primary.dark,
            backgroundColor:
              "home" === _tab
                ? theme.palette.primary.dark
                : theme.palette.primary.contrastDark,
          }}
          variant="outline"
        >
          {section?.section?.label}
        </Button>
      );
    }
    if (section?.section?.tabs?.type === "image") {
      return (
        <a href="#">
          <img
            onClick={(e) => e.preventDefault()}
            src={process.env.REACT_APP_STRAPI + tabSectionThumb.url}
          />
        </a>
      );
    }
    return <div>nothing to make</div>;
  };

  const TabContent = ({ slug, inputs }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      setUser(window.localStorage.getItem("strapi_user") ? true : false);
    }, []);
    // {user ? <Editor content={section.content} /> : null}
    return (
      <div style={{ display: _tab === slug ? "block" : "none" }}>
        {inputs.map((input, key) => {
          return (
            <div key={key}>
              {user ? (
                <RichEditor
                  container={{
                    content: input.richtext,
                    field: "richtext",
                    id: input.id,
                    typename: input.__typename,
                  }}
                />
              ) : null}
              {input.richtext && (
                <div
                  dangerouslySetInnerHTML={createMarkup(input.richtext)}
                ></div>
              )}

              {input.playlist && (
                <div>
                  <LargeVideo section={input.playlist} />
                </div>
              )}

              {input.googleMap && (
                <div>
                  <GoogleMapApp
                    lat={input.googleMap.lat}
                    lng={input.googleMap.lng}
                    zoom={input.googleMap.zoom}
                    markerText={input.googleMap.markerText}
                    markerImage={input.googleMap.markerImage}
                    description={input.googleMap.richtext}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const TabButton = ({ tab }) => {
    // console.log(tab);
    const tabThumb = getThumb(tab.limage?.data?.attributes);
    return (
      <div name="tabButtonWrap">
        {tab.type === "button" && (
          <Button
            style={{
              color:
                tab.slug === _tab
                  ? theme.palette.primary.contrastDark
                  : theme.palette.primary.dark,
              backgroundColor:
                tab.slug === _tab
                  ? theme.palette.primary.dark
                  : theme.palette.primary.contrastDark,
            }}
            name={tab.slug}
            onClick={showTab}
            id={tab.slug}
            //onClick={(e) => handleTabClick()}
            variant="outline"
          >
            {tab.label}
          </Button>
        )}

        {tab.type === "link" && (
          <a
            onClick={showTab}
            name={tab.slug}
            style={{
              ...theme.typography.h5,
              textDecoration: "none",
              width: "fit-content",
              // backgroundColor: theme.palette.background.default,
              // padding: 3,
              // borderRadius: 15,
              // borderBottom: 20,
              // border: "1px solid blue",
            }}
            href="#"
          >
            {tab.label}
          </a>
        )}
      </div>
    );
  };

  const TabButtons = ({ tabs }) => {
    return (
      <div style={{ ...theme.flexRows, gap: 5 }}>
        {tabs.tab.map((tab, key) => {
          return <TabButton key={key} tab={tab} />;
        })}
      </div>
    );
  };
  if (!section.tabs) {
    return <TabHeader section={section} />;
  }
  return (
    <div>
      <TabHeader section={section} />
      <TabHomeTabButton section={section} />
      <TabButtons tabs={section.tabs} />
      <div>
        {section.tabs.tab.map((tab, key) => {
          return (
            <div key={key}>
              <TabContent slug={tab.slug} inputs={tab.inputs} />
            </div>
          );
        })}
        <div>
          <TabContent slug="home" inputs={section.inputs} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
