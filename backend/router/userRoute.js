
const  mongoose= require("mongoose")

const userSchema = mongoose.Schema({
    name:{

        type:String,
        require:true,
    },
     email:{

        type:String,
        require:true,
        unique:true,
     },

     subject:{

        type:String,
        require:true,
     },
     
     message:{

        type:String,
        require:true,
     }

})

