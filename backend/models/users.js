
import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},

email:{
    type:String,
    required:true,
}

})


let user_model =  mongoose.model("User_model",userSchema)
export default user_model

