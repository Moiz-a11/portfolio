import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({

    text:{
type :String,
required : true
    },

    completed :{
        type:Boolean,
        required:true

    }


})

const todo_model = mongoose.model("todo_model",todoSchema)

export default todo_model
