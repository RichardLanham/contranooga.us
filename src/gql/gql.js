import { gql } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

export const GET_ARTICLES = gql`
  query {
    articles {
      data {
        id
        attributes {
          createdAt
          title
          body
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
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

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!) {
    createAuthor(data: { name: $name }) {
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

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($id: ID!, $name: String!) {
    updateAuthor(id: $id, data: { name: $name }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
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

export const GET_ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          createdAt
          title
          body
          authors {
            data {
              attributes {
                name
                articles {
                  data {
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
