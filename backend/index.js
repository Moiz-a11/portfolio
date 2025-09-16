import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express();
import todoRouter from "./routes/todoRoute.js";



dotenv.config()


const PORT = process.env.PORT
const DB_URI = process.env.MONGODB_URI
app.listen(PORT,()=>{

})

const startfunction=async ()=>{


  try{

 await mongoose.connect(DB_URI)
console.log("connected to db")
  } catch (err){
console.log(err)
  }
}
startfunction();
  
  app.use(express.json())

                //post
  app.use("/todo",todoRouter)

