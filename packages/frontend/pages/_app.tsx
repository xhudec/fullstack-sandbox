import React from 'react'
import App, { AppProps } from 'next/app'
import { ApolloClient } from 'apollo-boost'

import withApollo from '../modules/graphql/withApollo'

import ContextController from '../components/ContextController'

interface IMyAppProps extends AppProps {
  apolloClient: ApolloClient<{}>
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
