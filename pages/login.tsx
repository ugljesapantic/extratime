import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import { useForm } from 'react-hook-form'
import TextInput from '../ds/TextInput'
import Button from '../ds/Button'

export default function Home() {
  const {handleSubmit, register} = useForm();

  const onSignIn = useCallback(async ({email, password}) => {
    await Auth.signIn({
      username: email,
      password
    })
    // TODO try catch
  }, [])

  // TODO add meta
  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)}>
        <TextInput {...register("email", {required: true})} />
        <TextInput {...register("password", {required: true})}  type="password" />
        <Button>Clickme</Button>
      </form>
    </div>
  )
}
