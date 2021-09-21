import { useCallback, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import PublicPage from '../src/components/PublicPage'

export default function Home() {

  return (
    <PublicPage title="ExtraTime" >
      <div className="text-4xl m-auto">Welcome to ExtraTime!</div>
    </PublicPage>
  )
}
