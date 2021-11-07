import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import TextInput from '../atoms/TextInput'
import PublicPage from '../src/components/PublicPage'
import Form from '../src/components/Form'
import { useRouter } from 'next/router'
import { supabase } from '../config/supabase'
import { sendIt } from '../src/utils/extension'

export default function Register() {
  const r = useRouter();

  const onSignUp = useCallback(async ({email, password}, _ , methods: UseFormReturn<FieldValues, object>) => {
    try {
      await supabase.auth.signUp({email, password})
      sendIt({type: 'auth', data: {email, password}})
    } catch (e: any) {
      // TODO add supabase codes
      // if (['UsernameExistsException'].includes(e.code)) methods.setError('email', {message: e.message});
      // else if (['InvalidPasswordException'].includes(e.code)) methods.setError('password', {message: e.message});
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
