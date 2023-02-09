import { gql } from "@apollo/client";

export const GET_FILES = gql`
  query GetFiles {
    uploadFiles(pagination: { start: 0, limit: 10000 }) {
      __typename
      id
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        __typename
        id
        attributes {
          name
          formats
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const GET_PAGE = gql`
  fragment FileParts on UploadFileEntityResponse {
    data {
      id
      attributes {
        alternativeText
        width
        height
        mime
        url
        formats
      }
    }
  }
  query GetPages(
    $slug: String!
    $publicationState: PublicationState!
    $locale: I18NLocaleCode!
  ) {
    pages(
      filters: { slug: { eq: $slug } }
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        id
        attributes {
          locale
          localizations {
            data {
              id
              attributes {
                locale
              }
            }
          }
          slug
          metadata {
            metaTitle
            metaDescription
            shareImage {
              ...FileParts
            }
            twitterCardType
            twitterUsername
          }
          contentSections {
            __typename
            ... on ComponentSectionsBottomActions {
              id
              title
              buttons {
                id
                newTab
                text
                type
                url
              }
            }
            ... on ComponentSectionsHero {
              id
              title
              label
              richText
              buttons {
                id
                newTab
                text
                type
                url
              }
              title
              description
              label
              picture {
                ...FileParts
              }
            }
            ... on ComponentSectionsFeatureColumnsGroup {
              id
              features {
                id
                description
                icon {
                  ...FileParts
                }
                title
              }
            }
            ... on ComponentSectionsFeatureRowsGroup {
              id
              features {
                id
                description
                link {
                  id
                  newTab
                  text
                  url
                }
                media {
                  ...FileParts
                }
                title
              }
            }
            ... on ComponentSectionsTestimonialsGroup {
              id
              description
              link {
                id
                newTab
                text
                url
              }
              logos {
                id
                title
                logo {
                  ...FileParts
                }
              }
              testimonials {
                id
                logo {
                  ...FileParts
                }
                picture {
                  ...FileParts
                }
                text
                authorName
                authorTitle
                link
              }
              title
            }
            ... on ComponentSectionsLargeVideo {
              id
              description
              title
              poster {
                ...FileParts
              }
              url
              facebook_bound
            }
            ... on ComponentSectionsRichText {
              id
              content
            }
            ... on ComponentSectionsPricing {
              id
              title
              plans {
                description
                features {
                  id
                  name
                }
                id
                isRecommended
                name
                price
                pricePeriod
              }
            }
            ... on ComponentSectionsLeadForm {
              id
              emailPlaceholder
              location
              submitButton {
                id
                text
                type
              }
              title
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGES_SHORT = gql`
  query GetPages {
    pages(pagination: { start: 0, limit: 100 }) {
      __typename
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        __typename
        id
        attributes {
          metadata {
            id
            metaTitle
            metaDescription
            shareImage {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  formats
                }
              }
            }
          }
          createdAt
          updatedAt
          header
          subhead
          slug
          MenuAnchor
        }
      }
    }
  }
`;
export const GET_PAGES = gql`
  query GetPages {
    pages(pagination: { start: 0, limit: 100 }) {
      __typename
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        __typename
        id
        attributes {
          metadata {
            id
            metaTitle
            metaDescription
            shareImage {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  formats
                }
              }
            }
          }
          createdAt
          updatedAt
          header
          subhead
          slug
          MenuAnchor
          route
          contentSections {
            ... on ComponentSectionsPricing {
              id
              title
              plans {
                id
                price
                pricePeriod
                isRecommended
              }
            }
            ... on ComponentSectionsLeadForm {
              id
              title
              emailPlaceholder
              location
              submitButton {
                text
                type
              }
            }
            ... on ComponentSectionsRichText {
              id
              content
            }
            ... on ComponentSectionsFeatureColumnsGroup {
              id
              features {
                id
                title
                description
                icon {
                  data {
                    id
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsFeatureRowsGroup {
              id
              features {
                id
                title
                description
                media {
                  data {
                    id
                    attributes {
                      formats
                    }
                  }
                }
                link {
                  id
                  url
                  text
                  newTab
                }
              }
            }
            ... on ComponentSectionsHero {
              title
              caption
              label
              richText
              picture {
                data {
                  id
                  attributes {
                    formats
                    url
                    previewUrl
                    caption
                    name
                    width
                    height
                    alternativeText
                  }
                }
              }
              __typename
            }
            ... on ComponentSectionsBottomActions {
              id
              title
              buttons {
                url
                text
                label
                type
                newTab
                type
              }
            }
            ... on ComponentSectionsLargeVideo {
              title
              description
              facebook_bound
            }
          }
        }
      }
    }
  }
`;
export const GLOBAL = gql`
  fragment FileParts on UploadFileEntityResponse {
    data {
      id
      attributes {
        alternativeText
        width
        height
        mime
        url
        formats
      }
    }
  }
  query GetGlobal {
    global(locale: "en") {
      data {
        id
        attributes {
          favicon {
            ...FileParts
          }
          metadata {
            metaTitle
            metaDescription
            shareImage {
              ...FileParts
            }
            twitterCardType
            twitterUsername
          }
          metaTitleSuffix
          notificationBanner {
            type
            text
          }
          navbar {
            logo {
              ...FileParts
            }
            links {
              id
              url
              newTab
              text
            }
            dropdown {
              id
              text
              title
              url
              Link {
                id
                url
                newTab
                text
                slug
                description
              }
            }
            button {
              id
              url
              newTab
              text
              type
            }
          }
          footer {
            logo {
              ...FileParts
            }
            smallText
            columns {
              id
              title
              links {
                id
                url
                newTab
                text
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_VIDEOS = gql`
  query GetVideos($start: Int, $increment: Int) {
    videos(
      sort: "created_time:desc"
      pagination: { start: $start, limit: $increment }
    ) {
      data {
        id
        attributes {
          post_id
          permalink_url
          created_time
          description
          title
          live_status
        }
      }
    }
  }
`;

export const FEATURE = gql`
  query GetFeature {
    feature {
      data {
        id
        attributes {
          heading
          body
          caption1
          caption2
          picture1 {
            data {
              id
              attributes {
                name
                width
                height
                formats
              }
            }
          }
          picture2 {
            data {
              id
              attributes {
                name
                width
                height
                formats
              }
            }
          }
        }
      }
    }
  }
`;
