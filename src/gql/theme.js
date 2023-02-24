import { gql } from "@apollo/client";

export const GET_THEMES = gql`
  query GetThemes {
    themes(pagination: { start: 0, limit: 100 }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

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

export const GET_THEME_NAMES = gql`
  query GetThemesNames {
    themes {
      data {
        id
        attributes {
          name
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
