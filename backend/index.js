

const express = require("express")

const mysql = require("mysql2");
const app = express()

let port = 4444;

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))
