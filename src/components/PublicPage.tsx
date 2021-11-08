import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { Redirect, useAuth } from '../utils/auth';
import Page from './Page';

type Props = {
  title: string;
}

const PublicPage: React.FC<Props> = ({children, title}) => {

  const auth = useAuth();

  if (auth) return <Redirect path="/dashboard" />

  const header = <>
    <span className="text-lg font-medium mr-auto"><Link href="/">ExtraTime</Link></span>
    <span className="text-md hover:underline"><Link href="/login">Login</Link></span>
    <span className="text-md hover:underline"><Link href="/register">Register</Link></span>
  </>

  const head = <Head>
    <title>{title}</title>
    <meta name="description" content="Extra time app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  const footer = <div>© Ugljesa Pantic 2021. All rigths reserved.</div>
  
  return <Page head={head} header={header} footer={footer} >{children}</Page>
}


export default PublicPage;