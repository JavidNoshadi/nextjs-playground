const express = require('express')
const http = require('http')
const app = express()
const req = http.request({
    host: '192.168.43.212',
    port: 3000,
    method: 'POST'
  }, (res) => {
    res.resume();
    res.on('end', () => {
      if (!res.complete)
        console.error(
          'The connection was terminated while the message was still being sent');
    });
  });
let json = {
    "ahmad": "madafaka"
}
app.get('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(json)
})
app.post('/baak',(req,res)=>{
    console.log(req)
})
app.listen(7000,console.log('7000 runingggggggggggggg'))