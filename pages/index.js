import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>HELLO MADAFAKA</h1>
     
      <Link href='/login'>
          <h1>LOGIN</h1>
      </Link>
    <style jsx>{
      `h1{
        font-size: 90px;
      }`
    }
    </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
