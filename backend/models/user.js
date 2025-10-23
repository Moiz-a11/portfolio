
const express = require("express")
const mongoose = require("mongoose")

const userSchema  = mongoose.Schema({

name:{           
    type:String,
    require,
},
email : {
    type:String,
    require,
},

})

const User = mongoose.model(User,"userSchema")

export default User;


