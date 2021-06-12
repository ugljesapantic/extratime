import Head from 'next/head'
import Image from 'next/image'
import Cookie from 'js-cookie'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() =>{ 
    const auth = Cookie.get('auth');
  }, [])

  return (
    <div className="container mx-auto">
      <Head>
        <title>Extratime</title>
        <meta name="description" content="Extra time app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Welcome to extratime!
      </main>
      <footer>
        Ugljesa corp!
      </footer>
    </div>
  )
}
