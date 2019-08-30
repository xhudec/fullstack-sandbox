import React from 'react'
import Head from 'next/head'
import { ApolloClient } from 'apollo-boost'
import { getDataFromTree } from '@apollo/react-ssr'

import initializeApollo from './initializeApollo'

import { isBrowser } from '../../utils'

// TODO: Typings
export default function withApollo(App: any): any {
  return class extends React.Component<any> {
    static displayName = 'withApollo(App})'

    static async getInitialProps(ctx: any): any {
      const { AppTree } = ctx
      let pageProps = {}

      if (App.getInitialProps) {
        pageProps = await App.getInitialProps(ctx)
      }

      const apolloClient = initializeApollo({})

      if (!isBrowser()) {
        try {
          await getDataFromTree(<AppTree pageProps={{ ...pageProps, apolloClient }} />)
        } catch (err) {
          console.error('[withApollo] Error:', err)
        }

        Head.rewind()
      }

      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
      }
    }

    constructor(props: any) {
      super(props)
      this.apolloClient = props.apolloClient || initializeApollo(props.apolloState)
    }

    apolloClient: ApolloClient<any>

    render(): JSX.Element {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
