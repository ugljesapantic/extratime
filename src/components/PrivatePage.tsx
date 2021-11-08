import Head from 'next/head'
import Link from 'next/link';
import React, { useCallback } from 'react'
import { supabase } from '../../config/supabase';
import { Redirect, useAuth } from '../utils/auth';
import Page from './Page';

type Props = {
  title: string;
}

const PrivatePage: React.FC<Props> = ({children, title}) => {

  const auth = useAuth();

  const logout = useCallback(() => supabase.auth.signOut(), [])

  if (!auth) return <Redirect path="/" />

  const header= (
    <>
      <span className="text-lg font-medium mr-auto"><Link href="/dashboard">Dashboard</Link></span>
      <span onClick={logout}>Logout</span>
    </>
  )

  const footer= (<div>TBD?!</div>)

  const head = (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Extra time app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )

  return <Page header={header} footer={footer} head={head}>{children}</Page>
}


export default PrivatePage;