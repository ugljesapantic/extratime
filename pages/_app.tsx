import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthContext } from '../src/utils/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContext>
    <Component {...pageProps} />
  </AuthContext>
}
export default MyApp
