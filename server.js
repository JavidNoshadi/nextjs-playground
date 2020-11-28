const express = require('express')

const app = express()
let json = {
    "ahmad": "madafaka"
}
app.get('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(json))
})

app.listen(7000,console.log('7000 runingggggggggggggg'))