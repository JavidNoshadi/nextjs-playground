import Head from 'next/head'
import Link from 'next/link'
import axios from "axios"




  let server = 'http://localhost:7000'
  axios.get(server +'/login')
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
  })

export default function login() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <h1>{person}</h1> 
      <Link href='/'>
          <h1>HOME</h1>
      </Link>
    <style jsx>{
      `h1{
        font-size: 90px;
      }`
    }
    </style>
    </div>
  )
}
