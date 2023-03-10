import { gql } from "@apollo/client";
// {"id":3, "newVal":"<h3>NEW CONTENT</h3>"}
export const UPDATE_PAGE = gql`
  mutation UpdatePage($id: ID!, $newVal: String!) {
    updatePage(
      id: $id
      data: {
        contentSections: [
          { __typename: "ComponentSectionsRichText", content: $newVal }
        ]
      }
    ) {
      data {
        id
        attributes {
          createdAt
          shortName
          contentSections {
            ... on ComponentSectionsRichText {
              id
              content
              __typename
            }
          }
        }
      }
    }
  }
`;
