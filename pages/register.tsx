import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { Auth } from 'aws-amplify'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import TextInput from '../ds/TextInput'
import PublicPage from '../src/components/PublicPage'
import Form from '../src/components/Form'
import { useRouter } from 'next/router'
import { moveToCode } from '../src/utils/auth'

export default function Register() {
  const r = useRouter();

  const onSignUp = useCallback(async ({email, password}, _ , methods: UseFormReturn<FieldValues, object>) => {
    try {
      await Auth.signUp({
        username: email,
        password
      })
      moveToCode(r, email, password)
    } catch (e: any) {
      if (['UsernameExistsException'].includes(e.code)) methods.setError('email', {message: e.message});
      else if (['InvalidPasswordException'].includes(e.code)) methods.setError('password', {message: e.message});
    }
  }, [])


  // TODO add meta
  return (
    <PublicPage title="Register" >
      <Form onSubmit={onSignUp} buttonLabel="REGISTER">
        <TextInput className="mt-4" label="EMAIL" name="email" />
        <TextInput className="mt-4" label="PASSWORD" name="password"  type="password" />
      </Form>
    </PublicPage>
  )
}
