import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorawar's Portfolio</title>
      </Head>
      <h1 className="p-20 text-blue-800">Testing tailwind css</h1>
    </>
  )
}
