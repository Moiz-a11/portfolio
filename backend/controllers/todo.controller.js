import todo_model  from "../models/todo.js";

export const createTodo= async(req,res)=>{
    
const sample  =  new todo_model({text:req.body.text,completed:req.body.completed})

 let newtodo= await sample.save();
    res.status(2001).json(newtodo)

}


