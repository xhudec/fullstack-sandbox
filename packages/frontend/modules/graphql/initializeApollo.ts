import { NormalizedCacheObject, ApolloClient } from 'apollo-boost'
import createApolloClient from './createApolloClient'

let apolloClient: ApolloClient<any> | null = null

export default function initializeApollo(initialState: NormalizedCacheObject): ApolloClient<any> {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}
