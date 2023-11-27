import {
  ApolloClient, InMemoryCache, makeVar, NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import Constants from 'expo-constants';

let client: ApolloClient<NormalizedCacheObject> | null = null;

export const apolloClient = makeVar<any>(null);
export const userConnected = makeVar<any | null>(null);
export const authToken = makeVar<string | null>(null);
export const noInternet = makeVar(false);

// eslint-disable-next-line max-len
export const getApolloClient = async (): Promise<
  ApolloClient<NormalizedCacheObject>
> => {
  const cache = new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          project: {
            merge: true,
          },
          userConnected: {
            read() {
              return userConnected();
            },
          },
          authToken: {
            read() {
              return authToken();
            },
          },
          noInternet: {
            read() {
              return noInternet();
            },
          },
        },
      },
    },
  });

  const authLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${await AsyncStorage.getItem('@boilerplateapp_token')}`,
    },
  }));

  const handleNetworkErrorLink = onError((error) => {
    if (
      error.networkError
      && error.networkError.message === 'Network request failed'
    ) {
      noInternet(true);
    }
  });

  const apiLink = createUploadLink({
    uri: Constants.expoConfig?.extra!.api,
    headers: {
      authorization: `Bearer ${await AsyncStorage.getItem(
        '@boilerplateapp_token',
      )}`,
    },
  });

  client = new ApolloClient({
    cache,
    name: 'client',
    version: '1.3',
    link: handleNetworkErrorLink.concat(authLink).concat(apiLink),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });

  apolloClient(client);

  return client;
};
