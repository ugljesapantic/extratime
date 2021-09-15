import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import { useForm } from 'react-hook-form'
import TextInput from '../ds/TextInput'
import Button from '../ds/Button'
import PublicPage from '../src/components/PublicPage'
import clsx from 'clsx'

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
    <PublicPage title="Login" >
      <form className={clsx(
        'flex flex-col p-8 bg-gray-700 rounded-lg shadow-lg m-4',
        'mt-auto mx-4 mb-8',
        'sm:m-auto sm:w-96'
      )} onSubmit={handleSubmit(onSignIn)}>
        <TextInput className="mt-4" label="EMAIL" {...register("email", {required: true})} />
        <TextInput className="mt-4" label="PASSWORD" {...register("password", {required: true})}  type="password" />
        <Button className="mt-10" isLoading={false}>SIGN IN</Button>
      </form>
    </PublicPage>
  )
}
