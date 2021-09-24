import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import awsExports from '../src/aws-exports'

import Amplify from 'aws-amplify'
import { AuthContext } from '../src/utils/auth'

Amplify.configure(awsExports)

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContext>
    <Component {...pageProps} />
  </AuthContext>
}
export default MyApp
