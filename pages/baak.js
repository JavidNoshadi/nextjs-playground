import fetch from 'isomorphic-unfetch'

import TextField from '@material-ui/core/TextField';


const test = (props)=>{
    return(
        <div>
                    <h2>{props.ahmad}</h2>
                    <form method='POST' action='/login'>
                        <TextField className='inpur' id="standard-basic" label="رمز عبور" />
                        <button type='submit'>submit</button>
                    </form>
     { <style jsx>
          {
              `.inpur label{
                  direction: rtl !important;
              }`
          }
      </style>}
                </div>
            )
        }
        
  test.getInitialProps = async function(){
    let server = 'http://localhost:7000/login'
      const res = await fetch(server)
      const data = await res.json()

      return{
          ahmad : data.ahmad
      }

      }
  export default test