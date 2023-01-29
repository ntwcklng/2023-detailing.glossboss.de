import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
