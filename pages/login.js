import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import baak from './baak'
/* 
  let server = 'http://localhost:7000'
  axios.get(server +'/login')
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
  }) */

const login = (props)=> {
  return (
    <div className="container">
      <h1>{props.bpi.time.updated}</h1>
  <baak></baak>
    </div>
  )
}
login.getInitialProps = async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()

  return{
    bpi : data
  }
}
export default login