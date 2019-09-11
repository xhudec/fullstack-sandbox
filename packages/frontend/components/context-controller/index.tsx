import React from 'react'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

interface IContextControllerProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  children: JSX.Element
}

export default function ContextController({
  apolloClient,
  children,
}: IContextControllerProps): JSX.Element {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
