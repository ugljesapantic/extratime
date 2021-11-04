import Head from 'next/head'
import Link from 'next/link';
import React, { useCallback } from 'react'
import { supabase } from '../../config/supabase';
import { Redirect, useAuth } from '../utils/auth';

type Props = {
  title: string;
}

const PrivatePage: React.FC<Props> = ({children, title}) => {

  const auth = useAuth();

  const logout = useCallback(() => supabase.auth.signOut(), [])

  if (!auth) return <Redirect path="/" />
  
  return (
    <div className="h-screen w-screen text-gray-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Extra time app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full max-h-full flex flex-col bg-gray-800 relative">
        <div className="bg-gradient-to-b from-gray-700 top-gray-800 h-32">
          <header className="flex h-20 items-center space-x-3 container mx-auto ">
            <span className="text-lg font-medium mr-auto"><Link href="/dashboard">Dashboard</Link></span>
            <span onClick={logout}>Logout</span>
          </header>
        </div>
        <main className="container mx-auto flex flex-col flex-1 -mt-4 flex-1">
          {children}
        </main>
        <footer className="m-t-auto h-10 text-center text-sm">
          TBD!
        </footer>
      </div>
    </div>
  )
}


export default PrivatePage;