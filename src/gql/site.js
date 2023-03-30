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
  fragment HeroParts on ComponentSectionsHero {
    id
    title
    description
    label
    playlist {
      id
      playlistItem {
        id
        url
        slug
        newTab
        text
        description
        __typename
      }
    }
    text {
      content
      id
    }
    picture {
      ...FileParts
    }
    size
    float
    googleMap {
      ...GMapParts
    }
    button {
      id
      url
      slug
      urlIsLocal
      type
      text
      type
      newTab
      image {
        ...FileParts
      }
    }
    __typename
  }

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
        __typename
      }
      __typename
    }
    __typename
  }

  fragment InputParts on ComponentSectionsInputs {
    id
    title
    description
    poster {
      ...FileParts
      __typename
    }
    url
    urlType
    richtext
    playlist {
      id
      playlistItem {
        id
        description
        url
        newTab
        text
        slug
        __typename
      }
      __typename
    }
    googleMap {
      ...GMapParts
      __typename
    }
    __typename
  }

  fragment GMapParts on ComponentElementsGmap {
    id
    markerText
    markerImage {
      ...FileParts
      __typename
    }
    lat
    lng
    zoom
    name
    richtext
    __typename
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
                __typename
              }
              __typename
            }
            __typename
          }
          slug
          metadata {
            metaTitle
            metaDescription
            __typename
          }
          contentSections {
            __typename
            ... on ComponentSectionsFlex {
              id
              box {
                ...HeroParts
              }
            }
            ... on ComponentSectionsScroller {
              id
              slugs {
                id
                slug
                title
                __typename
                blurb
                load
                __typename
              }
            }
            ... on ComponentSectionsInputs {
              id
              title
              description
              url
              poster {
                ...FileParts
                __typename
              }
              richtext
              hero {
                ...HeroParts
              }
              __typename
            }
            ... on ComponentSectionsTabs {
              id
              title
              label
              description
              picture {
                ...FileParts
                __typename
              }
              inputs {
                ...InputParts
                __typename
              }
              tabs {
                id
                title
                description
                type
                icon {
                  ...FileParts
                  __typename
                }
                tab {
                  id
                  label
                  type
                  slug
                  image {
                    ...FileParts
                    __typename
                  }
                  inputs {
                    ...InputParts
                    __typename
                  }
                  __typename
                }
                __typename
              }
              buttons {
                id
                image {
                  ...FileParts
                  __typename
                }
                url
                newTab
                text
                type
                __typename
              }
              __typename
            }
            ... on ComponentSectionsFeatureColumnsGroup {
              id
              inputs {
                ...InputParts
                __typename
              }
              tabs {
                id
                title
                description
                homeTabType
                icon {
                  ...FileParts
                  __typename
                }
                tab {
                  id
                  slug
                  image {
                    ...FileParts
                    __typename
                  }
                  label
                  inputs {
                    ...InputParts
                    __typename
                  }
                  type
                  __typename
                }
                __typename
              }
              __typename
            }

            ... on ComponentSectionsFlexGroup {
              id
              group {
                id
                groupTitle

                logo {
                  ...FileParts
                  __typename
                }
                box {
                  id
                  title
                  description
                  url
                  poster {
                    ...FileParts
                    __typename
                  }
                  richtext
                  hero {
                    ...HeroParts
                  }
                  urlType
                  __typename
                }
                __typename
              }
              __typename
            }
            ... on ComponentSectionsHero {
              ...HeroParts
            }
            ... on ComponentSectionsLargeVideo {
              id
              description
              title
              playlist {
                playlistItem {
                  id
                  url
                  newTab
                  text
                  description
                  __typename
                }
                __typename
              }
              poster {
                ...FileParts
                __typename
              }
              url
              richtext
              urlType
              __typename
            }
            ... on ComponentSectionsRichText {
              id
              content
              __typename
            }
            ... on ComponentSectionsGoogleMap {
              id
              title
              gmap {
                ...GMapParts
                __typename
              }
              __typename
            }
            ... on ComponentSectionsLeadForm {
              id
              title
              emailPlaceHolder
              location
              phonePlaceHolder
              namePlaceHolder
              blurb
              submitButton {
                id
                text
                type
                __typename
              }
              __typename
            }
          }
          __typename
        }
        __typename
      }
      __typename
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
          }
          createdAt
          updatedAt
          header
          subhead
          slug
          MenuAnchor
          route
          contentSections {
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
              __typename
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
            }
          }
        }
      }
    }
  }
`;

export const GET_UPLOADS_LIST = gql`
  query GetUploadsList {
    uploadFiles(pagination: { start: 0, limit: 100 }) {
      __typename
      data {
        id
        attributes {
          name
          caption
          alternativeText
          width
          height
        }
      }
    }
  }
`;

export const GET_PAGE_SLUGS = gql`
  query GetPageSlugs {
    pages(pagination: { start: 0, limit: 100 }) {
      __typename
      data {
        id
        attributes {
          shortName
          slug
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
          eventFillStart
          favicon {
            ...FileParts
          }
          metadata {
            metaTitle
            metaDescription
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
              description
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
                button_label
                text
                type
                image {
                  ...FileParts
                }
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
