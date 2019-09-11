import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
// eslint-disable-next-line no-shadow
import fetch from 'isomorphic-unfetch'

import { isBrowser } from '../../utils'

export default function createApolloClient(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const isBrowserEnv = isBrowser()

  // ! FIXME: resolve TS issues
  return new ApolloClient({
    connectToDevTools: isBrowserEnv,
    ssrMode: !isBrowserEnv,
    link: new HttpLink({
      uri: process.env.GRAPHQL_SERVER_URL,
      credentials: 'same-origin',
      fetch: !isBrowserEnv && (fetch as any),
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}
