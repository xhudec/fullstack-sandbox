import React from 'react'
import App, { AppProps } from 'next/app'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

import withApollo from '../modules/graphql/with-apollo'

import ContextController from '../components/context-controller'

interface IMyAppProps extends AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

class MyApp extends App<IMyAppProps> {
  render(): JSX.Element {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <ContextController apolloClient={apolloClient}>
        <Component {...pageProps} />
      </ContextController>
    )
  }
}

export default withApollo(MyApp)
