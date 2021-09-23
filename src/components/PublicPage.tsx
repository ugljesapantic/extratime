import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { Redirect, useAuth } from '../utils/auth';

type Props = {
  title: string;
}

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';

const PublicPage: React.FC<Props> = ({children, title}) => {

  const auth = useAuth();

  if (auth) return <Redirect path="/dashboard" />
  
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 text-gray-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Extra time app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto min-h-full flex flex-col">
        <header className="flex h-10 items-center space-x-3">
          <span className="text-lg font-medium mr-auto"><Link href="/">ExtraTime</Link></span>
          <span className="text-md hover:underline"><Link href="/login">Login</Link></span>
          <span className="text-md hover:underline"><Link href="/register">Register</Link></span>
        </header>
        
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <footer className="m-t-auto h-10 text-center text-sm">
          © Ugljesa Pantic 2021. All rigths reserved.
        </footer>
      </div>
    </div>
  )
}


export default PublicPage;