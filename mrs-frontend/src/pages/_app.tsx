import '@/styles/globals.css'
import '@/styles/teams.css'
import '@/styles/specificteam.css'
import '@/styles/teamcard.css'
import '@/styles/home.css'
import '@/styles/employees.css'
import '@/styles/employeecard.css'
import '@/styles/specificemployee.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
 //   <SessionProvider session={session} refetchInterval={5*60}>
      <Component {...pageProps} />
 //   </SessionProvider>
  )
}
