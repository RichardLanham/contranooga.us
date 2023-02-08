import { gql } from "@apollo/client";

export const GET_BANNER_EVENTS = gql`
  query GetBannerEvents($dt: DateTime!, $display: String, $display2: String) {
    events(
      pagination: { start: 0, limit: 100 }
      filters: {
        or: [{ display: { eq: $display } }, { display: { eq: $display2 } }]
        startTime: { lte: $dt }
        endTime: { gte: $dt }
      }
    ) {
      data {
        id
        attributes {
          createdAt
          name
          startTime
          endTime
          body
          display
          link {
            url
            newTab
            text
            description
          }
          image {
            data {
              id
              attributes {
                createdAt
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents($to: DateTime!, $dt: DateTime!) {
    events(
      pagination: { start: 0, limit: 100 }
      filters: { startTime: { gte: $dt }, endTime: { lte: $to } }
    ) {
      data {
        id
        attributes {
          createdAt
          name
          startTime
          endTime
          body
          display
          link {
            url
            newTab
            text
            description
          }
          image {
            data {
              id
              attributes {
                createdAt
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_EVENTIDS = gql`
  query GetEvents {
    events {
      data {
        id
        attributes {
          createdAt
          name
        }
      }
    }
  }
`;

export const GET_EVENT = gql`
  query GetEvent($id: ID!) {
    event(id: $id) {
      data {
        id
        attributes {
          createdAt
          name
          startTime
          body
          display
          link {
            url
            newTab
            text
            description
          }
          image {
            data {
              id
              attributes {
                createdAt
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent($name: String!, $event: String!, $colorModes: String!) {
    createEvent(
      data: { name: $name, event: $event, color_modes: $color_modes }
    ) {
      data {
        id
        attributes {
          createdAt
          name
          event
          link {
            url
            newTab
            text
            description
          }
        }
      }
    }
  }
`;

export const PUT_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $name: String!
    $event: String!
    $color_modes: String!
  ) {
    updateEvent(
      id: $id
      data: { name: $name, event: $event, color_modes: $color_modes }
    ) {
      data {
        id
        attributes {
          createdAt
          name
          link {
            url
            newTab
            text
            description
          }
        }
      }
    }
  }
`;

export const PUT_EVENT_SELECTED_COLOR_MODES = gql`
  mutation UpdateEvent($id: ID!, $selected_color_modes: String!) {
    updateEvent(
      id: $id
      data: { selected_color_modes: $selected_color_modes }
    ) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      data {
        id
        attributes {
          createdAt
          name
        }
      }
    }
  }
`;
