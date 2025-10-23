

const express = require("express")

const mysql = require("mysql2");
const app = express()

let port = 4444;

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})

// async function main(){

// const connection = mongoose.connect({
    
// })

// }


// main()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
