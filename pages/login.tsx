import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import TextInput from '../atoms/TextInput'
import PublicPage from '../src/components/PublicPage'
import Form from '../src/components/Form'
import { useRouter } from 'next/router'
import { supabase } from '../config/supabase'
import { sendIt } from '../src/utils/auth'

export default function Login() {
  const r = useRouter();

  const onSignIn = useCallback(async ({email, password}, _ , methods: UseFormReturn<FieldValues, object>) => {
    try {
      await supabase.auth.signIn({email, password})
      sendIt({email, password})
    } catch (e: any) {
      // TODO improve
      // if (e.code === 'UserNotConfirmedException') moveToCode(r, email, password);
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
