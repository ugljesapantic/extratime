import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import PublicPage from '../src/components/PublicPage'

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';


// TODO build components like DS, but dont style them too much, instead, lets hire a designer :D


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

  const onConfirm = useCallback(async () => {
    await Auth.confirmSignUp(email, code)
  }, [email, code])

  return (
    <PublicPage title="ExtraTime" >
      <div className="text-4xl m-auto">Welcome to ExtraTime!</div>
    </PublicPage>
  )
}
