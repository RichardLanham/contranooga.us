import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL,
});

const retryLink = new RetryLink({
  attempts: (count, operation, error) => {
    return !!error && operation.operationName != "specialCase";
  },
  delay: (count, operation, error) => {
    return count * 1000 * Math.random();
  },
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("strapi_jwt");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL,
  // fetchOptions: {
  //   mode: "no-cors",
  // },
  fetchPolicy: "no-cache",
  nextFetchPolicy: "network-first",
  link: authLink.concat(httpLink, errorLink, retryLink),
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        keyFields: ["slug"],
      },
    },
  }),
});

onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case "UNAUTHENTICATED":
          // Modify the operation context with a new token
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              // authorization: getNewToken(),
            },
          });
          // Retry the request, returning the new observable
          return forward(operation);
      }
    }
  }

  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export default client;
