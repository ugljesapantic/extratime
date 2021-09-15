import Head from 'next/head'
import React from 'react'

type Props = {
  title: string;
}

const PublicPage: React.FC<Props> = ({children, title}) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-gray-300">
      <div className="container mx-auto min-h-full flex flex-col">
        <Head>
          <title>{title}</title>
          <meta name="description" content="Extra time app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <footer className="m-t-auto h-10 text-center">
          Ugljesa corp!
        </footer>
      </div>
    </div>
  )
}


export default PublicPage;