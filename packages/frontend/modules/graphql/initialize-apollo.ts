import { NormalizedCacheObject, ApolloClient } from 'apollo-boost'

import createApolloClient from './create-apollo-client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

export default function initializeApollo(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}
