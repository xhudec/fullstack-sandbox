import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const QUERY_HELLO_WORLD = gql`
  {
    hello
  }
`

interface IHelloQueryData {
  hello: string
}

const HomePage: NextPage = () => {
  const { loading, data, error } = useQuery<IHelloQueryData>(QUERY_HELLO_WORLD)

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Welcome to Next.js!</h1>
      </div>

      {loading && <span>Loading...</span>}

      {data && <p>{data.hello}</p>}

      {error && <span>Oops! Something went wrong!</span>}
    </div>
  )
}

export default HomePage
