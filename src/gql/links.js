import { gql } from "@apollo/client";

export const GET_LINK = gql`
  query GetLink($id: ID!) {
    link(id: $id) {
      data {
        id
        attributes {
          url
          text
          comment
          rate
        }
      }
    }
  }
`;
export const POST_LINK = gql`
  mutation CreateLink(
    $url: String
    $text: String!
    $comment: String
    $rate: String
  ) {
    createLeadFormSubmission(
      data: { url: $url, text: $text, comment: $comment, rate: $rate }
    ) {
      data {
        id
        attributes {
          createdAt
          url
        }
      }
    }
  }
`;

export const UPDATE_LINK = gql`
  mutation UpdateLink(
    $id: ID!
    $url: String!
    $text: String!
    $comment: String
    $rate: String
  ) {
    updateLink(
      id: $id
      data: { url: $url, text: $text, comment: $comment, rate: $rate }
    ) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`;

export const CREATE_LINK = gql`
  mutation CreateLink(
    $url: String!
    $text: String!
    $comment: String
    $rate: String
  ) {
    createLink(
      data: { url: $url, text: $text, comment: $comment, rate: $rate }
    ) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`;

export const DELETE_LINK = gql`
  mutation DeleteLink($id: ID!) {
    deleteLink(id: $id) {
      data {
        id
      }
    }
  }
`;

export const GET_LINKS = gql`
  query GetLinks {
    links(pagination: { start: 0, limit: 200 }) {
      data {
        id
        attributes {
          url
          text
          comment
          rate
        }
      }
    }
  }
`;

/// copied stuff
export const GET_THEMEIDS = gql`
  query GetThemes {
    themes(pagination: { start: 0, limit: 100 }) {
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
export const GET_THEME_BY_NAME = gql`
  query GetTheme($name: String!) {
    themes(filters: { name: { eq: $name } }) {
      data {
        attributes {
          name
          theme
          color_modes
          selected_color_modes
        }
      }
    }
  }
`;

export const GET_THEME = gql`
  query GetTheme($id: ID!) {
    theme(id: $id) {
      data {
        id
        attributes {
          createdAt
          name
          theme
          color_modes
        }
      }
    }
  }
`;

export const CREATE_THEME = gql`
  mutation CreateTheme($name: String!, $theme: String!, $color_modes: String!) {
    createTheme(
      data: { name: $name, theme: $theme, color_modes: $color_modes }
    ) {
      data {
        id
        attributes {
          createdAt
        }
      }
    }
  }
`;

export const DELETE_THEME_BY_NAME = gql`
  mutation DeleteTheme($name: String!) {
    deleteTheme(data: { name: $name }) {
      data {
        attributes {
          createdAt
        }
      }
    }
  }
`;

export const PUT_THEME = gql`
  mutation UpdateTheme(
    $id: ID!
    $name: String!
    $theme: String!
    $color_modes: String!
  ) {
    updateTheme(
      id: $id
      data: { name: $name, theme: $theme, color_modes: $color_modes }
    ) {
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

export const PUT_THEME_SELECTED_COLOR_MODES = gql`
  mutation UpdateTheme($id: ID!, $selected_color_modes: String!) {
    updateTheme(
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

export const DELETE_THEME = gql`
  mutation DeleteTheme($id: ID!) {
    deleteTheme(id: $id) {
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
