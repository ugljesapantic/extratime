import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsExports from '../src/aws-exports'

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';

Amplify.configure({
  ...awsExports,
  cookieStorage: {
    domain: 'localhost',
    secure: false,
    path: '/',
    expires: 365,
  },
})

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [toConfirm, setToConfirm] = useState(false)

  const loadIt = useCallback(async () => {
    const user = await Auth.currentAuthenticatedUser();
    chrome.runtime.sendMessage(extensionId, user) 
  }, [])

  useEffect(() =>{ 
    loadIt();
  }, [loadIt])

  const onSignUp = useCallback(async () => {
    await Auth.signUp({
      username: email,
      password
    })
    setToConfirm(true);
  }, [email, password])

  const onSignIn = useCallback(async () => {
    await Auth.signIn({
      username: email,
      password
    })
  }, [email, password])

  const onConfirm = useCallback(async () => {
    await Auth.confirmSignUp(email, code)
  }, [email, code])

  return (
    <div className="container mx-auto">
      <Head>
        <title>Extratime</title>
        <meta name="description" content="Extra time app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8">
        <div className="m-auto flex flex-col w-60 content-center">
          {toConfirm ? 
            <>
              <label htmlFor="code">Code</label>
              <input value={code} onChange={e => setCode(e.target.value)} className="border border-1" type="text" />
              <button onClick={onConfirm} >Confirm</button>
            </> 
            : 
            <>
              <label htmlFor="email">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className="border border-1" type="email"  />
              <label htmlFor="password">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} className="border border-1" type="password" />
              <div className="flex justify-between">
                <button onClick={onSignUp}>SignUp</button>
                <button onClick={onSignIn}>SignIn</button>
              </div>
            </>
          }
        </div>
      </main>
      <footer>
        Ugljesa corp!
      </footer>
    </div>
  )
}
