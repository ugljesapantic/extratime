import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { Auth } from 'aws-amplify'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import TextInput from '../ds/TextInput'
import PublicPage from '../src/components/PublicPage'
import Form from '../src/components/Form'

export default function Login() {

  const onSignIn = useCallback(async ({email, password}, _ , methods: UseFormReturn<FieldValues, object>) => {
    try {
      await Auth.signIn({
        username: email,
        password
      })
    } catch (e: any) {
      if (e.code === 'UserNotConfirmedException') {
        // TODO Move to code page
      }
    }
  }, [])


  // TODO add meta
  return (
    <PublicPage title="Login" >
      <Form onSubmit={onSignIn} buttonLabel="SIGN IN">
        <TextInput className="mt-4" label="EMAIL" name="email" />
        <TextInput className="mt-4" label="PASSWORD" name="password"  type="password" />
      </Form>
    </PublicPage>
  )
}
