import { gql } from "@apollo/client";

// {"email": "richard.lanham2@gmail.com", "name": "Richard","leadFormId": 3}
export const CREATE_EMAIL_HISTORY = gql`
  mutation CreateEmailHistory(
    $name: String
    $email: String!
    $leadFormId: Int!
    $info: String!
    $day: String!
    $template: String!
  ) {
    createEmailHistory(
      data: {
        name: $name
        email: $email
        leadFormId: $leadFormId
        day: $day
        info: $info
        template: $template
      }
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

//{"email": "richard.lanham2@gmail.com"}
export const EMAIL_HISTORY = gql`
  query EmailHistory($email: String!) {
    emailHistories(filters: { email: { eq: $email } }) {
      data {
        id
        attributes {
          name
          email
          leadFormId
          updatedAt
        }
      }
    }
  }
`;

export const EMAIL_HISTORIES = gql`
  query EmailHistories {
    emailHistories(pagination: { start: 0, limit: 200 }) {
      data {
        id
        attributes {
          name
          email
          leadFormId
          createdAt
        }
      }
    }
  }
`;

export const GET_LEADFORM = gql`
  query GetLeadForm($id: ID!) {
    leadFormSubmission(id: $id) {
      data {
        id
        attributes {
          email
        }
      }
    }
  }
`;
export const POST_LEAD_FORM = gql`
  mutation CreateLeadForm($name: String, $email: String!, $phone: String) {
    createLeadFormSubmission(
      data: { name: $name, email: $email, phone: $phone }
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

// {"id": 40,"name": "Richard","email": "richard.lanham@gmail.com","blurb": "some comment","phone": "212222","last_email_date": "2023-04-03T02:34:37Z" }
export const UPDATE_LEAD_FORM = gql`
  mutation UpdateLeadForm(
    $id: ID!
    $name: String!
    $email: String!
    $blurb: String
    $phone: String
    $last_email_date: DateTime
  ) {
    updateLeadFormSubmission(
      id: $id
      data: {
        name: $name
        email: $email
        blurb: $blurb
        phone: $phone
        last_email_date: $last_email_date
      }
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
export const DELETE_LEADFORM = gql`
  mutation DeleteLeadForm($id: ID!) {
    deleteLeadFormSubmission(id: $id) {
      data {
        id
      }
    }
  }
`;

export const GET_DAY_MESSAGE = gql`
  query {
    crm {
      data {
        id
        attributes {
          dance_day
          message
          template
        }
      }
    }
  }
`;

export const UPDATE_DAY_MESSAGE = gql`
  mutation UpdateCRM(
    $message: String!
    $dance_day: String!
    $template: String!
  ) {
    updateCrm(
      data: { message: $message, dance_day: $dance_day, template: $template }
    ) {
      data {
        attributes {
          message
        }
      }
    }
  }
`;

export const GET_LEADFORMS = gql`
  query GetLeadForms {
    leadFormSubmissions(pagination: { start: 0, limit: 200 }) {
      data {
        id
        attributes {
          name
          email
          status
          location
          phone
          blurb
          last_email_date
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
