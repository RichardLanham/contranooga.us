import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { getThumb, createMarkup } from "../../../apps/functions";
import { Button, Zoom } from "@mui/material";

import { LargeVideo, GoogleMap } from "../PageSections";
import GoogleMapApp from "../../../apps/GoogleMapApp";

const Tabs = ({ section }) => {
  const [show, setShow] = useState("none");

  const theme = useTheme();
  const [slug, setSlug] = useState("");

  const showTab = (e) => {
    console.log(e.currentTarget.name);
    e.preventDefault();
    setSlug(e.currentTarget.name);
  };
  const tabSectionThumb = getThumb(section?.picture?.data?.attributes);

  console.log(section.tabs.tab.map((t) => t.slug));

  const TabHeader = () => {
    // console.log(tabSectionThumb);
    return (
      <div>
        <img src={process.env.REACT_APP_STRAPI + tabSectionThumb.url} />
        <div>{section.label}</div>
        <div>{section.description}</div>
        <div>{section.title}</div>
      </div>
    );
  };

  const TabHomeTabButton = (section) => {
    // console.log(section?.section?.tabs?.type);
    if (section?.section?.tabs?.type === "link") {
      return (
        <a
          onClick={(e) => e.preventDefault()}
          name="HomeTabButton"
          style={{
            ...theme.typography.h5,
            textDecoration: "none",
            backgroundColor: theme.palette.background.default,
            padding: 3,
            borderRadius: 15,
            borderBottom: 20,
            border: "1px solid blue",
          }}
          href="#"
        >
          {section.section.tabs.title}
        </a>
      );
    }

    if (section?.section?.tabs?.type === "button") {
      return <Button variant="outline">{section?.section?.tabs?.title}</Button>;
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

  const TabContent = ({ inputs }) => {
    return (
      <div>
        {inputs.map((input, key) => {
          return (
            <div key={key}>
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
                    description={input.googleMap.description}
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
    console.log(tab);
    const tabThumb = getThumb(tab.limage?.data?.attributes);
    return (
      <div name="tabButtonWrap">
        {tab.type === "button" && (
          <Button
            name={tab.label}
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
            onClick={(e) => e.preventDefault()}
            name="HomeTabButton"
            style={{
              ...theme.typography.h5,
              textDecoration: "none",
              backgroundColor: theme.palette.background.default,
              padding: 3,
              borderRadius: 15,
              borderBottom: 20,
              border: "1px solid blue",
            }}
            href="#"
          >
            {tab.label}
          </a>
        )}
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
      <div>
        {section.tabs.tab.map((tab, key) => {
          return (
            <div key={key}>
              <TabButton tab={tab} />
              <TabContent inputs={tab.inputs} />
            </div>
          );
        })}
        <div>
          <TabContent inputs={section.inputs} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
