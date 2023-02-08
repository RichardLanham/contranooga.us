import React from "react";
import { Typography, Box } from "@mui/material";
// import { Link } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../Site";
// import { useLocation } from "react-router-dom";

import {
  StyledPageContent,
  StyledPage,
  StyledHeading,
  StyledBody,
} from "../styles/ComponentStyles";

// import { movies } from "../Model";
// import { moveSyntheticComments } from "typescript";

const About = () => {
  const theme = useTheme();

  const StyledAnchor = styled("a")(({ theme }) => ({
    // backgroundColor: theme.palette.background.default,
    ...theme.typography.overline,
    margin: 3,
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.info.contrastDark,
    textDecoration: "none",
    padding: 1,
    [theme.breakpoints.down("md")]: {},
  }));

  return (
    <Site title="About">
      <StyledPage>
        <StyledBody style={{ textAlign: "left" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              marginTop: 30,
            }}
          >
            <Typography variant="h3">App About</Typography>
            <div>
              This is a React 17.02 app with
              <StyledAnchor target="new" href="https://strapi.io/">
                Strapi/Postgres
              </StyledAnchor>{" "}
              backend and
              <StyledAnchor target="new" href="https://www.meilisearch.com/">
                Meilisearch.
              </StyledAnchor>
              It is deployed via github on a Digital Ocean Ubuntu/nginx server.
              This is under development. 6/16/2022
            </div>
            <div>
              <Typography variant="h5">Notable frontend packages:</Typography>
              <ul style={{ listStylePosition: "inside" }}>
                <li>React, react-router-dom</li>
                <li>
                  <StyledAnchor
                    target="new"
                    href="https://github.com/mui/material-ui"
                  >
                    MUI
                  </StyledAnchor>{" "}
                  (Material UI) 5
                </li>
                <li>
                  React-DND (drag &amp; drop), with mobile and desktop backends
                </li>
                <li>Apollo Client for Strapi's GraphQl</li>
                <li>
                  react-helmet-async &mdash; an async fork of Helmet published
                  by the
                  <StyledAnchor
                    target="new"
                    style={{ margin: 3 }}
                    href="https://open.nytimes.com/the-future-of-meta-tag-management-for-modern-react-development-ec26a7dc9183"
                  >
                    Times
                  </StyledAnchor>
                </li>
                <li>
                  react-big-calendar is the calendar widget used by an
                  event/calendar app
                </li>
              </ul>
              <Typography variant="h5">Backend</Typography>
              <ul style={{ listStylePosition: "inside" }}>
                <li>Strapi with Postgresql & GraphQL</li>
                <li>MeiliSearch</li>
                <li>Sendgrid Strapi plugin</li>
              </ul>
              <Typography variant="h5">Features</Typography>
              <ul style={{ listStylePosition: "inside" }}>
                <li>
                  Calendar/event app
                  <ul>
                    <li>
                      uses the react-big-calendar widget and MUI date picker.
                      The event data is stored in Strapi. It has inline event
                      CRUD, which neccessary instead of using the Strapi admin
                      because it brings files and images from the Strapi data
                      for the user to select in creating an event. And has the
                      nice MUI date picker. For the church use case, it
                      conveniently calculates a year of Sundays for display as
                      events. The top controls, and columns for date, time &amp;
                      event are customized. The view is locked to 'agenda',
                      showing a rolling 30 days from today with the events in
                      that range. A card for each event is displayed below with
                      image and full text.
                    </li>
                    <li>
                      I also rolled in the RCL Lectionary data to display holy
                      days with morning & evening prayers & psalms for each.
                      [link to source: missing]
                    </li>
                  </ul>
                </li>
                <li>
                  Timed banner system
                  <ul>
                    <li>
                      Leverages the Event UI and data to display timed banners:
                      displays that overlay content on entry that the user must
                      dismiss. The system uses start and end date-time of the
                      event system. Banners can overlap in time, and stack in
                      the UI.
                    </li>
                  </ul>
                </li>
                <li>
                  MUI Color Tool
                  <ul>
                    <li>
                      is a MUI Theme builder that leverages thecolorapi.com
                      &mdash; for a color assist. It answers the dummy question,
                      what colors go with this color? Several sets are provided
                      for a 'seed' hex, including monochrome, complement,
                      analogic-complement, quad and triad. The user has a
                      drag&drop UI to make selections, which can be applied to
                      the site immediately. The tool focuses on the six built-in
                      named colors (primary, secondary, warn, info, success and
                      error) and the tonal-offset that is used to generate light
                      and dark shades of each color. A visual palette allows
                      tweaking individual shades.
                    </li>
                    <li>
                      Added font-family options to select between installed
                      google fonts. This changes all the fontFamly fields of the
                      MUI theme.
                    </li>
                    <li>
                      Added saved themes. Use case is liturgical seasons, and
                      other e.g. mourning
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  Meilisearch
                  <ul>
                    <li>Displaying page index results.</li>
                  </ul>
                </li>
                <li>
                  Theme and graphics
                  <ul>
                    <li>
                      Using Material UI colors/shades, typography, icons, and
                      other features. The background image is a picture I took
                      with a camera drone, and the App bar background is a
                      picture of an iris I took with my phone. I don't expect
                      those images to be used in production, but it's possible.
                      &#128512;
                    </li>
                  </ul>
                </li>
              </ul>

              <Typography variant="h5">comments</Typography>
              <ul style={{ listStylePosition: "inside" }}>
                <li>
                  Strapi
                  <ul>
                    <li>
                      Strapi is a 'headless-cms': an agnostic DBMS with CMS
                      types that features a 'shadow crud', which creates the
                      (get, post, put, delete) endpoints (rest &amp; graphql)
                      for each entity and other features. It is not entirely
                      headless in that it has an admin UI, but it is
                      data-centric, and not a site-builder. It is entirely empty
                      except for a User table by default but I leveraged and
                      extended the Strapi corporate template, a highly useful
                      boiler plate.
                    </li>
                    <li>
                      Strapi wraps the Node/DB tier. It obviates the
                      node/express app and a DBMS -- at least for routine tasks.
                      It provides life-cycle hooks for entities, custom
                      endpoints, plugins for email, storage, etc. It's a
                      bulldozer of a tool.
                    </li>
                    <li>
                      It uses the Sharp library to create several versions of
                      each image, large, medium, small and thumbnail. The
                      current beta (4.3.0) adds folder structure for media that
                      I'm looking forward to. (I have written that before, using
                      Sharp and folder distribution in node/express, but I'm
                      glad it's built-in.)
                    </li>
                  </ul>
                </li>
                <li>
                  Meilisearch
                  <ul>
                    <li>
                      Solves the intractable problems of site search. Strapi
                      integration is simple. Meilisearch is an easy fit for the
                      category/item structure of inventory data, however the
                      indexable data for this app is buried in the
                      Page/repeatable-element structure of the Strapi corporate
                      template, which requires flattening, and attention to
                      naming conventions for indexable fields. On the React side
                      I'm using Meilisearch's InstantSearch with its
                      indespensable features, e.g. highlighting & result
                      cropping.
                    </li>
                  </ul>
                </li>
                <li>
                  GraphQL
                  <ul>
                    <li>
                      Is built-in to Strapi as a plugin. This app is using the
                      Strapi REST API as well but mostly Graphql, which is a
                      better fit for Strapi data structures. Comes with a
                      playground that prompts writing queries and mutations.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </StyledBody>
      </StyledPage>
    </Site>
  );
};

export default About;
