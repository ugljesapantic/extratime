import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { Auth } from 'aws-amplify'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import TextInput from '../ds/TextInput'
import PublicPage from '../src/components/PublicPage'
import Form from '../src/components/Form'
import { useRouter } from 'next/router'
import { loginWithSessionStorage } from '../src/utils/auth'

export default function Confirm() {
  const {query: {email}} = useRouter();

  const onConfirm = useCallback(async ({code}, _ , methods: UseFormReturn<FieldValues, object>) => {
    try {
      await Auth.confirmSignUp(email as string, code)
      await loginWithSessionStorage(email as string);
    } catch (e: any) {
      methods.setError("code", {message: e.message})
    }
  }, [email])

  // TODO Redirect
  if (!email) return null;

  // TODO add meta
  return (
    <PublicPage title="Login" >
      <Form onSubmit={onConfirm} buttonLabel="CONFIRM SIGN UP">
        <TextInput className="mt-4" label="CODE" name="code" />
      </Form>
    </PublicPage>
  )
}
